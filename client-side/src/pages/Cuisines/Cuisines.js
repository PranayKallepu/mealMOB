import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
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
    <>
      <Header />
      <MainContainer>
        <CuisineDetails>
          <h1> {menu.cuisine}</h1>
          <p>{menu.description || "Discover delicious food"}</p>
          <h3>{restaurantsByCuisine.length} Restaurants to explore</h3>
        </CuisineDetails>
        {renderRestaurantsByCuisine()}
      </MainContainer>
    </>
  );
};

export default Cuisines;
