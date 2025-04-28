import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "../../styles/AddAddress.css";
import "./style.css";
import Popup from "reactjs-popup";

const AddressPopup = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const [address, setAddress] = useState({
    receiverName: "",
    mobile: "",
    houseNumber: "",
    street: "",
    landmark: "",
    latitude: "",
    longitude: "",
  });
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    // Check if user has existing address
    const savedAddress = localStorage.getItem("deliveryAddress");
    if (savedAddress) {
      setAddress(JSON.parse(savedAddress));
      setIsEdit(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (cart.length === 0) {
    return (
      <div className="address-empty">
        <h2>Your cart is empty</h2>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
      </div>
    );
  }

  return (
    <Popup
      modal
      overlayStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      contentStyle={{
        background: "transparent",
        border: "none",
        minWidth: "400px",
      }}
      trigger={
        isEdit ? (
          <button className="change-address-btn">Change Address</button>
        ) : (
          <button className="change-address-btn">Add Address</button>
        )
      }
      nested
    >
      {(close) => {
        const handleSubmit = (e) => {
          e.preventDefault();
          if (
            !address.receiverName ||
            !address.mobile ||
            !address.houseNumber
          ) {
            alert("Please fill in all required fields");
            return;
          }
          localStorage.setItem("deliveryAddress", JSON.stringify(address));
          close();
          alert("Address added successfully");
        };

        return (
          <div className="address-container">
            <h1>{isEdit ? "Edit Delivery Address" : "Add Delivery Address"}</h1>

            <form onSubmit={handleSubmit} className="address-form">
              <div className="form-group">
                <label>Receiver's Name *</label>
                <input
                  type="text"
                  name="receiverName"
                  value={address.receiverName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Mobile Number *</label>
                <input
                  type="tel"
                  name="mobile"
                  value={address.mobile}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                />
              </div>

              <div className="form-group">
                <label>House Number *</label>
                <input
                  type="text"
                  name="houseNumber"
                  value={address.houseNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>City *</label>
                <input
                  type="text"
                  name="city"
                  value={address.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>State *</label>
                <input
                  type="text"
                  name="state"
                  value={address.state}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Pincode *</label>
                <input
                  type="text"
                  name="pincode"
                  value={address.pincode}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="proceed-btn">
                {isEdit ? "Update Address" : "Add Address"}
              </button>
            </form>
          </div>
        );
      }}
    </Popup>
  );
};

export default AddressPopup;
