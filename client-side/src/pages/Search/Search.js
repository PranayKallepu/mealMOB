import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { BsSearch } from "react-icons/bs";
import useFetchRestaurants from "../../hooks/useFetchRestaurants";
import useFetchDishes from "../../hooks/useFetchDishes.js";
import SearchRestaurants from "../../components/SearchRestaurants/SearchRestaurants.js";
import SearchDishes from "../../components/SearchDishes/index.js";
import {
  SearchContainer,
  SearchInputCard,
  SearchInput,
  ButtonContainer,
  ToggleButton,
  DisplayContainer
} from "../../pages/Search/styledComponent";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [activeTab, setActiveTab] = useState("restaurants");

  const { restaurantsList, apiStatus } = useFetchRestaurants(
    null,
    null,
    searchInput
  );

  const { filterDishes, apiDishStatus } = useFetchDishes(null, searchInput);

  const onChangeSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
      <Header />
      <SearchContainer>
        <SearchInputCard>
          <SearchInput
            value={searchInput}
            type="search"
            placeholder="Search for restaurants and food"
            onChange={onChangeSearchInput}
          />
          <BsSearch className="search-icon" />
        </SearchInputCard>
        <ButtonContainer>
          <ToggleButton
            active={activeTab === "restaurants"}
            onClick={() => setActiveTab("restaurants")}
          >
            Restaurants
          </ToggleButton>
          <ToggleButton
            active={activeTab === "dishes"}
            onClick={() => setActiveTab("dishes")}
          >
            Dishes
          </ToggleButton>
        </ButtonContainer>
      </SearchContainer>
      <DisplayContainer>
      {activeTab === "restaurants" ? (
          <SearchRestaurants
            restaurantsList={restaurantsList}
            apiStatus={apiStatus}
            searchInput={searchInput}
          />
        ) : (
          <SearchDishes
            filterDishes={filterDishes}
            apiDishStatus={apiDishStatus}
            searchInput={searchInput}
          />
        )}
      </DisplayContainer>
    </>
  );
};

export default Search;
