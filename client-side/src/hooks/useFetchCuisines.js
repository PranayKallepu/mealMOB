import { useEffect, useState } from "react";
import { fetchRestaurantsByCuisine } from "../services/api";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

const useFetchCuisines = (activeCuisine) => {
  const [data, setData] = useState({
    restaurantsByCuisine: [],
    apiStatus: apiStatusConstants.initial,
  });

  useEffect(() => {
    if (!activeCuisine) return;

    const getRestaurantsByCuisine = async () => {
      setData({
        restaurantsByCuisine: [],
        apiStatus: apiStatusConstants.inProgress,
      });
      try {
        const restaurantsByCuisine = await fetchRestaurantsByCuisine(
          activeCuisine
        );

        setData({
          restaurantsByCuisine,
          apiStatus: apiStatusConstants.success,
        });
      } catch (error) {
        console.error("Error fetching restaurantItems:", error);
        setData({ apiStatus: apiStatusConstants.failure });
      }
    };
    getRestaurantsByCuisine();
  }, [activeCuisine]);
  return data;
};
export default useFetchCuisines;
