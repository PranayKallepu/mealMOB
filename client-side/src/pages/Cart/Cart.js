import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import CartListView from "../../components/CartListView";
import CartContext from "../../context/CartContext";
import EmptyCartView from "../../components/EmptyCartView";
import { useNavigate } from "react-router-dom";
import {
  CartContainer,
  CartContentContainer,
  CartHeaderContainer,
  Heading,
  BillDetails,
  TotalPrice,
  ProceedButton,
} from "./styledComponent";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const Cart = () => {
  const { cartList, clearCart } = useContext(CartContext);
  const [deliveryFee] = useState(50);
  const [discountPer100] = useState(10);
  const [taxRate] = useState(0.18);
  const navigate = useNavigate();

  const isEmptyCart = cartList.length === 0;

  // Calculate the totals
  const itemsTotal = cartList.reduce((sum, item) => sum + item.price, 0);
  const discount = Math.floor(itemsTotal / 100) * discountPer100;
  const tax = itemsTotal * taxRate;
  const totalPrice = itemsTotal + deliveryFee - discount + tax;

  const onClickClearItems = () => {
    clearCart();
  };

  const onProceedToAddress = () => {
    navigate("/cart/add-address");
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ position: "absolute", width: "100%" }}
    >
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

            <BillDetails>
              <p>Items Total: ₹{itemsTotal}</p>
              <p>Delivery Fee: ₹{deliveryFee}</p>
              <p>Discount: -₹{discount}</p>
              <p>Tax & Other Charges: ₹{tax}</p>
              <TotalPrice>Total Price: ₹{totalPrice}</TotalPrice>
            </BillDetails>

            <ProceedButton onClick={onProceedToAddress}>
              Add Address to Proceed
            </ProceedButton>
          </CartContentContainer>
        )}
      </CartContainer>
    </motion.div>
  );
};

export default Cart;
