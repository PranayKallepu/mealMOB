import React from "react";
import DishCard from '../DishCard/index'
import {
    MainContainer,
    FoodList,
    NoRestaurantsContainer,
    FailureCard,
    FailureDescription,
    FailureHeading,
    FailureImage
  } from "./styledComponent";

const SearchDishes = (props) => {
  const { filterDishes, apiDishStatus, searchInput } = props;

  if(!searchInput){
    return null;
  }

  const renderRestaurantsListView = () => {
    return filterDishes && filterDishes.length > 0 ? (
      <div>
        <FoodList>
          {filterDishes.map((foodItem) => (
            <DishCard key={foodItem._id} foodItem={foodItem} />
          ))}
        </FoodList>
      </div>
    ) : (
      <NoRestaurantsContainer>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
          alt="no-restaurants"
        />
        <h1>No Dishes Found</h1>
        <p>Search another Dish.</p>
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
    switch (apiDishStatus) {
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

export default SearchDishes;
