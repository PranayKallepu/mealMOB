import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home/Home";
import VendorDashboard from "./pages/VendorDashboard/VendorDashboard";
import VendorHome from "./pages/VendorHome/VendorHome";
import VendorMenu from "./pages/VendorMenu/VendorMenu";
import Search from "./pages/Search/Search";
import FoodItems from "./pages/FoodItems/FoodItems";
import Cuisines from "./pages/Cuisines/Cuisines";
import Cart from "./pages/Cart";
import MyOrders from "./pages/MyOrders";
import { OrderProvider } from "./context/OrderContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { CartProvider } from "./context/CartContext";
import OrderDetails from "./pages/OrderDetails";
import { Toaster } from "react-hot-toast";

const App = () => {
  const location = useLocation();

  return (
    <CartProvider>
      <OrderProvider>
        <AnimatePresence mode="wait">
          <Toaster position="top-right" reverseOrder={false} />
          <Routes location={location} key={location.pathname}>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route
              exact
              path="/vendor-dashboard"
              element={<VendorDashboard />}
            />
            <Route path="/" element={<ProtectedRoute route={<Home />} />} />
            <Route
              path="/search"
              element={<ProtectedRoute route={<Search />} />}
            />
            <Route
              path="/restaurantItems/:restaurantId"
              element={<ProtectedRoute route={<FoodItems />} />}
            />
            <Route
              path="/cuisines/:activeCuisine"
              element={<ProtectedRoute route={<Cuisines />} />}
            />
            <Route path="/cart" element={<ProtectedRoute route={<Cart />} />} />
            <Route
              path="/my-orders"
              element={<ProtectedRoute route={<MyOrders />} />}
            />
            <Route path="/my-orders/:orderId" element={<OrderDetails />} />
            <Route
              path="/vendor"
              element={<ProtectedRoute vendorRoute={<VendorHome />} />}
            />
            <Route
              path="/vendor/food-menu"
              element={<ProtectedRoute vendorRoute={<VendorMenu />} />}
            />
          </Routes>
        </AnimatePresence>
      </OrderProvider>
    </CartProvider>
  );
};

export default App;
