import { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import axios from "axios";
import { categoryEnum, cuisinesEnum } from "../../utils/enums";
import {
  ModalContainer,
  ModalOverlay,
  CloseButton,
  Form,
  Input,
  Button,
  Select,
  CheckboxContainer,
} from "./styledComponent";

const UpdateRestaurant = ({ restaurantId }) => {
  const [restaurant, setRestaurant] = useState(null);
  const [inputData, setInputData] = useState({
    restaurantName: "",
    rating: "",
    offer: "",
    area: "",
    category: "",
    cuisines: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch previous restaurant details
  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await axios.get(`/restaurant/${restaurantId}`);
        const data = response.data;
        setRestaurant(data);
        setInputData({
          restaurantName: data.restaurantName || "",
          rating: data.rating || "",
          offer: data.offer || "",
          area: data.area || "",
          category: data.category || "",
          cuisines: data.cuisines || [],
        });
      } catch (err) {
        console.error("Error fetching restaurant:", err);
      }
    };
    fetchRestaurant();
  }, [restaurantId]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
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
      const response = await axios.patch(`/restaurant/update/${restaurantId}`, inputData);
      console.log("Update Success:", response.data);
      alert("Restaurant updated successfully!");
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
              <Select name="category" value={inputData.category} onChange={handleCategory}>
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
