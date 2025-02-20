import { useState, useEffect } from "react";
import { API_URL } from "../../utils/data";
import VendorHeader from "../../components/VendorHeader";
import axios from "axios";
import Cookies from "js-cookie";
import AddFood from "../../components/AddFood";
import useFetchFoodItems from "../../hooks/useFetchFoodItems";
import {
  MainContainer,
  NoFoodCard,
  TableWrapper,
  StyledTable,
  SearchInput,
} from "./styledComponent";
import {
  FailureCard,
  FailureDescription,
  FailureHeading,
  FailureImage,
  LoadingContainer,
} from "../../components/AllRestaurants/styledComponent";

const VendorMenu = () => {
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFoodItems, setFilteredFoodItems] = useState([]);
  const authToken = Cookies.get("vendorToken");
  const restaurantId = Cookies.get("restaurantId");

  // Fetch Food Items
  const { foodItemsList, apiStatus } = useFetchFoodItems(
    restaurantId,
    authToken
  );

  // Update filtered items when foodItemsList or searchTerm changes
  useEffect(() => {
    if (Array.isArray(foodItemsList)) {
      setFilteredFoodItems(
        foodItemsList.filter((item) =>
          item.foodName.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [foodItemsList, searchTerm]);

  // Handle Delete
  const deleteProductById = async (foodItemId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (!confirmDelete) return;

    try {
      const vendorToken = Cookies.get("vendorToken");
      await axios.delete(`${API_URL}/api/delete-foodItem/${foodItemId}`, {
        headers: { Authorization: `Bearer ${vendorToken}` },
      });

      // Update state by filtering out the deleted item
      setFilteredFoodItems((prevItems) =>
        prevItems.filter((item) => item._id !== foodItemId)
      );
    } catch (error) {
      console.error("Failed to delete foodItem:", error);
      setError(error.response?.data?.message || "Failed to delete foodItem");
    }
  };

  const renderFoodItemListView = () => {
    if (!Array.isArray(foodItemsList) || foodItemsList.length === 0) {
      return (
        <NoFoodCard>
          <p>No food items available.</p> <AddFood />
        </NoFoodCard>
      );
    }

    return (
      <section>
        {/* Search Bar */}
        <SearchInput
          type="text"
          placeholder="Search food items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Check if filtered list is empty */}
        {filteredFoodItems.length === 0 ? (
          <p>No matching food items found.</p>
        ) : (
          <TableWrapper>
            <StyledTable>
              {error && <p>{error}</p>}
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>Food Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Image</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {filteredFoodItems.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.foodName}</td>
                    <td>₹{item.price}</td>
                    <td>{item.category}</td>
                    <td>
                      {item.foodImage ? (
                        <img
                          src={item.foodImage}
                          alt={item.foodName}
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "5px",
                          }}
                        />
                      ) : (
                        <p>No Image</p>
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
            </StyledTable>
          </TableWrapper>
        )}
      </section>
    );
  };

  const renderFailureView = () => (
    <FailureCard>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        alt="all-products-error"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescription>
        We are having some trouble processing your request. Please try again
        later.
      </FailureDescription>
    </FailureCard>
  );

  const renderLoadingView = () => (
    <LoadingContainer>
      <p>Loading...</p>
    </LoadingContainer>
  );

  const renderAllRestaurants = () => {
    switch (apiStatus) {
      case "SUCCESS":
        return renderFoodItemListView();
      case "FAILURE":
        return renderFailureView();
      case "IN_PROGRESS":
        return renderLoadingView();
      default:
        return null;
    }
  };

  return (
    <>
      <VendorHeader />
      <MainContainer>{renderAllRestaurants()}</MainContainer>
    </>
  );
};

export default VendorMenu;
