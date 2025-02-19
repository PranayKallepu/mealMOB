import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/M-logo.png";
import Cookies from "js-cookie";
import {
  NavContainer,
  Logo,
  LogoName,
  NavList,
  NavItem,
} from "../Header/styledComponent";
import AddFood from "../AddFood";

const VendorHeader = () => {
  const navigate = useNavigate();

  // 🔹 Logout Function: Clears all tokens and redirects
  const handleLogout = () => {
    alert("Are you sure to Logout!");
    Cookies.remove("vendorId");
    Cookies.remove("vendorName");
    Cookies.remove("vendorToken");
    Cookies.remove("restaurantId");
    navigate("/vendor-dashboard");
  };

  return (
    <NavContainer>
      <div>
        <Link to="/vendor">
          <Logo src={logo} alt="logo" />
          <LogoName>Vendor Dashboard</LogoName>
        </Link>
      </div>
      <div>
        <NavList>
          <Link to="/">
            <NavItem>MealMOB</NavItem>
          </Link>
          <Link to="/vendor">
            <NavItem>Home</NavItem>
          </Link>
          <NavItem>
            <AddFood />
          </NavItem>
          <Link to="/vendor/food-menu">
            <NavItem>Food Menu</NavItem>
          </Link>
          <NavItem style={{ color: "red" }} onClick={handleLogout}>
            Logout
          </NavItem>
        </NavList>
      </div>
    </NavContainer>
  );
};

export default VendorHeader;
