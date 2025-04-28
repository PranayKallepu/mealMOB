import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsSearch } from "react-icons/bs";
import useFetchRestaurants from "../../hooks/useFetchRestaurants";
import useFetchDishes from "../../hooks/useFetchDishes.js";
import SearchRestaurants from "../../components/SearchRestaurants";
import SearchDishes from "../../components/SearchDishes";
import Cookies from "js-cookie";
import {
  SearchContainer,
  SearchInputCard,
  SearchInput,
  ButtonContainer,
  ToggleButton,
  DisplayContainer,
} from "./styledComponent";
import Header from "../../components/Header/index.js";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [activeTab, setActiveTab] = useState("restaurants");

  const authToken = Cookies.get("token");

  const { restaurantsList, apiStatus } = useFetchRestaurants(
    null,
    null,
    searchInput,
    authToken
  );

  const { filterDishes, apiDishStatus } = useFetchDishes(null, searchInput);

  const onChangeSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ position: "absolute", width: "100%" }}
    >
      <Header />
      <SearchContainer>
        <SearchInputCard>
          <SearchInput
            value={searchInput}
            type="search"
            placeholder="Search for restaurants or dishes"
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
    </motion.div>
  );
};

export default Search;
