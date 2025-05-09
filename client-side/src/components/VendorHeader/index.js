import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/M-logo.png";
import Cookies from "js-cookie";
import Hamburger from "hamburger-react";
import {
  NavContainer,
  Logo,
  LogoName,
  NavList,
  NavItem,
  HamburgerContainer,
} from "../Header/styledComponent";
import AddFood from "../AddFood";
const VendorHeader = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // 🔹 Logout Function: Clears all tokens and redirects
  const handleLogout = () => {
    if (window.confirm("Are you sure to Logout!")) {
      Cookies.remove("vendorId");
      Cookies.remove("vendorToken");
      Cookies.remove("vendorName");
      navigate("/vendor-dashboard");
    }
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
        <HamburgerContainer>
          <Hamburger size={24} toggled={open} toggle={setOpen} />
        </HamburgerContainer>
        <NavList open={open}>
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
