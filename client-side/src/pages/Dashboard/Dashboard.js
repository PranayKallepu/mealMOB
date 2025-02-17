import React from "react";
import logo from "../../assets/M-logo.png";
import { Link } from "react-router-dom";
import LoginPopUp from "../../components/LoginPopUp";
import SignupPopUp from "../../components/SignupPopUp";
import {
  DashboardContainer,
  BackgroundContainer,
  Navbar,
  Logo,
  NavList,
  NavItem,
  DashboardDetails,
} from "./styledComponent";

function Dashboard() {
  return (
    <DashboardContainer>
      <BackgroundContainer></BackgroundContainer>
      <Navbar>
        <div>
          <Logo src={logo} alt="logo" />
          <p>MealMOB</p>
        </div>
        <div>
          <NavList>
            <Link to="/vendor-dashboard">
              <NavItem>Add Restaurant</NavItem>
            </Link>
            <NavItem>
              <LoginPopUp />
            </NavItem>
            <NavItem>
              <SignupPopUp />
            </NavItem>
          </NavList>
        </div>
      </Navbar>
      <DashboardDetails>
        <h1>MealMOB</h1>
        <p>Discover the best food & drinks in Warangal</p>
      </DashboardDetails>
    </DashboardContainer>
  );
}

export default Dashboard;
