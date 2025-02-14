import React, { useState } from "react";
import VendorHeader from "../../components/VendorHeader/VendorHeader";
import AddRestaurant from "../../components/AddRestaurant/AddRestaurant";
import UpdateRestaurant from "../../components/UpdateRestaurant/UpdateRestaurant";
import Cookies from 'js-cookie'
import {VendorContainer} from './styledComponent'

const Vendor=()=> {
  const restaurantId= Cookies.get("restaurantId")
  const vendorName = Cookies.get('vendorName')
  const [isClick, setIsClick] = useState(false);
  const handleDeleteRestaurant = async () => {
    
  }
  return (
    <>
      <VendorHeader />
      <VendorContainer>
        {isClick ? (
          <AddRestaurant  setIsClick={setIsClick}/>
        ) : (
          <div>
            <h2>Welcome {vendorName}</h2>
            <img
              src="https://img.freepik.com/premium-vector/smiling-chef-cartoon-character_8250-10.jpg?w=740"
              alt="vendor"
            />
            <br/>
            {!restaurantId ? <button onClick={() => setIsClick(true)}>Add Restaurant</button> :
            (<div>
              <UpdateRestaurant restaurantId={restaurantId}/>
              <button onClick={handleDeleteRestaurant}>Delete Restaurant</button>
              <p>Add Food Items</p>
            </div>) }
          </div>
        )}
      </VendorContainer>
    </>
  );
}

export default Vendor;
