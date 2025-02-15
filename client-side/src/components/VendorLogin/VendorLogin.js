import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { FormContainer, Form } from "../VendorRegister/styledComponent";

const VendorLogin = () => {
  const [inputData, setInputData] = useState({
    vendorEmail: "",
    vendorPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await axios.post('/vendor/login', inputData);
      if (response.data.success) {
        Cookies.set("vendorToken", response.data.token);
        Cookies.set("vendorId", response.data.vendorId);
        Cookies.set("vendorName", response.data.vendorName);
        // add restaurant id to local storage if present
        if (response.data.restaurantId) {
          Cookies.set("restaurantId", response.data.restaurantId);
        }
        window.location.href = "/vendor";
      }
    } catch (error) {
      setError(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <h3>LOGIN</h3>
        <label id="email">Vendor Email* :</label>
        <input
          htmlFor="email"
          type="email"
          name="vendorEmail"
          onChange={handleInput}
          placeholder="ENTER EMAIL"
          required
        />
        <label id="password">Vendor Password* :</label>
        <input
          htmlFor="password"
          type="password"
          name="vendorPassword"
          onChange={handleInput}
          placeholder="ENTER PASSWORD"
          required
        />
        <button isLoading={loading} type="submit" disabled={loading}>
          {loading ? "Logging..." : "Login"}
        </button>
      </Form>
      {error && <p>{error}</p>}
    </FormContainer>
  );
};

export default VendorLogin;
