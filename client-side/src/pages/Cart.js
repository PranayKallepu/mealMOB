import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/Cart.css";
import Header from "../components/Header";
import axios from "axios";
import { API_URL } from "../utils/data";
import Cookies from "js-cookie";
import AddressPopup from "../components/AddressPopup";

const Cart = () => {
  const authToken = Cookies.get("token");
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, calculateTotal, clearCart } =
    useCart();

  const { subtotal, deliveryFee, discount, tax, total } = calculateTotal();
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const deliveryAddress = JSON.parse(localStorage.getItem("deliveryAddress"));

  const handlePlaceOrder = async () => {
    try {
      setIsPlacingOrder(true);
      const address = JSON.parse(localStorage.getItem("deliveryAddress"));

      if (!address) {
        alert("Please add delivery address first");
        navigate("/cart/add-address");
        return;
      }

      const response = await axios.post(
        `${API_URL}/api/orders`,
        {
          items: cart,
          address,
          total,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.status !== 200 && response.status !== 201) {
        throw new Error("Failed to place order");
      }
      alert("Order placed successfully");
      navigate("/order-track");
      clearCart();
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    } finally {
      setIsPlacingOrder(false);
    }
  };

  if (cart.length === 0) {
    return (
      <>
        <Header />
        <div className="cart-empty">
          <img
            className="cart-empty-image"
            src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png"
            alt="cart empty"
          />
          <h2>Your cart is empty</h2>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="cart-container">
        {/* display the address */}
        {deliveryAddress ? (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                border: "1x solid #ccc",
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "white",
              }}
            >
              <p>
                Deliver to:{" "}
                <span style={{ fontWeight: "bold" }}>
                  {deliveryAddress.city}-{deliveryAddress.pincode}
                </span>
              </p>
              <AddressPopup />
            </div>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              border: "1x solid #ccc",
              padding: "10px",
              borderRadius: "10px",
              backgroundColor: "white",
            }}
          >
            <p>No delivery address found. Please add one first.</p>
            <AddressPopup />
          </div>
        )}
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item._id} className="cart-item">
                <img src={item.foodImage} alt={item.foodName} />
                <div className="item-details">
                  <h3>{item.foodName}</h3>
                  <p>₹{item.price}</p>
                  <div className="quantity-control">
                    <button
                      onClick={() =>
                        updateQuantity(item._id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item._id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bill-details">
            <h2>Bill Details</h2>
            <div className="bill-item">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="bill-item">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee.toFixed(2)}</span>
            </div>
            <div className="bill-item">
              <span>Discount</span>
              <span>-₹{discount.toFixed(2)}</span>
            </div>
            <div className="bill-item">
              <span>Tax & Other Charges (18%)</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>
            <div className="bill-item total">
              <span>Total Amount</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <div className="bill-item save">
              <span>You will save ₹{discount.toFixed(2)} on this order</span>
            </div>
            <button
              className="proceed-btn"
              onClick={handlePlaceOrder}
              disabled={isPlacingOrder}
            >
              {isPlacingOrder ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
