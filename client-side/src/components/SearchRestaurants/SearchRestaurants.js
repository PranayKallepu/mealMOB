import React from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import RestaurantHeader from "../RestaurantHeader/RestaurantHeader";
import {
    MainContainer,
    RestaurantList,
    NoRestaurantsContainer,
    FailureCard,
    FailureDescription,
    FailureHeading,
    FailureImage
  } from "../AllRestaurants/styledComponent";

const SearchRestaurants = (props) => {
  const { restaurantsList, apiStatus, searchInput } = props;

  if(!searchInput){
    return null;
  }

  const renderRestaurantsListView = () => {
    return restaurantsList && restaurantsList.length > 0 ? (
      <div>
        <RestaurantHeader />
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
        <p>Search another restaurants.</p>
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

  const renderLoadingView = () => <div>Loading restaurants...</div>;

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
      {renderAllRestaurants()}
    </MainContainer>
  );
}

export default SearchRestaurants;
