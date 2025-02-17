import { useEffect, useState } from "react";
import { fetchDishes } from "../services/api";

const apiDishStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

const useFetchDishes = (category, searchInput) => {
  const [data, setData] = useState({
    filterDishes: [],
    apiDishStatus: apiDishStatusConstants.initial,
  });

  useEffect(() => {
    const getDishes = async () => {
      setData({ apiDishStatus: apiDishStatusConstants.inProgress });

      try {
        const dishes = await fetchDishes(category, searchInput);
        setData({
          filterDishes: dishes,
          apiDishStatus: apiDishStatusConstants.success,
        });
      } catch (error) {
        console.error("Error fetching dishes:", error);
        setData({ apiDishStatus: apiDishStatusConstants.failure });
      }
    };

    getDishes();
  }, [category, searchInput]);

  return data;
};

export default useFetchDishes;
