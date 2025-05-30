import React from "react";
import { motion } from "framer-motion";
import useFetchFoodItems from "../../hooks/useFetchFoodItems";
import { useParams } from "react-router-dom";
import FoodItemDetails from "../../components/FoodItemDetails";
import Cookies from "js-cookie";
import { BeatLoader } from "react-spinners";
import {
  MainContainer,
  FoodItemsContainer,
  RestaurantContainer,
  RestaurantDetails,
  CuisinesCard,
  RatingCard,
  Star,
  FoodList,
  NoFoodItemsContainer,
  LoaderCard,
  FailureCard,
  FailureDescription,
  FailureHeading,
  FailureImage,
} from "./styledComponent";
import Header from "../../components/Header";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const FoodItems = () => {
  const { restaurantId } = useParams();
  const authToken = Cookies.get("token");
  const { restaurant, foodItemsList, apiStatus } = useFetchFoodItems(
    restaurantId,
    authToken
  );
  const renderFoodItemsView = () => {
    return foodItemsList && foodItemsList.length > 0 ? (
      <FoodItemsContainer>
        <RestaurantContainer>
          <RestaurantDetails>
            <h2>{restaurant.restaurantName}</h2>
            <p>{restaurant.category}</p>
            <CuisinesCard>
              {restaurant.cuisines.map((cuisine, index) => {
                const lastCuisine = index === restaurant.cuisines.length - 1;
                return (
                  <p key={cuisine}>
                    {cuisine}
                    {lastCuisine ? "" : ", "}
                  </p>
                );
              })}
            </CuisinesCard>
            <p>{restaurant.area}</p>
          </RestaurantDetails>
          <RatingCard>
            <p>
              {restaurant.rating} <Star />
            </p>
            <span>Ratings</span>
          </RatingCard>
        </RestaurantContainer>
        <h4>{`Food Items (${foodItemsList.length})`}</h4>
        <FoodList>
          {foodItemsList.map((foodItem) => (
            <FoodItemDetails key={foodItem._id} foodItem={foodItem} />
          ))}
        </FoodList>
      </FoodItemsContainer>
    ) : (
      <NoFoodItemsContainer>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
          alt="no-restaurants"
        />
        <h1>No Food Items Found</h1>
        <p>Try other filters.</p>
      </NoFoodItemsContainer>
    );
  };

  const renderFailureView = () => (
    <FailureCard>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        alt="all-products-error"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescription>
        We are having some trouble processing your request. Please try again
        later.
      </FailureDescription>
    </FailureCard>
  );

  const renderLoadingView = () => (
    <LoaderCard>
      <BeatLoader color="#F7931E" />
    </LoaderCard>
  );

  const renderAllFoodItems = () => {
    switch (apiStatus) {
      case "SUCCESS":
        return renderFoodItemsView();
      case "FAILURE":
        return renderFailureView();
      case "IN_PROGRESS":
        return renderLoadingView();
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ position: "absolute", width: "100%" }}
    >
      <Header />
      <MainContainer>{renderAllFoodItems()}</MainContainer>
    </motion.div>
  );
};

export default FoodItems;
