import React, { useState } from "react";
import useFetchRestaurants from "../../hooks/useFetchRestaurants";
import FilterPopup from "../FilterPopup/FilterPopup";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { PiBowlFoodFill } from "react-icons/pi";
import { MdOutlineStarRate } from "react-icons/md";
import { VscClearAll } from "react-icons/vsc";
import Cookies from 'js-cookie'
import {
  MainContainer,
  RestaurantHeader,
  FilterCard,
  RestaurantList,
  NoRestaurantsContainer,
  FailureCard,
  FailureDescription,
  FailureHeading,
  FailureImage,
  LoadingContainer, 
  LoadingImage,
  LoadingName
} from "./styledComponent";

const length = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const AllRestaurants = () => {
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");

  const authToken = Cookies.get('token')
  // Fetch data based on filters
  const { restaurantsList, apiStatus } = useFetchRestaurants(category, rating, null, authToken);

  const handleFilterChange = (newCategory, newRating) => {
    setCategory(newCategory);
    setRating(newRating);
  };

  const renderRestaurantsListView = () => {
    return restaurantsList && restaurantsList.length > 0 ? (
      <div>
        <RestaurantList>
          {restaurantsList.map((restaurant) => (
            <RestaurantCard key={restaurant._id} restaurantData={restaurant} />
          ))}
        </RestaurantList>
      </div>
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

  const renderAllRestaurants = () => {
    switch (apiStatus) {
      case "SUCCESS":
        return renderRestaurantsListView();
      case "FAILURE":
        return renderFailureView();
      case "IN_PROGRESS":
        return renderLoadingView();
      default:
        return null;
    }
  };

  return (
    <MainContainer>
      <RestaurantHeader>
        <h2>Restaurants in Warangal</h2>
        <FilterCard>
          <FilterPopup onFilterChange={handleFilterChange} />
          <div>
            <p>
              <PiBowlFoodFill />
              {category || "Veg & Non-Veg"}{" "}
            </p>
          </div>
          <div>
            <p>
              <MdOutlineStarRate />
              Ratings {rating || "2.0"}+
            </p>
          </div>
          <button onClick={() => handleFilterChange("", "")}>Clear Filters <VscClearAll /></button>
        </FilterCard>
      </RestaurantHeader>
      {renderAllRestaurants()}
    </MainContainer>
  );
};

export default AllRestaurants;
