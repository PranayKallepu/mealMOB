import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/M-logo.png";
import Cookies from "js-cookie";
import { FiSearch } from "react-icons/fi";
import { FaCartArrowDown } from "react-icons/fa";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
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
  const navigate = useNavigate();
  const { cartList } = useContext(CartContext);
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
