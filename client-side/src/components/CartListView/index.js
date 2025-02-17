import { useContext } from "react";
import CartItem from "../CartItem";
import CartSummary from "../../components/CartSummary";
import CartContext from "../../context/CartContext";

const CartListView = () => {
  const { cartList } = useContext(CartContext);

  return (
    <>
      <ul>
        {cartList.map((eachItem) => (
          <CartItem key={eachItem.id} cartItemDetails={eachItem} />
        ))}
      </ul>
      <CartSummary />
    </>
  );
};

export default CartListView;
