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
import toast from "react-hot-toast";

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setInputData((prev) => ({ ...prev, restaurantImage: e.target.files[0] }));
  };

  const handleCategory = (e) => {
    setInputData((prev) => ({ ...prev, category: e.target.value }));
  };

  const handleCuisines = (e) => {
    const { value, checked } = e.target;
    setInputData((prev) => {
      const updatedCuisines = checked
        ? [...prev.cuisines, value]
        : prev.cuisines.filter((cuisine) => cuisine !== value);
      return { ...prev, cuisines: updatedCuisines };
    });
  };

  const handleUpdate = async (e, close) => {
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

      inputData.cuisines.forEach((cuisine) => {
        formData.append("cuisines", cuisine);
      });

      if (inputData.restaurantImage instanceof File) {
        formData.append("restaurantImage", inputData.restaurantImage);
      }

      const response = await axios.put(
        `${API_URL}/api/update-restaurant/${restaurantId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      toast.success(`${response.data.message}!`);
      close();
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
            <Form onSubmit={(e) => handleUpdate(e, close)}>
              <h3>Update Restaurant</h3>

              <ImageCard>
                <ImagePreview
                  src={inputData.restaurantImage}
                  alt="Restaurant"
                />
                <HiddenFileInput
                  type="file"
                  id="fileUpload"
                  name="restaurantImage"
                  accept="image/*"
                  onChange={handleFileChange}
                />
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
                value={inputData.offer.toUpperCase()}
                onChange={handleInputChange}
              />
              <Input
                type="text"
                name="area"
                placeholder="Area"
                value={inputData.area}
                onChange={handleInputChange}
              />

              <Select
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
              </Select>

              <label>Cuisines:</label>
              <CheckboxContainer>
                {cuisinesEnum.map((cuisine) => (
                  <div key={cuisine}>
                    <input
                      id={cuisine}
                      type="checkbox"
                      value={cuisine}
                      checked={inputData.cuisines.includes(cuisine)}
                      onChange={handleCuisines}
                    />
                    <label htmlFor={cuisine}>{cuisine}</label>
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
