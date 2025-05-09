import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [restaurantId, setRestaurantId] = useState(null);

  const addToCart = (item, restaurantId) => {
    console.log(restaurantId);
    if (restaurantId !== cart[0]?.restaurantId && cart.length > 0) {
      alert("You can only order from one restaurant at a time");
      return;
    }

    setRestaurantId(restaurantId);
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem._id === item._id
      );
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prevCart, { ...item, restaurantId: restaurantId }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity < 1) {
      removeFromCart(itemId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setRestaurantId(null);
  };

  const calculateTotal = () => {
    const subtotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const deliveryFee = 50;
    const discount = Math.floor(subtotal / 100) * 10;
    const tax = (subtotal - discount) * 0.18;
    const total = subtotal + deliveryFee - discount + tax;

    return {
      subtotal,
      deliveryFee,
      discount,
      tax,
      total,
    };
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        restaurantId,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
