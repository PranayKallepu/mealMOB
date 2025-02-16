import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../utils/data";
import {
    AddButton,
  ModalOverlay,
  ModalContainer,
  CloseButton,
  StyledForm,
  StyledInput,
  StyledSelect,
  StyledTextarea,
  SubmitButton,
} from "./styledComponent";
import Cookies from 'js-cookie'

const AddFood= () => {
  const restaurantId = Cookies.get("restaurantId");
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
  const [isOpen, setIsOpen] = useState(false); // Popup state

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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const vendorToken = Cookies.get("vendorToken");

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

      const response = await axios.post(`${API_URL}/api/add-foodItem`, formData, {
        headers: {
          Authorization: `Bearer ${vendorToken}`,
        },
      });

      if (response.data.success) {
        alert("Food Item Added Successfully!");
        window.location.reload();
      }
    } catch (error) {
      console.log("Error Response:", error.response?.data);
      setError(error.response?.data?.message || "Food Item addition failed");
    } finally {
      setLoading(false);
      setIsOpen(false); // Close popup after submission
    }
  };

  return (
    <>
      {/* Button to Open Popup */}
      <AddButton onClick={() => setIsOpen(true)}>Add Food</AddButton>

      {isOpen && (
        <ModalOverlay>
          <ModalContainer>
            <CloseButton onClick={() => setIsOpen(false)}>&times;</CloseButton>
            <StyledForm onSubmit={handleSubmit}>
              <h3>Add Food</h3>
              <StyledInput
                type="text"
                name="foodName"
                value={inputData.foodName}
                onChange={handleInput}
                placeholder="FOOD NAME *"
                required
              />

              <StyledInput type="file" onChange={handleUploadImage} required />

              <StyledInput
                type="text"
                name="price"
                value={inputData.price}
                placeholder="PRICE"
                onChange={handleInput}
                required
              />

              <StyledSelect
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
              </StyledSelect>

              <StyledTextarea
                name="description"
                value={inputData.description}
                placeholder="FOOD DESCRIPTION *"
                onChange={handleInput}
                required
              />

              <SubmitButton type="submit" disabled={isLoading}>
                {isLoading ? "Submitting..." : "Submit"}
              </SubmitButton>
            </StyledForm>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
};

export default AddFood;
