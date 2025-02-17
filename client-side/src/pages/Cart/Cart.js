import React from "react";
import Header from "../../components/Header";
import CartListView from "../../components/CartListView";
import CartContext from "../../context/CartContext";
import EmptyCartView from "../../components/EmptyCartView";
import { useContext } from "react";
import {
  CartContainer,
  CartContentContainer,
  CartHeaderContainer,
  Heading,
} from "./styledComponent";

const Cart = () => {
  const { cartList, clearCart } = useContext(CartContext);
  const isEmptyCart = cartList.length === 0;

  const onClickClearItems = () => {
    clearCart();
  };

  return (
    <>
      <Header />
      <CartContainer>
        {isEmptyCart ? (
          <EmptyCartView />
        ) : (
          <CartContentContainer>
            <CartHeaderContainer>
              <Heading>My Cart</Heading>
              <button onClick={onClickClearItems} type="button">
                Remove all
              </button>
            </CartHeaderContainer>
            <CartListView />
          </CartContentContainer>
        )}
      </CartContainer>
    </>
  );
};
export default Cart;
