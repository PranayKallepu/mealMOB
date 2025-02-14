import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import CartContext from "../../context/CartContext";
import { useContext } from "react";
import {
  TotalAmountContainer,
  AmountSpan,
  PopupContainer,
  OrderButton,
  CloseButton,
  DisplayContainer,
} from "./styledComponent";

const CartSummary = () => {
  const { cartList, clearCart } = useContext(CartContext);

  const totalAmount = cartList.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

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
              <div>
                <h3>🎉 Order Placed Successfully!</h3>
                <p>Thank you for your order.</p>
              </div>
              <CloseButton
                type="button"
                className="trigger-button"
                onClick={() => {
                  clearCart();
                  close();
                }}
              >
                {" "}
                Close
              </CloseButton>
            </DisplayContainer>
          )}
        </Popup>
      </PopupContainer>
    </TotalAmountContainer>
  );
};

export default CartSummary;
