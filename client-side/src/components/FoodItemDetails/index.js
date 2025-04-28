import { useState } from "react";
import { useCart } from "../../context/CartContext";
import {
  AddButtonCard,
  Button,
  FoodItem,
  FoodHeader,
  Category,
  FoodDetails,
  FoodImage,
  ReadMoreButton,
} from "./styledComponent";

const FoodItemDetails = ({ foodItem }) => {
  const { addToCart } = useCart();
  const { foodName, foodImage, category, price, description, restaurant } =
    foodItem;
  //states
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const onClickAddToCart = () => {
    setIsAdded(true);
    addToCart({ ...foodItem, quantity }, restaurant);
  };

  const handleLessQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const handleMoreQuantity = () => {
    if (quantity < 10) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  return (
    <FoodItem>
      <FoodImage>
        <img src={foodImage} alt={foodName} /> <br />
        <AddButtonCard onClick={onClickAddToCart}>
          {!isAdded ? (
            "ADD"
          ) : (
            <>
              <Button type="button" onClick={handleLessQuantity}>
                -
              </Button>
              <p>{quantity}</p>
              <Button type="button" onClick={handleMoreQuantity}>
                +
              </Button>
            </>
          )}
        </AddButtonCard>
      </FoodImage>
      <FoodDetails>
        <FoodHeader>
          <h3>{foodName}</h3>
          <Category isVeg={category === "Veg"}>{category}</Category>
        </FoodHeader>
        <h4>
          <span>₹</span>
          {price}
        </h4>
        <p>
          {isExpanded ? description : `${description.slice(0, 50)}... `}
          {description.length > 50 && (
            <ReadMoreButton onClick={toggleReadMore}>
              {isExpanded ? "Read Less" : "Read More"}
            </ReadMoreButton>
          )}
        </p>
      </FoodDetails>
    </FoodItem>
  );
};

export default FoodItemDetails;
