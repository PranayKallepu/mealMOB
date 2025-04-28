import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import RestaurantCard from "../../components/RestaurantCard";
import { menuList } from "../../utils/data";
import useFetchCuisines from "../../hooks/useFetchCuisines";
import {
  MainContainer,
  RestaurantList,
  NoRestaurantsContainer,
  FailureCard,
  FailureDescription,
  FailureHeading,
  FailureImage,
  LoadingContainer,
  LoadingImage,
  LoadingName,
} from "../../components/AllRestaurants/styledComponent";
import { CuisineDetails } from "./styledComponent";
import Header from "../../components/Header";

// Define animation variants (can be shared or customized per page)
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

// Define transition properties (can be shared or customized per page)
const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const length = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Cuisines = () => {
  const { activeCuisine } = useParams();

  const menu = menuList.find((each) => each.cuisine === activeCuisine) || {};

  //   Fetch restaurants by active cuisine
  const { restaurantsByCuisine = [], apiStatus } =
    useFetchCuisines(activeCuisine);

  const renderRestaurantsByCuisineView = () => {
    return restaurantsByCuisine && restaurantsByCuisine.length > 0 ? (
      <RestaurantList>
        {restaurantsByCuisine.map((restaurant) => (
          <RestaurantCard key={restaurant._id} restaurantData={restaurant} />
        ))}
      </RestaurantList>
    ) : (
      <NoRestaurantsContainer>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
          alt="no-restaurants"
        />
        <h1>No Restaurants Found</h1>
        <p>Try other filters.</p>
      </NoRestaurantsContainer>
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
    <LoadingContainer>
      {length.map((index) => (
        <div key={index}>
          <LoadingImage></LoadingImage>
          <LoadingName></LoadingName>
        </div>
      ))}
    </LoadingContainer>
  );

  const renderRestaurantsByCuisine = () => {
    switch (apiStatus) {
      case "SUCCESS":
        return renderRestaurantsByCuisineView();
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
      <MainContainer>
        <CuisineDetails>
          <h1> {menu.cuisine}</h1>
          <p>{menu.description || "Discover delicious food"}</p>
          <h3>{restaurantsByCuisine.length} Restaurants to explore</h3>
        </CuisineDetails>
        {renderRestaurantsByCuisine()}
      </MainContainer>
    </motion.div>
  );
};

export default Cuisines;
