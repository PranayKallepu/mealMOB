import React, { useEffect, useState } from "react";
import VendorHeader from "../../components/VendorHeader";
import AddRestaurant from "../../components/AddRestaurant";
import UpdateRestaurant from "../../components/UpdateRestaurant";
import Cookies from "js-cookie";
import useFetchRestaurants from "../../hooks/useFetchRestaurants";
import axios from "axios";
import { API_URL } from "../../utils/data";
import {
  MainContainer,
  Heading,
  Image,
  Button,
  ButtonsCard,
} from "./styledComponent";

const VendorHome = () => {
  const vendorName = Cookies.get("vendorName");
  const vendorId = Cookies.get("vendorId");
  const [restaurantId, setRestaurantId] = useState(null);
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
    try {
      const response = await axios.delete(
        `${API_URL}/api/delete-restaurant/${restaurantId}`,
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );
      alert("ARE YOU SURE WANT TO DELETE!");
      alert(response.data.message);
      setRestaurantId(null);
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <>
      <VendorHeader />
      <MainContainer>
        <div>
          <Heading>
            Welcome <span>{vendorName}</span>
          </Heading>
          <Image
            src="https://img.freepik.com/premium-vector/smiling-chef-cartoon-character_8250-10.jpg?w=740"
            alt="vendor"
          />
          <br />
          {apiStatus === "IN_PROGRESS" ? (
            <p>Loading..</p>
          ) : !restaurantId ? (
            <AddRestaurant />
          ) : (
            <ButtonsCard>
              <UpdateRestaurant restaurantId={restaurantId} />
              <Button onClick={handleDeleteRestaurant}>
                Delete Restaurant
              </Button>
            </ButtonsCard>
          )}
        </div>
      </MainContainer>
    </>
  );
};

export default VendorHome;
