import { useEffect, useState } from "react";
import { fetchRestaurants } from "../services/api";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

const useFetchRestaurants = (category, rating, searchInput) => {
  const [data, setData] = useState({
    restaurantsList: [],
    apiStatus: apiStatusConstants.initial,
  });

  useEffect(() => {
    const getRestaurants = async () => {
      setData({ apiStatus: apiStatusConstants.inProgress });

      try {
        const restaurants = await fetchRestaurants(category, rating, searchInput);
        setData({ restaurantsList: restaurants, apiStatus: apiStatusConstants.success });
      } catch (error) {
        console.error("Error fetching restaurants:", error);
        setData({ apiStatus: apiStatusConstants.failure });
      }
    };

    getRestaurants();
  }, [category, rating, searchInput]); 

  return data;
};

export default useFetchRestaurants;
