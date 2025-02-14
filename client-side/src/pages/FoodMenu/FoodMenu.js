import { useEffect, useState } from "react";
import { API_URL } from "../../utils/data";

import AddFoodItem from "../../components/AddFoodItem/AddFoodItem";
import VendorHeader from "../../components/VendorHeader/VendorHeader";

import { MainContainer } from "./styledComponent";
import axios from "axios";

const FoodMenu = () => {
  const [foodItems, setFoodItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const foodItemsHandler = async () => {
    const restaurantId = localStorage.getItem("restaurantId");
    const vendorToken = localStorage.getItem("vendorToken");
    try {
      const response = await axios.get(
        `${API_URL}/api/foodItems/${restaurantId}`,
        {
          headers: {
            Authorization: `Bearer ${vendorToken}`,
          },
        }
      );
      setFoodItem(response.data.foodItems);
    } catch (error) {
      console.error(
        "failed to fetch foodItems :",
        error.response?.data?.message
      );
      setError(error.response?.data?.message || "Failed to fetch foodItems");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    foodItemsHandler();
  }, []);

  //handle delete
  const deleteProductById = async (foodItemId) => {
    alert('Are you Sure want to Delete!')
    try {
      const vendorToken = localStorage.getItem("vendorToken");
      await axios.delete(`${API_URL}/api/delete-foodItem/${foodItemId}`, {
        headers: {
          Authorization: `Bearer ${vendorToken}`,
        },
      });
      foodItemsHandler();
    } catch (error) {
      console.error("Failed to delete foodItem:", error);
      setError(error.response?.data?.message || "Failed to delete foodItem");
    }
  };
  return (
    <>
      <VendorHeader />
      <MainContainer>
        <section>
          <AddFoodItem />
        </section>
        <section>
          <div className="foodItemsection">
            {isLoading ? (
              <div className="loader-section">
                <p>Loading...</p>
              </div>
            ) : !foodItems.length ? (
              <p>No foodItems added</p>
            ) : (
              <table className="product-table">
                {error && <p>{error}</p>}
                <thead>
                  <tr>
                    <th>Sr.No</th>
                    <th>Food Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {foodItems.map((item, index) => (
                    <tr key={item._id}>
                      <td>{index + 1}</td>
                      <td>{item.foodName}</td>
                      <td>{item.price}</td>
                      <td>{item.category}</td>
                      <td>
                        {item.foodImage && (
                          <img
                            src={`${API_URL}/${item.foodImage}`} 
                            alt={item.foodName}
                            style={{ width: "50px", height: "50px" }}
                          />
                        )}
                      </td>
                      <td>
                        <button
                          onClick={() => deleteProductById(item._id)}
                          className="deleteBtn"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </section>
      </MainContainer>
    </>
  );
};

export default FoodMenu;
