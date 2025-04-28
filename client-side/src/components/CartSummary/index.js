import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import CartContext from "../../context/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../../context/OrderContext";
// import AddressForm from "../AddressForm";
import {
  TotalAmountContainer,
  AmountSpan,
  PopupContainer,
  OrderButton,
  DisplayContainer,
} from "./styledComponent";

const CartSummary = () => {
  const { cartList, clearCart } = useContext(CartContext);
  const { createOrder } = useOrder();
  const navigate = useNavigate();

  const totalAmount = cartList.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleOrderSubmit = (address) => {
    const order = createOrder({
      items: cartList,
      address,
      totalAmount,
    });
    clearCart();
    navigate(`/order-tracking/${order.id}`);
  };

  return (
    <TotalAmountContainer>
      <h4>
        Order Total: <AmountSpan> Rs {totalAmount}/-</AmountSpan>
      </h4>
      <p>
        <AmountSpan>{cartList.length}</AmountSpan> Items in Cart
      </p>

      {/* Order Popup Section */}
      <PopupContainer>
        <Popup
          modal
          closeOnDocumentClick={false}
          overlayStyle={{ background: "rgba(0, 0, 0, 0.5)" }}
          contentStyle={{
            width: "400px",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "white",
            textAlign: "center",
            position: "relative",
          }}
          trigger={<OrderButton type="button">Order Now</OrderButton>}
        >
          {(close) => (
            <DisplayContainer>
              {/* <AddressForm onClose={close} onSubmit={handleOrderSubmit} /> */}
            </DisplayContainer>
          )}
        </Popup>
      </PopupContainer>
    </TotalAmountContainer>
  );
};

export default CartSummary;
