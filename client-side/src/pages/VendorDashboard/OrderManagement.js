import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { API_URL } from "../../utils/data";
import Cookies from "js-cookie";
import { format, isToday, isYesterday } from "date-fns";
import { IoMdCopy } from "react-icons/io";
import toast from "react-hot-toast";
import { BsThreeDots } from "react-icons/bs";
import {
  OrdersContainer,
  OrderCard,
  OrderDetails,
  ItemsCard,
  ButtonsCard,
  CancelButton,
  AcceptButton,
  OrderIdContainer,
  CopyButton,
  StatusSelect,
  ItemRow,
  NoOrders,
} from "./styledComponent";
import { BeatLoader } from "react-spinners";

const OrderManagement = ({ restaurantId }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusLoading, setStatusLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  const fetchOrders = useCallback(async () => {
    try {
      setLoading(true);
      const token = Cookies.get("vendorToken");
      const response = await axios.get(`${API_URL}/api/all-orders`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const orders = response.data.orders.filter(
        (order) => order.restaurantId._id === restaurantId
      );
      setOrders(orders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  }, [restaurantId]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const handleCancelOrder = async (orderId) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this order?"
    );
    if (!confirmCancel) return;

    try {
      const token = Cookies.get("vendorToken");
      await axios.put(
        `${API_URL}/api/order-status/${orderId}`,
        { status: "cancelled" },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Order cancelled.");
      fetchOrders();
    } catch (error) {
      console.error("Error cancelling order:", error);
      toast.error("Failed to cancel order.");
    }
  };

  const handleAcceptOrder = async (orderId) => {
    setStatusLoading(true);
    try {
      const token = Cookies.get("vendorToken");
      await axios.put(
        `${API_URL}/api/order-status/${orderId}`,
        { status: "in progress" },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Order Accepted!");
      fetchOrders();
    } catch (error) {
      console.error("Error accepting order:", error);
    } finally {
      setStatusLoading(false);
    }
  };

  const handleStatusChange = async (orderId, newStatus) => {
    setStatusLoading(true);
    try {
      const token = Cookies.get("vendorToken");
      const response = await axios.put(
        `${API_URL}/api/order-status/${orderId}`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success(response.data.message);
      fetchOrders();
    } catch (error) {
      console.error("Error updating order status:", error);
      toast.error("Failed to update order status.");
    } finally {
      setStatusLoading(false);
    }
  };

  function formatOrderDate(dateString) {
    const date = new Date(dateString);
    if (isToday(date)) {
      return `Today at ${format(date, "h:mm a")}`;
    } else if (isYesterday(date)) {
      return `Yesterday at ${format(date, "h:mm a")}`;
    } else {
      return format(date, "MMM d 'at' h:mm a");
    }
  }

  // Pagination logic
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  if (loading)
    return (
      <p style={{ textAlign: "center" }}>
        <BeatLoader color="#F7931E" />
      </p>
    );

  if (!orders || orders.length === 0) {
    return (
      <NoOrders>
        <h3>No Orders Yet</h3>
        <p>New orders will appear here</p>
      </NoOrders>
    );
  }

  return (
    <>
      <OrdersContainer>
        <h2>Manage Orders</h2>
        {currentOrders.map((order) => (
          <OrderCard key={order._id}>
            <OrderDetails>
              <div>
                <h3>{order.address.receiverName}</h3>
                <span>{formatOrderDate(order.createdAt)}</span>
              </div>
              <div>
                <OrderIdContainer>
                  <p>Order Id: {order._id.slice(0, 4)}...</p>
                  <CopyButton
                    onClick={() => navigator.clipboard.writeText(order._id)}
                  >
                    <IoMdCopy />
                  </CopyButton>
                </OrderIdContainer>
                <p>Total: ₹{order.total}</p>
              </div>
            </OrderDetails>

            <ItemsCard>
              {order.items.map((item) => (
                <ItemRow key={item._id}>
                  <p>{item.foodName.slice(0, 20)}</p>
                  <p>
                    <span>Qty:</span> {item.quantity}
                  </p>
                  <p>
                    <span>₹</span> {item.price}.00
                  </p>
                </ItemRow>
              ))}
            </ItemsCard>

            <ButtonsCard>
              {order.status === "cancelled" ? (
                <p style={{ color: "#e53935", fontWeight: "500" }}>
                  This item is cancelled
                </p>
              ) : (
                <>
                  <CancelButton onClick={() => handleCancelOrder(order._id)}>
                    Cancel Order
                  </CancelButton>
                  {order.status === "pending" ? (
                    <AcceptButton onClick={() => handleAcceptOrder(order._id)}>
                      Accept Order
                    </AcceptButton>
                  ) : statusLoading ? (
                    <BsThreeDots />
                  ) : (
                    <StatusSelect
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                    >
                      <option value="pending">Pending</option>
                      <option value="in progress">In Progress</option>
                      <option value="delivered">Delivered</option>
                    </StatusSelect>
                  )}
                </>
              )}
            </ButtonsCard>
          </OrderCard>
        ))}
      </OrdersContainer>

      {/* Pagination Controls */}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span style={{ margin: "0 1rem" }}>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </>
  );
};

export default OrderManagement;
