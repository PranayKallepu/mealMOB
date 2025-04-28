import React, { useEffect, useState } from "react";
import VendorHeader from "../../components/VendorHeader";
import AddRestaurant from "../../components/AddRestaurant";
import UpdateRestaurant from "../../components/UpdateRestaurant";
import OrderManagement from "../VendorDashboard/OrderManagement";
import Cookies from "js-cookie";
import useFetchRestaurants from "../../hooks/useFetchRestaurants";
import axios from "axios";
import { API_URL } from "../../utils/data";
import chefImage from "../../assets/smiling-chef.png";
import {
  MainContainer,
  Heading,
  Image,
  Button,
  ButtonsCard,
  TabContainer,
  TabButton,
} from "./styledComponent";

const VendorHome = () => {
  const vendorName = Cookies.get("vendorName");
  const vendorId = Cookies.get("vendorId");
  const [restaurantId, setRestaurantId] = useState(null);
  const [activeTab, setActiveTab] = useState("restaurant");
  const authToken = Cookies.get("vendorToken");

  // Fetch restaurants
  const { restaurantsList, apiStatus } = useFetchRestaurants(
    null,
    null,
    null,
    authToken
  );

  // Find the vendor's restaurant and update state
  useEffect(() => {
    if (restaurantsList) {
      const vendorRestaurant = restaurantsList.find(
        (each) => each.vendor === vendorId
      );
      setRestaurantId(vendorRestaurant ? vendorRestaurant._id : null);
    }
  }, [restaurantsList, vendorId]);

  const handleDeleteRestaurant = async () => {
    if (window.confirm("ARE YOU SURE WANT TO DELETE!")) {
      try {
        const response = await axios.delete(
          `${API_URL}/api/delete-restaurant/${restaurantId}`,
          {
            headers: { Authorization: `Bearer ${authToken}` },
          }
        );
        alert(response.data.message);
        setRestaurantId(null);
      } catch (error) {
        alert(error.response?.data?.message);
      }
    }
  };

  const renderContent = () => {
    if (activeTab === "orders") {
      return <OrderManagement restaurantId={restaurantId} />;
    }

    if (apiStatus === "IN_PROGRESS") {
      return <p>Loading..</p>;
    }

    if (!restaurantId) {
      return <AddRestaurant />;
    }

    return (
      <ButtonsCard>
        <UpdateRestaurant restaurantId={restaurantId} />
        <Button onClick={handleDeleteRestaurant}>Delete Restaurant</Button>
      </ButtonsCard>
    );
  };

  return (
    <>
      <VendorHeader />
      <MainContainer>
        <div>
          <Heading>
            Welcome <span>{vendorName}</span>
          </Heading>
          <Image src={chefImage} alt="chef" />
          <TabContainer>
            <TabButton
              active={activeTab === "restaurant"}
              onClick={() => setActiveTab("restaurant")}
            >
              Manage Restaurant
            </TabButton>
            <TabButton
              active={activeTab === "orders"}
              onClick={() => setActiveTab("orders")}
            >
              Manage Orders
            </TabButton>
          </TabContainer>
          {renderContent()}
        </div>
      </MainContainer>
    </>
  );
};

export default VendorHome;
