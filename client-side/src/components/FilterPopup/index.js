import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { IoFilter } from "react-icons/io5";
import {
  RatingHeading,
  RatingsList,
  RatingItem,
  RatingImage,
  ClearFilterButton,
  FilterButton,
} from "./styledComponent";

const ratingsList = [
  {
    rating: "4",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png",
  },
  {
    rating: "3",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png",
  },
  {
    rating: "2",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png",
  },
  {
    rating: "1",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png",
  },
];

const categoryEnum = ["Both", "Veg", "Non-Veg"];

const FilterPopup = ({ onFilterChange }) => {
  const [activeCategory, setActiveCategory] = useState("");
  const [activeRating, setActiveRating] = useState("");

  const handleCategoryChange = (event) => {
    setActiveCategory(event.target.value);
  };

  const handleRatingChange = (rating) => {
    setActiveRating(rating);
  };

  const clearFilters = () => {
    setActiveCategory("");
    setActiveRating("");
  };

  const applyFilters = (close) => {
    onFilterChange(activeCategory, activeRating);
    close(); // Close the popup after applying filters
  };

  return (
    <Popup
      trigger={
        <FilterButton>
          {" "}
          Filter <IoFilter />
        </FilterButton>
      }
      modal
      nested
    >
      {(close) => (
        <div className="popup-container">
          <h2>Filter Restaurants</h2>
          {/* Category Dropdown */}
          <div>
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={activeCategory}
              onChange={handleCategoryChange}
            >
              {categoryEnum.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Rating Filter */}
          <div>
            <RatingHeading>Rating</RatingHeading>
            <RatingsList>
              {ratingsList.map((eachRating) => {
                const isActive = eachRating.rating === activeRating;
                return (
                  <RatingItem
                    key={eachRating.rating}
                    $isActive={isActive}
                    onClick={() => handleRatingChange(eachRating.rating)}
                  >
                    <RatingImage
                      src={eachRating.imageUrl}
                      alt={`rating ${eachRating.rating}`}
                    />
                    <p>& up</p>
                  </RatingItem>
                );
              })}
            </RatingsList>
          </div>

          {/* Buttons */}
          <div className="popup-actions">
            <button onClick={() => applyFilters(close)}>Apply</button>
            <ClearFilterButton type="button" onClick={clearFilters}>
              Clear Filters
            </ClearFilterButton>
            <button onClick={close}>Close</button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default FilterPopup;
