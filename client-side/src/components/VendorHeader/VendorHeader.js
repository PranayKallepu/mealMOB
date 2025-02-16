import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/M-logo.png";
import Cookies from "js-cookie";
import {
  NavContainer,
  Logo,
  NavList,
  NavItem,
} from "../Header/styledComponent";
import AddFood from "../AddFood";

const VendorHeader = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");

  // 🔹 Logout Function: Clears all tokens and redirects
  const handleLogout = () => {
    alert("Are you sure to Logout!");
    Cookies.remove("vendorId");
    Cookies.remove("vendorName");
    Cookies.remove("vendorToken");
    Cookies.remove("restaurantId");
    if (!token) {
      navigate("/dashboard");
    }
    navigate("/");
  };

  return (
    <NavContainer>
      <div>
        <Link to="/vendor">
          <Logo src={logo} alt="logo" />
          <p>MealMOB</p>
        </Link>
      </div>
      <div>
        <NavList>
          <NavItem>
            <Link to="/vendor">Home</Link>
          </NavItem>
          <NavItem>
            <AddFood />
          </NavItem>
          <NavItem>
            <Link to="/vendor/food-menu">Food Menu</Link>
          </NavItem>
          <NavItem style={{ color: "red" }} onClick={handleLogout}>
            Logout
          </NavItem>
        </NavList>
      </div>
    </NavContainer>
  );
};

export default VendorHeader;
