import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/M-logo.png";
import Cookies from "js-cookie";
import { FiSearch } from "react-icons/fi";
import { FaCartArrowDown, FaTruck } from "react-icons/fa";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import Hamburger from "hamburger-react";
import {
  NavContainer,
  Logo,
  LogoName,
  NavList,
  NavItem,
  CartCount,
  HamburgerContainer,
} from "./styledComponent";

const Header = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

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
        <HamburgerContainer>
          <Hamburger size={24} toggled={open} toggle={setOpen} />
        </HamburgerContainer>
        <NavList open={open}>
          <Link to="/vendor">
            <NavItem>Add Restaurant</NavItem>
          </Link>
          <Link to="/search">
            <NavItem>
              <FiSearch />
              Search
            </NavItem>
          </Link>
          <Link to="/order-track">
            <NavItem>
              <FaTruck />
              Order Track
            </NavItem>
          </Link>
          <Link to="/cart">
            <NavItem>
              <FaCartArrowDown />
              Cart
              {cart.length > 0 && <CartCount> {cart.length}</CartCount>}
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
