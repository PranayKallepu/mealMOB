import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import Popup from "reactjs-popup";
import {
  AddressContainer,
  AddressForm,
  FormGroup,
  ProceedButton,
  ChangeAddressBtn,
  AddressEmpty,
} from "./styledComponent";
import toast from "react-hot-toast";
import axios from "axios";
import { API_URL } from "../../utils/data";
import Cookies from "js-cookie";

const AddressPopup = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const token = Cookies.get("token");
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
      <AddressEmpty>
        <h2>Your cart is empty</h2>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
      </AddressEmpty>
    );
  }

  const handleSubmit = async (e, closePopup) => {
    e.preventDefault();
    if (
      !address.street ||
      !address.city ||
      !address.state ||
      !address.pincode
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      await axios.post(`${API_URL}/api/address`, address, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Address added successfully");
      localStorage.setItem("deliveryAddress", JSON.stringify(address));
      closePopup();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add address");
    }
  };

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
        <ChangeAddressBtn>
          {isEdit ? "Change Address" : "Add Address"}
        </ChangeAddressBtn>
      }
      nested
    >
      {(closePopup) => (
        <AddressContainer>
          <h1>{isEdit ? "Edit Delivery Address" : "Add Delivery Address"}</h1>
          <AddressForm onSubmit={(e) => handleSubmit(e, closePopup)}>
            <FormGroup>
              <label>Receiver's Name *</label>
              <input
                type="text"
                name="receiverName"
                value={address.receiverName}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <label>Mobile Number *</label>
              <input
                type="tel"
                name="mobile"
                value={address.mobile}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
              />
            </FormGroup>

            <FormGroup>
              <label>House Number *</label>
              <input
                type="text"
                name="houseNumber"
                value={address.houseNumber}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <label>City *</label>
              <input
                type="text"
                name="city"
                value={address.city}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <label>State *</label>
              <input
                type="text"
                name="state"
                value={address.state}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <label>Pincode *</label>
              <input
                type="text"
                name="pincode"
                value={address.pincode}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <ProceedButton type="submit">
              {isEdit ? "Update Address" : "Add Address"}
            </ProceedButton>
          </AddressForm>
        </AddressContainer>
      )}
    </Popup>
  );
};

export default AddressPopup;
