import { createContext, useState, useContext } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [userAddress, setUserAddress] = useState(null);
  const [orders, setOrders] = useState([]);

  const saveAddress = (address) => {
    setUserAddress(address);
    localStorage.setItem("userAddress", JSON.stringify(address));
  };

  const createOrder = (orderDetails) => {
    const newOrder = {
      id: Date.now(),
      ...orderDetails,
      status: "pending",
      createdAt: new Date().toISOString(),
    };
    setOrders((prevOrders) => [...prevOrders, newOrder]);
    return newOrder;
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <OrderContext.Provider
      value={{
        userAddress,
        saveAddress,
        orders,
        createOrder,
        updateOrderStatus,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
