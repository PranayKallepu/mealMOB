import Header from "../../components/Header";
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

const Home = () => {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <Header />
      <MainContainer>
        <SearchContainer>
          <h1>Discover Best Food and Order Now.</h1>
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
  );
};

export default Home;
