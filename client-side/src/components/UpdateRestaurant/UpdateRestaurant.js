import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import axios from "axios";
import { categoryEnum, cuisinesEnum } from "../../utils/enums";
import { API_URL } from "../../utils/data";
import useFetchRestaurants from "../../hooks/useFetchRestaurants";
import Cookies from "js-cookie";
import {
  ModalContainer,
  ModalOverlay,
  CloseButton,
  Form,
  ImageCard,
  ImagePreview,
  HiddenFileInput,
  FileUploadLabel,
  Input,
  Button,
  Select,
  CheckboxContainer,
} from "./styledComponent";

const UpdateRestaurant = ({ restaurantId }) => {
  const [inputData, setInputData] = useState({
    restaurantName: "",
    restaurantImage: "",
    rating: "",
    offer: "",
    area: "",
    category: "",
    cuisines: [],
  });
  const imageUrl =
    inputData.restaurantImage instanceof File
      ? URL.createObjectURL(inputData.restaurantImage) // Convert file to preview URL
      : `${API_URL}/${inputData.restaurantImage?.replace(/\\/g, "/")}`; // Use API URL for existing image

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const authToken = Cookies.get("vendorToken");

  // Fetch previous restaurant details
  const { restaurantsList = [] } = useFetchRestaurants(
    null,
    null,
    null,
    authToken
  );

  // Find and set previous restaurant data
  useEffect(() => {
    if (restaurantsList.length > 0) {
      const restaurant = restaurantsList.find(
        (each) => each._id === restaurantId
      );
      if (restaurant) {
        setInputData({
          restaurantName: restaurant.restaurantName || "",
          restaurantImage: restaurant.restaurantImage || "",
          rating: restaurant.rating || "",
          offer: restaurant.offer || "",
          area: restaurant.area || "",
          category: restaurant.category || "",
          cuisines: restaurant.cuisines || [],
        });
      }
    }
  }, [restaurantsList, restaurantId]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setInputData((prev) => ({ ...prev, restaurantImage: e.target.files[0] }));
  };

  // Handle category change
  const handleCategory = (e) => {
    setInputData((prev) => ({ ...prev, category: e.target.value }));
  };

  // Handle cuisines checkbox change
  const handleCuisines = (e) => {
    const { value, checked } = e.target;
    setInputData((prev) => ({
      ...prev,
      cuisines: checked
        ? [...prev.cuisines, value]
        : prev.cuisines.filter((cuisine) => cuisine !== value),
    }));
  };

  // Handle form submission
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
  
    try {
      const formData = new FormData();
      formData.append("restaurantName", inputData.restaurantName);
      formData.append("rating", inputData.rating);
      formData.append("offer", inputData.offer);
      formData.append("area", inputData.area);
      formData.append("category", inputData.category);
      formData.append("cuisines", JSON.stringify(inputData.cuisines));
  
      // ✅ Only append `restaurantImage` if a new file is selected
      if (inputData.restaurantImage instanceof File) {
        formData.append("restaurantImage", inputData.restaurantImage);
      } else {
        formData.append("restaurantImage", inputData.restaurantImage); // Use existing image
      }
  
      const response = await axios.put(`${API_URL}/api/update-restaurant/${restaurantId}`, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      });
      alert(`${response.data.message}!`);
      window.location.reload();
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <Popup
      modal
      overlayStyle={{ background: "rgba(0, 0, 0, 0.4)" }}
      contentStyle={{ background: "transparent", border: "none" }}
      trigger={<Button>Update Restaurant</Button>}
    >
      {(close) => (
        <>
          <ModalOverlay onClick={close} />
          <ModalContainer>
            <CloseButton onClick={close}>&times;</CloseButton>
            <Form onSubmit={handleUpdate}>
              <h3>Update Restaurant</h3>

              <ImageCard>
                <ImagePreview src={imageUrl} alt="Restaurant" />

                {/* Hidden file input */}
                <HiddenFileInput
                  type="file"
                  id="fileUpload"
                  name="restaurantImage"
                  accept="image/*"
                  onChange={handleFileChange}
                />

                {/* Styled Upload Button */}
                <FileUploadLabel htmlFor="fileUpload">
                  Choose Image
                </FileUploadLabel>
              </ImageCard>

              <Input
                type="text"
                name="restaurantName"
                placeholder="Restaurant Name"
                value={inputData.restaurantName}
                onChange={handleInputChange}
              />
              <Input
                type="number"
                name="rating"
                placeholder="Rating"
                value={inputData.rating}
                onChange={handleInputChange}
              />
              <Input
                type="text"
                name="offer"
                placeholder="Offer %"
                value={inputData.offer}
                onChange={handleInputChange}
              />
              <Input
                type="text"
                name="area"
                placeholder="Area"
                value={inputData.area}
                onChange={handleInputChange}
              />

              {/* Category Dropdown */}
              <Select
                name="category"
                value={
                  Array.isArray(inputData.category)
                    ? inputData.category[0] || ""
                    : inputData.category
                }
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
              </Select>

              {/* Cuisines Checkboxes */}
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

              <Button type="submit" disabled={loading}>
                {loading ? "Updating..." : "Update"}
              </Button>
            </Form>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </ModalContainer>
        </>
      )}
    </Popup>
  );
};

export default UpdateRestaurant;
