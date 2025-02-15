import axios from "axios";
import Cookies from 'js-cookie'
import {API_URL} from '../utils/data'

// Fetch restaurants based on category and rating
export const fetchRestaurants = async (category, rating, searchInput) => {
  
  try {
    const response = await axios.get(`${API_URL}/api/restaurants`, {
      params: {
        sort_by: category || "",  
        search: searchInput || "",  
        rating: rating || "",
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      withCredentials: true 
    });
    console.log('API Response:', response.data.filteredRestaurants);
    return response.data.filteredRestaurants; 
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error;
  }
};

//Fetch restaurant Items
export const fetchFoodItems = async(restaurantId)=>{
  try {
    const response = await axios.get(`${API_URL}/api/restaurantItems/${restaurantId}`,{
      headers: {
         "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      withCredentials: true 
    })
    console.log('API Response:', response.data);
    return response.data
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error;
  }
}

//Fetch restaurants by Cuisine

export const fetchRestaurantsByCuisine = async(activeCuisine)=>{
  try {
    const response = await axios.get(`${API_URL}/api/collections`, {
      params: {cuisine: activeCuisine || ""},
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      withCredentials: true 
    })
    console.log('API Response:', response.data.restaurantsByCuisine);
    return response.data.restaurantsByCuisine
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error;
  }
}

// Fetch Dishes
export const fetchDishes = async (category, searchInput) => {
  try {
    const response = await axios.get(`${API_URL}/api/dishes`, {
      params: {
        sort_by: category || "",  
        search: searchInput || "",
      },
      headers: {
         "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}` || "",
      },
      withCredentials: true 
    });

    console.log("API Response for Dishes:", response.data.filterDishes);

    return response.data.filterDishes; 
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error;
  }
};

