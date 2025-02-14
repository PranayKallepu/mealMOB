import { useContext, useState } from "react";
import { API_URL } from "../../utils/data";
import CartContext from "../../context/CartContext";
import { v4 as uuidv4 } from "uuid";
import {
  AddButtonCard,
  FoodItem,
  FoodDetails,
  FoodImage,
  ReadMoreButton,
} from "./styledComponent";

const FoodItemDetails = ({ foodItem }) => {
  const { foodName, foodImage, price, description } = foodItem;
  const imageUrl = `${API_URL}/${foodImage.replace(/\\/g, "/")}`;
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

  return (
    <FoodItem>
      <FoodImage>
        <img src={imageUrl} alt={foodName} /> <br />
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
      <FoodDetails>
        <h3>{foodName}</h3>
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
