import { useState } from "react";
import axios from "axios";
import { FormContainer, Form } from "../VendorRegister/styledComponent";
import { useNavigate } from "react-router-dom";

const AddFoodItem = () => {
  const restaurantId = localStorage.getItem("restaurantId");
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    foodName: "",
    foodImage: null,
    price: "",
    category: "",
    description: "",
    restaurantId: restaurantId,
  });
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  // Handle input changes
  const handleInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  // Handle file upload
  const handleUploadImage = (e) => {
    if (e.target.files.length > 0) {
      setInputData((prevData) => ({
        ...prevData,
        foodImage: e.target.files[0],
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const vendorToken = localStorage.getItem("vendorToken");

    if (!vendorToken) {
      setError("Unauthorized: Please log in again.");
      setLoading(false);
      return;
    }

    if (!inputData.restaurantId) {
      alert("Please add Restaurant First.");
      navigate("/vendor");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("foodName", inputData.foodName);
      formData.append("foodImage", inputData.foodImage);
      formData.append("price", inputData.price);
      formData.append("category", inputData.category);
      formData.append("description", inputData.description);
      formData.append("restaurantId", inputData.restaurantId);

      const response = await axios.post(
        '/api/add-foodItem',
        formData,
        {
          headers: {
            Authorization: `Bearer ${vendorToken}`,
          },
        }
      );

      if (response.data.success) {
        alert("Food Item Added Successfully!");
        window.location.reload()
      }
    } catch (error) {
      console.log("Error Response:", error.response?.data);
      setError(error.response?.data?.message || "Food Item addition failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <h3>Add Food</h3>
        <input
          type="text"
          name="foodName"
          value={inputData.foodName}
          onChange={handleInput}
          placeholder="FOOD NAME *"
          required
        />

        <input type="file" onChange={handleUploadImage} required />

        <input
          type="text"
          name="price"
          value={inputData.price}
          placeholder="PRICE"
          onChange={handleInput}
          required
        />

        <select
          name="category"
          value={inputData.category}
          onChange={handleInput}
          required
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
        </select>

        <textarea
          name="description"
          value={inputData.description}
          placeholder="FOOD DESCRIPTION *"
          onChange={handleInput}
          required
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </Form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </FormContainer>
  );
};

export default AddFoodItem;
