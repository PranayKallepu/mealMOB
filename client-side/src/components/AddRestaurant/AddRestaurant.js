import { categoryEnum, cuisinesEnum } from "../../utils/enums";
import axios from "axios";
import { API_URL } from "../../utils/data";
import { useState } from "react";
import { FormContainer, Form } from "./styledComponent";

const AddRestaurant = (props) => {
  const { setIsClick } = props;
  const vendorId = localStorage.getItem("vendorId");
  const [inputData, setInputData] = useState({
    restaurantName: "",
    restaurantImage: null,
    rating: "",
    offer: "",
    area: "",
    category: "",
    cuisines: [],
    vendorId: vendorId,
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
  
    const vendorToken = localStorage.getItem("vendorToken");
  
    if (!vendorToken) {
      setError("Unauthorized: Please log in again.");
      setLoading(false);
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append("restaurantName", inputData.restaurantName);
      formData.append("restaurantImage", inputData.restaurantImage); // ✅ Correctly added file
      formData.append("rating", inputData.rating);
      formData.append("offer", inputData.offer);
      formData.append("area", inputData.area);
      formData.append("category", inputData.category);
      inputData.cuisines.forEach((cuisine) => formData.append("cuisines", cuisine));
      formData.append("vendorId", inputData.vendorId);
  
      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]); // ✅ Log FormData to check if image is included
      }
  
      const response = await axios.post(`${API_URL}/api/add-restaurant`, formData, {
        headers: {
          Authorization: `Bearer ${vendorToken}`, // ✅ Correct Authorization Header
        },
      });
  
      if (response.data.success) {
        alert("Restaurant Added Successfully!");
        const restaurantId= localStorage.getItem("restaurantId");
        if(!restaurantId){
          localStorage.setItem("restaurantId", response.data.restaurantId);
        }
        setIsClick(false);
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
        <label>Restaurant Name *:</label>
        <input
          type="text"
          name="restaurantName"
          placeholder="RESTAURANT NAME"
          onChange={handleInput}
          required
        />

        <label>Restaurant Image *:</label>
        <input type="file" onChange={handleUploadImage} required />

        <label>Rating *:</label>
        <input
          type="number"
          name="rating"
          value={inputData.rating}
          placeholder="Ex. 4.5"
          onChange={handleInput}
          required
        />

        <label>Offer *:</label>
        <input
          type="text"
          name="offer"
          value={inputData.offer}
          placeholder="Ex. 10% off on above 200/-"
          onChange={handleInput}
          required
        />

        <label>Area *:</label>
        <input
          type="text"
          name="area"
          value={inputData.area}
          placeholder="Ex. Chowrastha"
          onChange={handleInput}
          required
        />

        <select name="category" value={inputData.category} onChange={handleCategory}>
          <option value="" disabled>
            Select Category
          </option>
          {categoryEnum.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

        <label>Cuisines *:</label>
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

        <button type="submit" disabled={isLoading}>
        {isLoading ? "Submitting..." : "Submit"}
        </button>
      </Form>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </FormContainer>
  );
};

export default AddRestaurant;
