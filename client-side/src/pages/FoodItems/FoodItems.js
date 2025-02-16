import React from "react";
import Header from "../../components/Header/Header";
import useFetchFoodItems from "../../hooks/useFetchFoodItems";
import { useParams } from "react-router-dom";
import FoodItemDetails from "../../components/FoodItemDetails/FoodItemDetails";
import Cookies from 'js-cookie'
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
  FailureCard,
  FailureDescription,
  FailureHeading,
  FailureImage,
} from "./styledComponent";

const FoodItems = () => {
  const { restaurantId } = useParams();
  const authToken = Cookies.get('token')
  const { restaurant, foodItemsList, apiStatus } = useFetchFoodItems(restaurantId, authToken);
  const renderFoodItemsView = () => {
    return foodItemsList && foodItemsList.length > 0 ? (
      <FoodItemsContainer>
        <RestaurantContainer>
          <RestaurantDetails>
            <h2>{restaurant.restaurantName}</h2>
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

  const renderLoadingView = () => <div>Loading restaurants...</div>;

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
    <>
      <Header />
      <MainContainer>{renderAllFoodItems()}</MainContainer>;
    </>
  );
};

export default FoodItems;
