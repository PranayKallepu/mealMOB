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
import Cookies from "js-cookie";

const AddFood = () => {
  const restaurantId = Cookies.get("restaurantId");
  const navigate = useNavigate();

  // states
  const [inputData, setInputData] = useState({
    foodName: "",
    foodImage: null,
    imageUrl: "",
    price: "",
    category: "",
    description: "",
    restaurantId: restaurantId,
  });
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isFill, setIsFill] = useState(false);

  // Handle input changes
  const handleInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleFocus = (e) => {
    setIsFill(true);
  };

  const handleBlur = (e) => {
    setIsFill(false);
  };

  // Handle file upload
  const handleUploadImage = (e) => {
    const file = e.target.files[0]; // If file is uploaded
    setInputData({ ...inputData, foodImage: file, imageUrl: "" });
  };
  // Handle image URL upload
  const handleImageUrl = (e) => {
    setInputData({ ...inputData, imageUrl: e.target.value, foodImage: null });
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
      return;
    }

    try {
      const formData = new FormData();
      formData.append("foodName", inputData.foodName);
      formData.append("price", inputData.price);
      formData.append("category", inputData.category);
      formData.append("description", inputData.description);
      formData.append("restaurantId", inputData.restaurantId);
      if (inputData.foodImage) {
        // If user uploaded a file
        formData.append("foodImage", inputData.foodImage);
      } else if (inputData.imageUrl) {
        // If user provided a direct URL
        formData.append("foodImage", inputData.imageUrl);
      }

      const response = await axios.post(
        `${API_URL}/api/add-foodItem`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${vendorToken}`,
          },
        }
      );

      if (response.data.success) {
        alert("Food Item Added Successfully!");
        navigate("/vendor/food-menu");
        setInputData({
          foodName: "",
          price: "",
          category: "",
          description: "",
        });
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
                isFill={isFill}
                type="text"
                name="foodName"
                value={inputData.foodName}
                onChange={handleInput}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="FOOD NAME *"
                required
              />

              <label>Upload Image:</label>
              <StyledInput
                type="file"
                accept="image/*"
                onChange={handleUploadImage}
              />

              <label>OR Enter Image URL:</label>
              <StyledInput
                isFill={isFill}
                type="text"
                name="imageUrl"
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="https://example.com/image.jpg"
                onChange={handleImageUrl}
              />

              <StyledInput
                isFill={isFill}
                type="text"
                name="price"
                value={inputData.price}
                placeholder="PRICE ex: 100"
                onChange={handleInput}
                onFocus={handleFocus}
                onBlur={handleBlur}
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
                isFill={isFill}
                name="description"
                value={inputData.description}
                placeholder="FOOD DESCRIPTION *"
                onChange={handleInput}
                onFocus={handleFocus}
                onBlur={handleBlur}
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
