import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/OrderTrack.css";
import Header from "../components/Header";
import axios from "axios";
import Cookies from "js-cookie";
import { API_URL } from "../utils/data";
import { jwtDecode } from "jwt-decode";

const OrderTrack = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get token from cookies
  const token = Cookies.get("token");
  let userId = null;
  if (token) {
    const decoded = jwtDecode(token);
    userId = decoded.id;
  }
  console.log(userId);

  const fetchOrder = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/all-orders`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = response.data;
      console.log(data);
      setOrders(data.orders);
    } catch (error) {
      console.error("Error fetching order:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch the user orders from the backend
    fetchOrder();
  }, []);

  // Filter orders for this user
  const userOrders = orders.filter((order) => order.userId._id === userId);

  if (loading) {
    return <div className="loading">Loading order details...</div>;
  }

  if (userOrders.length === 0) {
    return (
      <>
        <Header />
        <div className="no-order">
          <h2>No order found</h2>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
        </div>
      </>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "orange";
      case "in progress":
        return "blue";
      case "delivered":
        return "green";
      default:
        return "gray";
    }
  };

  return (
    <>
      <Header />
      <div className="order-track-container">
        <h1>Order Tracking</h1>
        {userOrders.map((order) => (
          <div className="order-details" key={order._id}>
            <div className="order-header">
              <h2>Order #{order._id}</h2>
              <span
                className={`status ${order.status}`}
                style={{ color: getStatusColor(order.status) }}
              >
                {order.status}
              </span>
            </div>

            <div className="order-items">
              <h3>Items</h3>
              {order.items.map((item) => (
                <div key={item._id} className="order-item">
                  <img src={item.foodImage} alt={item.foodName} />
                  <div className="item-info">
                    <h4>{item.foodName}</h4>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ₹{item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="order-address">
              <h3>Delivery Address</h3>
              <p>{order.address.receiverName}</p>
              <p>{order.address.houseNumber}</p>
              {order.address.street && <p>{order.address.street}</p>}
              {order.address.landmark && <p>{order.address.landmark}</p>}
              <p>Mobile: {order.address.mobile}</p>
            </div>

            <div className="order-total">
              <h3>Total Amount</h3>
              <p>₹{order.total.toFixed(2)}</p>
            </div>
          </div>
        ))}
        <button onClick={() => navigate("/")} className="continue-shopping">
          Continue Shopping
        </button>
      </div>
    </>
  );
};

export default OrderTrack;
