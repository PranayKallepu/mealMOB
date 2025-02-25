import { useState } from "react";
import axios from "axios";
import { categoryEnum, cuisinesEnum } from "../../utils/enums";
import { API_URL } from "../../utils/data";
import Cookies from "js-cookie";
import {
  AddButton,
  ModalOverlay,
  ModalContainer,
  CloseButton,
  StyledForm,
  StyledInput,
  StyledSelect,
  SubmitButton,
  CheckboxContainer,
  Label,
  CuisinesCard,
  StyleCheckBox,
} from "./styledComponent";
import AddFood from "../AddFood";

const AddRestaurant = () => {
  const vendorId = Cookies.get("vendorId");
  const [isOpen, setIsOpen] = useState(false);
  const [inputData, setInputData] = useState({
    restaurantName: "",
    restaurantImage: null,
    imageUrl: "",
    rating: "",
    offer: "",
    area: "",
    category: "",
    cuisines: [],
    vendorId,
  });
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleUploadImage = (e) => {
    setInputData({
      ...inputData,
      restaurantImage: e.target.files[0],
      imageUrl: "",
    });
  };

  const handleImageUrl = (e) => {
    setInputData({
      ...inputData,
      imageUrl: e.target.value,
      restaurantImage: null,
    });
  };

  const handleCategory = (e) => {
    setInputData({ ...inputData, category: e.target.value });
  };

  const handleCuisines = (e) => {
    const { value, checked } = e.target;
    setInputData((prevState) => ({
      ...prevState,
      cuisines: checked
        ? [...prevState.cuisines, value]
        : prevState.cuisines.filter((cuisine) => cuisine !== value),
    }));
  };

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

    try {
      const formData = new FormData();
      formData.append("restaurantName", inputData.restaurantName);
      formData.append("rating", inputData.rating);
      formData.append("offer", inputData.offer);
      formData.append("area", inputData.area);
      formData.append("category", inputData.category);
      if (inputData.restaurantImage) {
        // If user uploaded a file
        formData.append("restaurantImage", inputData.restaurantImage);
      } else if (inputData.imageUrl) {
        // If user provided a direct URL
        formData.append("restaurantImage", inputData.imageUrl);
      }
      inputData.cuisines.forEach((cuisine) =>
        formData.append("cuisines", cuisine)
      );
      formData.append("vendorId", vendorId);

      const response = await axios.post(
        `${API_URL}/api/add-restaurant`,
        formData,
        {
          headers: { Authorization: `Bearer ${vendorToken}` },
        }
      );

      if (response.data.success) {
        alert("Restaurant Added Successfully!");
        Cookies.set("restaurantId", response.data.restaurantId);
        setIsOpen(false); // Close popup after submission
        return <AddFood />;
      }
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Button to Open Popup */}
      <AddButton onClick={() => setIsOpen(true)}>Add Restaurant</AddButton>

      {isOpen && (
        <ModalOverlay>
          <ModalContainer>
            <CloseButton onClick={() => setIsOpen(false)}>&times;</CloseButton>
            <StyledForm onSubmit={handleSubmit}>
              <h3>Add Restaurant</h3>

              <StyledInput
                type="text"
                name="restaurantName"
                placeholder="Restaurant Name"
                onChange={handleInput}
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
                type="text"
                name="imageUrl"
                placeholder="https://example.com/image.jpg"
                onChange={handleImageUrl}
              />

              <StyledInput
                type="float"
                name="rating"
                placeholder="Rating"
                onChange={handleInput}
                required
              />

              <StyledInput
                type="text"
                name="offer"
                placeholder="Offer (e.g. 10% off)"
                onChange={handleInput}
                value={inputData.offer.toUpperCase()} // Convert to uppercase
              />

              <StyledInput
                type="text"
                name="area"
                placeholder="Location/Area"
                onChange={handleInput}
                required
              />

              <StyledSelect
                name="category"
                value={inputData.category}
                onChange={handleCategory}
              >
                <option value="" disabled>
                  Select Category
                </option>
                {categoryEnum.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </StyledSelect>

              <CheckboxContainer>
                <Label>Cuisines:</Label>
                {cuisinesEnum.map((cuisine) => (
                  <CuisinesCard key={cuisine} htmlFor={cuisine}>
                    <StyleCheckBox
                      id={cuisine}
                      value={cuisine}
                      checked={inputData.cuisines.includes(cuisine)}
                      onChange={handleCuisines}
                    />
                    {cuisine} {/* Cuisine Name beside the checkbox */}
                  </CuisinesCard>
                ))}
              </CheckboxContainer>

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

export default AddRestaurant;
