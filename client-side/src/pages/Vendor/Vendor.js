import React, { useEffect, useState } from "react";
import VendorHeader from "../../components/VendorHeader/VendorHeader";
import AddRestaurant from "../../components/AddRestaurant/AddRestaurant";
import UpdateRestaurant from "../../components/UpdateRestaurant/UpdateRestaurant";
import Cookies from "js-cookie";
import useFetchRestaurants from "../../hooks/useFetchRestaurants";
import axios from "axios";
import { API_URL } from "../../utils/data";
import {MainContainer,Heading, Image, Button, ButtonsCard} from "./styledComponent";

const Vendor = () => {
  const vendorName = Cookies.get("vendorName");
  const vendorId = Cookies.get("vendorId");
  const [isClick, setIsClick] = useState(false);
  const [restaurantId, setRestaurantId] = useState(null);

  const authToken = Cookies.get("vendorToken");

  // Fetch restaurants
  const { restaurantsList } = useFetchRestaurants(null, null, null, authToken);

  // Find the vendor's restaurant and update state
  useEffect(() => {
    if (restaurantsList) {
      const vendorRestaurant = restaurantsList.find(
        (each) => each.vendor === vendorId
      );
      if (vendorRestaurant) {
        setRestaurantId(vendorRestaurant._id);
      } else {
        setRestaurantId(null);
      }
    }
  }, [restaurantsList, vendorId]);

  const handleDeleteRestaurant = async () => {
    // Handle delete logic here
    try {
      const response = await axios.delete(`${API_URL}/api/delete-restaurant/${restaurantId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      alert("ARE YOU SURE WANT TO DELETE!");
      alert(response.data.message)
      setRestaurantId(null)
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <>
      <VendorHeader />
      <MainContainer>
          <div>
            <Heading>Welcome <span>{vendorName}</span></Heading>
            <Image
              src="https://img.freepik.com/premium-vector/smiling-chef-cartoon-character_8250-10.jpg?w=740"
              alt="vendor"
            />
            <br />
            {!restaurantId ? (
                <AddRestaurant setIsClick={setIsClick}/>
            ) : (
              <ButtonsCard>
                <UpdateRestaurant restaurantId={restaurantId} />
                <Button isActive={!isClick} onClick={handleDeleteRestaurant}>
                  Delete Restaurant
                </Button>
              </ButtonsCard>
            )}
          </div>
      </MainContainer>
    </>
  );
};

export default Vendor;
