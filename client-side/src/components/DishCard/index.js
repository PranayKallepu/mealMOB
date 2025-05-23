import { useState } from "react";
import { useCart } from "../../context/CartContext";
import useFetchRestaurants from "../../hooks/useFetchRestaurants";
import { useNavigate } from "react-router-dom";
import {
  DishCard,
  RestaurantDetails,
  FoodItem,
  FoodDetails,
  AddButtonCard,
  FoodImage,
  ReadMoreButton,
  RightArrow,
} from "./styledComponent";

const FoodItemDetails = ({ foodItem }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { foodName, foodImage, price, description, restaurant } = foodItem;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { restaurantsList = [] } = useFetchRestaurants();
  const [isHovered, setIsHovered] = useState(false);

  const restaurantDetails =
    restaurantsList?.length > 0
      ? restaurantsList.find((rest) => rest._id === restaurant)
      : null;

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const onClickAddToCart = () => {
    setIsAdded(true);
    addToCart({ ...foodItem, quantity }, restaurant);
  };

  return (
    <DishCard isHovered={isHovered}>
      <RestaurantDetails
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigate(`/restaurantItems/${restaurant}`)}
      >
        <div>
          <h3>{restaurantDetails?.restaurantName}</h3>
          <p>{restaurantDetails?.rating}</p>
        </div>
        <RightArrow />
      </RestaurantDetails>
      <hr />
      <FoodItem>
        <FoodDetails>
          <h3>{foodName}</h3>
          <h4>
            <span>₹</span>
            {price}
          </h4>
          <p>
            {isExpanded ? description : `${description.slice(0, 10)}... `}
            {description.length > 10 && (
              <ReadMoreButton onClick={toggleReadMore}>
                {isExpanded ? "Read Less" : "Read More"}
              </ReadMoreButton>
            )}
          </p>
        </FoodDetails>
        <FoodImage>
          <img src={foodImage} alt={foodName} /> <br />
          <AddButtonCard onClick={onClickAddToCart}>
            {!isAdded ? (
              "ADD"
            ) : (
              <>
                <button type="button" onClick={() => setQuantity(quantity - 1)}>
                  -
                </button>
                <p>{quantity}</p>
                <button type="button" onClick={() => setQuantity(quantity + 1)}>
                  +
                </button>
              </>
            )}
          </AddButtonCard>
        </FoodImage>
      </FoodItem>
    </DishCard>
  );
};

export default FoodItemDetails;
