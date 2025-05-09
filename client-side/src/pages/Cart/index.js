import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import Header from "../../components/Header";
import axios from "axios";
import { API_URL } from "../../utils/data";
import Cookies from "js-cookie";
import AddressPopup from "../../components/AddressPopup";
import useFetchRestaurants from "../../hooks/useFetchRestaurants";
import {
  CartContainer,
  CartSection,
  AddressBox,
  RestaurantInfo,
  RestaurantImage,
  CartContent,
  CartItems,
  CartItem,
  QuantityControl,
  BillDetails,
  BillItem,
  TotalItem,
  SaveItem,
  ProceedButton,
  EmptyCartWrapper,
  EmptyCartImage,
} from "./styledComponents";
import toast from "react-hot-toast";

const Cart = () => {
  const authToken = Cookies.get("token");
  const navigate = useNavigate();
  const { cart, updateQuantity, calculateTotal, clearCart, restaurantId } =
    useCart();
  console.log("cart", restaurantId);

  const { restaurantsList } = useFetchRestaurants("", "", null, authToken);
  const [currentRestaurant, setCurrentRestaurant] = useState(null);
  const { subtotal, deliveryFee, discount, tax, total } = calculateTotal();
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState(
    JSON.parse(localStorage.getItem("deliveryAddress"))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = localStorage.getItem("deliveryAddress");
      if (updated) {
        setDeliveryAddress(JSON.parse(updated));
      }
    }, 500); // poll every 500ms

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (restaurantsList && restaurantId) {
      const restaurant = restaurantsList.find((r) => r._id === restaurantId);
      setCurrentRestaurant(restaurant);
    }
  }, [restaurantsList, restaurantId]);

  const handlePlaceOrder = async () => {
    if (!deliveryAddress) {
      toast.error("Please add delivery address first");
      return;
    }
    setIsPlacingOrder(true);
    try {
      const orderData = {
        items: cart,
        address: {
          receiverName: deliveryAddress.receiverName,
          mobile: deliveryAddress.mobile,
          houseNumber: deliveryAddress.houseNumber,
          street: deliveryAddress.street,
          city: deliveryAddress.city,
          state: deliveryAddress.state,
          pincode: deliveryAddress.pincode,
        },
        total: total,
        restaurantId: cart[0]?.restaurantId,
      };

      await axios.post(`${API_URL}/api/orders`, orderData, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      toast.success("Order placed successfully");
      clearCart();
      navigate("/my-orders");
    } catch (error) {
      toast.error("Failed to place order. Please try again.");
    } finally {
      setIsPlacingOrder(false);
    }
  };

  if (cart.length === 0) {
    return (
      <>
        <Header />
        <EmptyCartWrapper>
          <EmptyCartImage
            src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png"
            alt="cart empty"
          />
          <h2>Your cart is empty</h2>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
        </EmptyCartWrapper>
      </>
    );
  }

  return (
    <>
      <Header />
      <CartContainer>
        <CartContent>
          {deliveryAddress ? (
            <AddressBox>
              <p>
                Deliver to:{" "}
                <span>
                  {deliveryAddress.city}-{deliveryAddress.pincode}
                </span>
              </p>
              <AddressPopup
                onAddressChange={(newAddress) => setDeliveryAddress(newAddress)}
              />
            </AddressBox>
          ) : (
            <AddressBox>
              <p>No delivery address found. Please add one first.</p>
              <AddressPopup />
            </AddressBox>
          )}

          {currentRestaurant && (
            <CartSection>
              <RestaurantInfo>
                <RestaurantImage
                  src={currentRestaurant.restaurantImage}
                  alt={currentRestaurant.restaurantName}
                />
                <div>
                  <h3>{currentRestaurant.restaurantName}</h3>
                  <p>{currentRestaurant.area}</p>
                </div>
              </RestaurantInfo>
              <CartItems>
                {cart.map((item, index) => (
                  <CartItem key={item._id}>
                    <h5>
                      {index + 1}. {item.foodName}
                    </h5>
                    <QuantityControl>
                      <button
                        onClick={() =>
                          updateQuantity(item._id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item._id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </QuantityControl>
                    <p>₹{item.price}.00</p>
                  </CartItem>
                ))}
              </CartItems>
            </CartSection>
          )}
        </CartContent>
        <BillDetails>
          <h2>Bill Details</h2>
          <BillItem>
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </BillItem>
          <BillItem>
            <span>Delivery Fee</span>
            <span>₹{deliveryFee.toFixed(2)}</span>
          </BillItem>
          <BillItem>
            <span>Discount</span>
            <span>-₹{discount.toFixed(2)}</span>
          </BillItem>
          <BillItem>
            <span>Tax & Other Charges (18%)</span>
            <span>₹{tax.toFixed(2)}</span>
          </BillItem>
          <TotalItem>
            <span>Total Amount</span>
            <span>₹{total.toFixed(2)}</span>
          </TotalItem>
          <SaveItem>
            <span>You will save ₹{discount.toFixed(2)} on this order</span>
          </SaveItem>
          <ProceedButton onClick={handlePlaceOrder} disabled={isPlacingOrder}>
            {isPlacingOrder ? "Placing Order..." : "Place Order"}
          </ProceedButton>
        </BillDetails>
      </CartContainer>
    </>
  );
};

export default Cart;
