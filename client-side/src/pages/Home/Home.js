import Header from "../../components/Header/Header";
import MenuList from "../../components/MenuList/MenuList";
import { Link } from "react-router-dom";
import AllRestaurants from "../../components/AllRestaurants/AllRestaurants";
import { BsSearch } from "react-icons/bs";
import Footer from "../../components/Footer/Footer";
import {
  PageWrapper,
  MainContainer,
  SearchInputContainer,
  SearchContainer,
  SearchInput,
} from "./styledComponent";

const Home = () => {
  return (
    <PageWrapper>
      <Header />
      <MainContainer>
        <SearchContainer>
          <h1>Discover Best Food and Order Now.</h1>
          <Link to="/search">
            <SearchInputContainer>
              <SearchInput
                type="search"
                placeholder="Search for restaurants and dishes"
              />
              <BsSearch className="search-icon" />
            </SearchInputContainer>
          </Link>
        </SearchContainer>
        <MenuList />
        <AllRestaurants />
      </MainContainer>
      <Footer />
    </PageWrapper>
  );
};

export default Home;
