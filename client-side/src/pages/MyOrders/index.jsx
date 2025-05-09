import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { CiCircleRemove } from "react-icons/ci";
import Header from "../../components/Header";
import { API_URL } from "../../utils/data";
import {
  MainContainer,
  SearchContainer,
  SearchInput,
  StatusDropdown,
  OrderLink,
  OrderCard,
  OrderImg,
  OrderDetails,
  OrderStatus,
  OrderName,
  OrderActions,
  CancelButton,
  RemoveButton,
  NoOrder,
  LoadingText,
} from "./styledComponent";
import { BeatLoader } from "react-spinners";

const MyOrders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  const token = Cookies.get("token");
  const userId = token ? jwtDecode(token).id : null;

  useEffect(() => {
    if (!token || !userId) {
      navigate("/login");
      return;
    }

    const fetchOrders = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/api/all-orders`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrders(response.data.orders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token, userId, navigate]);

  const handleCancel = async (orderId) => {
    try {
      await axios.put(
        `${API_URL}/api/order-status/${orderId}`,
        { status: "cancelled" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setOrders((prev) =>
        prev.map((order) =>
          order._id === orderId ? { ...order, status: "cancelled" } : order
        )
      );
    } catch (err) {
      console.error("Error cancelling order:", err);
    }
  };

  const handleRemove = async (orderId) => {
    try {
      await axios.delete(`${API_URL}/api/delete-order/${orderId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders((prev) => prev.filter((order) => order._id !== orderId));
    } catch (err) {
      console.error("Error deleting order:", err);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "orange";
      case "in progress":
        return "purple";
      case "delivered":
        return "green";
      case "cancelled":
        return "red";
      default:
        return "gray";
    }
  };

  const filteredOrders = orders
    .filter((order) => order.userId && order.userId._id === userId)
    .map((order) => ({
      ...order,
      filteredItems: order.items.filter((item) => {
        const matchesSearch = item.foodName
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesStatus =
          statusFilter === "all" || order.status === statusFilter;
        return matchesSearch && matchesStatus;
      }),
    }))
    .filter((order) => order.filteredItems.length > 0);

  if (loading) {
    return (
      <>
        <Header />
        <LoadingText>
          <BeatLoader color="#F7931E" />
        </LoadingText>
      </>
    );
  }

  if (filteredOrders.length === 0) {
    return (
      <>
        <Header />
        <NoOrder>
          <h2>No order found</h2>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
        </NoOrder>
      </>
    );
  }

  if (filteredOrders.length === 0) {
    return (
      <>
        <Header />
        <NoOrder>
          <h2>No order found</h2>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
        </NoOrder>
      </>
    );
  }

  return (
    <>
      <Header />
      <MainContainer>
        <h1>My Orders</h1>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search your order here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <StatusDropdown
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">Order Status</option>
            <option value="order confirmed">Order Confirmed</option>
            <option value="in progress">In Progress</option>
            <option value="delivered">Delivered</option>
          </StatusDropdown>
        </SearchContainer>

        {loading ? (
          <LoadingText>
            <BeatLoader color="#F7931E" />
          </LoadingText>
        ) : (
          filteredOrders.map((order) =>
            order.filteredItems.map((item) => (
              <OrderLink
                to={`/my-orders/${order._id}`}
                key={`${order._id}-${item._id}`}
              >
                <OrderCard>
                  <OrderImg src={item.foodImage} alt={item.foodName} />
                  <OrderDetails>
                    <OrderStatus
                      style={{ color: getStatusColor(order.status) }}
                    >
                      {order.status.charAt(0).toUpperCase() +
                        order.status.slice(1)}{" "}
                      on{" "}
                      {new Date(order.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </OrderStatus>
                    <OrderName>{item.foodName}</OrderName>
                  </OrderDetails>
                  <OrderActions>
                    {order.status !== "cancelled" ? (
                      <CancelButton
                        onClick={(e) => {
                          e.preventDefault();
                          handleCancel(order._id);
                        }}
                      >
                        Cancel Order
                      </CancelButton>
                    ) : (
                      <RemoveButton
                        onClick={(e) => {
                          e.preventDefault();
                          handleRemove(order._id);
                        }}
                      >
                        <CiCircleRemove />
                      </RemoveButton>
                    )}
                  </OrderActions>
                </OrderCard>
              </OrderLink>
            ))
          )
        )}
      </MainContainer>
    </>
  );
};

export default MyOrders;
