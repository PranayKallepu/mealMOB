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
  CheckboxContainer,
  SubmitButton,
} from "./styledComponent";

const AddRestaurant = ({ setIsClick }) => {
  const vendorId = Cookies.get("vendorId");
  const [isOpen, setIsOpen] = useState(false);
  const [inputData, setInputData] = useState({
    restaurantName: "",
    restaurantImage: null,
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
    setInputData({ ...inputData, restaurantImage: e.target.files[0] });
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
      formData.append("restaurantImage", inputData.restaurantImage);
      formData.append("rating", inputData.rating);
      formData.append("offer", inputData.offer);
      formData.append("area", inputData.area);
      formData.append("category", inputData.category);
      inputData.cuisines.forEach((cuisine) => formData.append("cuisines", cuisine));
      formData.append("vendorId", vendorId);

      const response = await axios.post(`${API_URL}/api/add-restaurant`, formData, {
        headers: { Authorization: `Bearer ${vendorToken}` },
      });

      if (response.data.success) {
        alert("Restaurant Added Successfully!");
        Cookies.set("restaurantId", response.data.restaurantId);
        window.location.reload();
        setIsClick(false);
        setIsOpen(false); // Close popup after submission
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

              <StyledInput type="file" onChange={handleUploadImage} required />

              <StyledInput
                type="number"
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
                required
              />

              <StyledInput
                type="text"
                name="area"
                placeholder="Location/Area"
                onChange={handleInput}
                required
              />

              <StyledSelect name="category" value={inputData.category} onChange={handleCategory}>
                <option value="" disabled>
                  Select Category
                </option>
                {categoryEnum.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </StyledSelect>

              <label>Cuisines:</label>
              <CheckboxContainer>
                {cuisinesEnum.map((cuisine) => (
                  <div key={cuisine}>
                    <label htmlFor={cuisine}>{cuisine}</label>
                    <input
                      id={cuisine}
                      type="checkbox"
                      value={cuisine}
                      checked={inputData.cuisines.includes(cuisine)}
                      onChange={handleCuisines}
                    />
                  </div>
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
