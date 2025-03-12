import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { IoFilter } from "react-icons/io5";
import { categoryEnum } from "../../utils/enums";
import {
  MainContainer,
  FilterButton,
  PopupContainer,
  Dropdown,
  RatingContainer,
  RatingButton,
  PopupActions,
  ButtonApply,
  ClearFilterButton,
} from "./styledComponent";

const FilterPopup = ({ onFilterChange }) => {
  const [activeCategory, setActiveCategory] = useState(categoryEnum[0]);
  const [activeRating, setActiveRating] = useState(null);

  const handleCategoryChange = (event) => {
    setActiveCategory(event.target.value);
  };

  const handleRatingChange = (rating) => {
    setActiveRating(rating);
  };

  const clearFilters = () => {
    setActiveCategory(categoryEnum[0]);
    setActiveRating(null);
  };

  const applyFilters = (close) => {
    onFilterChange(activeCategory, activeRating);
    close();
  };

  return (
    <Popup
      modal
      trigger={
        <FilterButton>
          Filter <IoFilter />
        </FilterButton>
      }
      contentStyle={{
        background: "none",
        border: "none",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {(close) => (
        <MainContainer>
          <PopupContainer>
            <h2>Filter Restaurants</h2>

            {/* Category Dropdown */}
            <div>
              <label htmlFor="category">Category:</label>
              <Dropdown
                id="category"
                value={activeCategory}
                onChange={handleCategoryChange}
              >
                {categoryEnum.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Dropdown>
            </div>

            {/* Rating Filter */}
            <RatingContainer>
              <p>Rating:</p>
              {[1, 2, 3, 4, 5].map((rating) => (
                <RatingButton
                  key={rating}
                  selected={activeRating === rating}
                  onClick={() => handleRatingChange(rating)}
                >
                  {rating}+ ⭐
                </RatingButton>
              ))}
            </RatingContainer>

            {/* Buttons */}
            <PopupActions>
              <ClearFilterButton type="button" onClick={clearFilters}>
                Clear Filters
              </ClearFilterButton>
              <ButtonApply onClick={() => applyFilters(close)}>
                Apply
              </ButtonApply>
              <button
                style={{
                  fontSize: "10px",
                  padding: "0px 5px",
                  borderRadius: "6px",
                }}
                onClick={close}
              >
                Close
              </button>
            </PopupActions>
          </PopupContainer>
        </MainContainer>
      )}
    </Popup>
  );
};

export default FilterPopup;
