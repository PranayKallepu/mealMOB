import { useEffect, useState } from "react";
import { fetchFoodItems } from "../services/api";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

const useFetchFoodItems = (restaurantId, authToken) => {
  const [data, setData] = useState({
    foodItemsList: [],
    apiStatus: apiStatusConstants.initial,
  });

  useEffect(() => {
    const getRestaurantItems = async () => {
      setData({ apiStatus: apiStatusConstants.inProgress });

      try {
        const data = await fetchFoodItems(restaurantId, authToken);
        const { restaurant, foodItems } = data;
        setData({
          restaurant,
          foodItemsList: foodItems,
          apiStatus: apiStatusConstants.success,
        });
      } catch (error) {
        console.error("Error fetching restaurantItems:", error);
        setData({ apiStatus: apiStatusConstants.failure });
      }
    };

    getRestaurantItems();
  }, [restaurantId, authToken]);

  return data;
};

export default useFetchFoodItems;
