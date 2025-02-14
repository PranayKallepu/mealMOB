// index.js
import React from "react";
import { BsPlusSquare, BsDashSquare } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { API_URL } from "../../utils/data";
import {
  CartItemContainer,
  ProductImage,
  CartItemDetailsContainer,
  ProductTitleBrandContainer,
  ProductTitle,
  ProductBrand,
  QuantityContainer,
  QuantityControllerButton,
  Quantity,
  TotalPriceDeleteContainer,
  TotalPrice,
  RemoveButton,
  DeleteButton,
} from "./styledComponent";

const CartItem = (props) => {
  const { cartItemDetails } = props;
  const { foodName, foodImage, category, price, quantity, id } = cartItemDetails;
  const { deleteCartItem, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const imageUrl = `${API_URL}/${foodImage.replace(/\\/g, "/")}`;

  const onClickDeleteButton = () => {
    deleteCartItem(id);
    console.log(`product Deleted ${id}`);
  };
  const onClickDecreaseQuantity =()=>{
    if(quantity > 1){
      decreaseQuantity(id)
    }
  }
  const onClickIncreaseQuantity =()=>{
    if(quantity < 10){
      increaseQuantity(id)
    }
  }

  return (
    <CartItemContainer>
      <ProductImage src={imageUrl} alt={foodImage} />
      <CartItemDetailsContainer>
        <ProductTitleBrandContainer>
          <ProductTitle>{foodName}</ProductTitle>
          <ProductBrand> {category}</ProductBrand>
        </ProductTitleBrandContainer>
        <QuantityContainer>
          <QuantityControllerButton type="button" onClick={onClickDecreaseQuantity}>
            <BsDashSquare color="#52606D" size={12} />
          </QuantityControllerButton>
          <Quantity>{quantity}</Quantity>
          <QuantityControllerButton type="button" onClick={onClickIncreaseQuantity}>
            <BsPlusSquare color="#52606D" size={12} />
          </QuantityControllerButton>
        </QuantityContainer>
        <TotalPriceDeleteContainer>
          <TotalPrice>Rs {price * quantity}/-</TotalPrice>
          <RemoveButton type="button" onClick={onClickDeleteButton}>
            Remove
          </RemoveButton>
        </TotalPriceDeleteContainer>
      </CartItemDetailsContainer>
      <DeleteButton type="button" onClick={onClickDeleteButton}>
        <AiFillCloseCircle color="#616E7C" size={20} />
      </DeleteButton>
    </CartItemContainer>
  );
};

export default CartItem;
