import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { v4 as uuidv4 } from "uuid";
import {
  AddButtonCard,
  FoodItem,
  FoodHeader,
  Category,
  FoodDetails,
  FoodImage,
  ReadMoreButton,
} from "./styledComponent";

const FoodItemDetails = ({ foodItem }) => {
  const { foodName, foodImage, category, price, description } = foodItem;
  //states
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addCartItem } = useContext(CartContext);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const onClickAddToCart = () => {
    setIsAdded(true);
    const id = uuidv4();
    addCartItem({ ...foodItem, quantity, id });
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
              <button type="button" onClick={handleLessQuantity}>
                -
              </button>
              <p>{quantity}</p>
              <button type="button" onClick={handleMoreQuantity}>
                +
              </button>
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
