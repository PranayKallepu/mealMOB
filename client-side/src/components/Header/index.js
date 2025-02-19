import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/M-logo.png";
import Cookies from "js-cookie";
import { FiSearch } from "react-icons/fi";
import { FaCartArrowDown } from "react-icons/fa";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import {
  NavContainer,
  Logo,
  LogoName,
  NavList,
  NavItem,
  CartCount,
} from "./styledComponent";

const Header = () => {
  const navigate = useNavigate();
  const { cartList } = useContext(CartContext);
  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("username");
    navigate("/dashboard");
  };

  return (
    <NavContainer>
      <Link to="/">
        <Logo src={logo} alt="logo" />
        <LogoName>MealMOB</LogoName>
      </Link>
      <div>
        <NavList>
          <Link to="/vendor">
            <NavItem>Add Restaurant</NavItem>
          </Link>
          <Link to="/search">
            <NavItem>
              <FiSearch />
              Search
            </NavItem>
          </Link>
          <Link to="/cart">
            <NavItem>
              <FaCartArrowDown />
              Cart
              {cartList.length > 0 && <CartCount> {cartList.length}</CartCount>}
            </NavItem>
          </Link>
          <NavItem style={{ color: "red" }} onClick={handleLogout}>
            Logout
          </NavItem>
        </NavList>
      </div>
    </NavContainer>
  );
};

export default Header;
