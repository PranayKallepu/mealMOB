import axios from "axios";
import React, { useState } from "react";
import Cookies from 'js-cookie'
import { API_URL } from "../../utils/data";
import { FormContainer, Form } from "./styledComponent";

const VendorRegister = ({ setIsLogin }) => {
  // States
  const [inputData, setInputData] = useState({
    vendorName: "",
    vendorEmail: "",
    vendorPassword: "",
    confirmPassword: "", 
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle Input Changes
  const handleInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Password Match Validation
    if (inputData.vendorPassword !== inputData.confirmPassword) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/vendor/register`, inputData);
      if (response.data.success) {
        alert("Vendor Registered Successfully!");
        Cookies.set('vendorName', response.data.vendorName)
        setIsLogin(true);
      }
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <h3>REGISTER</h3>
        <input
          type="text"
          name="vendorName"
          onChange={handleInput}
          placeholder="VENDOR NAME *"
          required
        />
        <input
          type="email"
          name="vendorEmail"
          onChange={handleInput}
          placeholder="VENDOR EMAIL *"
          required
        />
        <input
          type="password"
          name="vendorPassword"
          onChange={handleInput}
          placeholder="VENDOR PASSWORD *"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          onChange={handleInput}
          placeholder="CONFIRM PASSWORD *"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </Form>
      {error && <p>{error}</p>}
    </FormContainer>
  );
};

export default VendorRegister;
