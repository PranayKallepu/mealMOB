import React from "react";
import { motion } from "framer-motion";
import MenuList from "../../components/MenuList";
import { useNavigate } from "react-router-dom";
import AllRestaurants from "../../components/AllRestaurants";
import { BsSearch } from "react-icons/bs";
import Footer from "../../components/Footer";
import {
  PageWrapper,
  MainContainer,
  SearchInputContainer,
  SearchContainer,
  SearchInput,
} from "./styledComponent";
import Header from "../../components/Header";

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

const Home = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ position: "absolute", width: "100%" }}
    >
      <PageWrapper>
        <Header />
        <MainContainer>
          <SearchContainer>
            <h1>Discover Best Food and Order Now</h1>
            <SearchInputContainer>
              <SearchInput
                type="search"
                onClick={() => navigate("/search")}
                placeholder="Search for restaurants and dishes"
              />
              <BsSearch className="search-icon" />
            </SearchInputContainer>
          </SearchContainer>
          <MenuList />
          <AllRestaurants />
        </MainContainer>
        <Footer />
      </PageWrapper>
    </motion.div>
  );
};

export default Home;
