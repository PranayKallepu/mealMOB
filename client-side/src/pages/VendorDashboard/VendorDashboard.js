import { useNavigate } from "react-router-dom";
import VendorLogin from "../../components/VendorLogin";
import VendorRegister from "../../components/VendorRegister";
import {
  DashboardContainer,
  Navbar,
  NavList,
  NavItem,
} from "../Dashboard/styledComponent";
import { BackgroundContainer, DashboardDetails } from "./styledComponent";
import { useState } from "react";

const VendorDashboard = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  return (
    <DashboardContainer>
      <BackgroundContainer></BackgroundContainer>
      <Navbar>
        <div>
          <h3>Vendor Dashboard</h3>
        </div>
        <div>
          <NavList>
            <NavItem onClick={() => navigate("/")}>MealMOB</NavItem>
            <NavItem onClick={() => setIsLogin(true)}>Login</NavItem>
            <NavItem onClick={() => setIsLogin(false)}>Register</NavItem>
          </NavList>
        </div>
      </Navbar>
      <DashboardDetails>
        <h2>Add Restaurants to MealMOB</h2>
        {isLogin ? <VendorLogin /> : <VendorRegister setIsLogin={setIsLogin} />}
      </DashboardDetails>
    </DashboardContainer>
  );
};

export default VendorDashboard;
