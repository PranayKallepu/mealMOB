import { Link } from "react-router-dom";
import logo from "../../assets/M-logo.png";
import Cookies from 'js-cookie'
import { FiSearch } from "react-icons/fi";
import { FaCartArrowDown } from "react-icons/fa";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { NavContainer, Logo, NavList, NavItem ,CartCount} from "./styledComponent";

const Header = () => {
  const {cartList} = useContext(CartContext)
  const handleLogout = ()=>{
    Cookies.remove('token')
    Cookies.remove('username')
  }
  return (
    <NavContainer>
      <div>
        <Link to="/">
          <Logo src={logo} alt="logo" />
          {/* <p>MealMOB</p> */}
        </Link>
      </div>
      <div>
        <NavList>
          <Link to="/vendor-dashboard">
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
              {cartList.length > 0 && <CartCount > {cartList.length}</CartCount>}
            </NavItem>
          </Link>
          <Link to="/dashboard" onClick={handleLogout}>
            <NavItem>Logout</NavItem>
          </Link>
        </NavList>
      </div>
    </NavContainer>
  );
};

export default Header;
