import { useEffect, useState } from "react";
import {
  OrdersContainer,
  OrderCard,
  OrderHeader,
  OrderDetails,
  StatusSelect,
  OrderItems,
  ItemRow,
  NoOrders,
} from "./styledComponent";
import axios from "axios";
import { API_URL } from "../../utils/data";
import Cookies from "js-cookie";
const OrderManagement = ({ restaurantId }) => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const token = Cookies.get("vendorToken");
      const response = await axios.get(`${API_URL}/api/all-orders`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(response.data.orders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Filter orders for this restaurant
  const restaurantOrders = orders.filter(
    (order) => order.restaurantId._id === restaurantId
  );

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const token = Cookies.get("vendorToken");
      const response = await axios.put(
        `${API_URL}/api/order-status/${orderId}`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert(response.data.message);
      fetchOrders();
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  if (!restaurantOrders || restaurantOrders.length === 0) {
    return (
      <NoOrders>
        <h3>No Orders Yet</h3>
        <p>New orders will appear here</p>
      </NoOrders>
    );
  }

  return (
    <OrdersContainer>
      <h2>Manage Orders</h2>
      {restaurantOrders.map((order) => (
        <OrderCard key={order._id}>
          <OrderHeader>
            <div>
              <h3>Order #{order._id}</h3>
              <p>Ordered on: {new Date(order.createdAt).toLocaleString()}</p>
            </div>
            <StatusSelect
              value={order.status}
              onChange={(e) => handleStatusChange(order._id, e.target.value)}
            >
              <option value="pending">Pending</option>
              <option value="in progress">In Progress</option>
              <option value="delivered">Delivered</option>
            </StatusSelect>
          </OrderHeader>

          <OrderDetails>
            <div>
              <h4>Delivery Address</h4>
              <p>{order.address.receiverName}</p>
              <p>{order.address.houseNumber}</p>
              <p>
                {order.address.city}, {order.address.state} -{" "}
                {order.address.pincode}
              </p>
            </div>

            <OrderItems>
              <h4>Order Items</h4>
              {order.items.map((item) => (
                <ItemRow key={item._id}>
                  <span>{item.foodName}</span>
                </ItemRow>
              ))}
            </OrderItems>
          </OrderDetails>
        </OrderCard>
      ))}
    </OrdersContainer>
  );
};

export default OrderManagement;
