import React, { useState } from "react";
import logo from "../../assets/M-logo.png";
import { Link } from "react-router-dom";
import LoginPopUp from "../../components/LoginPopUp";
import SignupPopUp from "../../components/SignupPopUp";
import Hamburger from "hamburger-react";
import {
  DashboardContainer,
  BackgroundContainer,
  Navbar,
  Logo,
  NavList,
  NavItem,
  DashboardDetails,
  HamburgerContainer,
  BrandContainer,
} from "./styledComponent";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <DashboardContainer>
      <BackgroundContainer />
      <Navbar>
        <BrandContainer>
          <Logo src={logo} alt="logo" />
          <p>MealMOB</p>
        </BrandContainer>
        <HamburgerContainer>
          <Hamburger size={24} toggled={open} toggle={setOpen} />
        </HamburgerContainer>
        <NavList open={open}>
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
      </Navbar>
      <DashboardDetails>
        <h1>MealMOB</h1>
        <p>Discover the best food & drinks in Warangal</p>
      </DashboardDetails>
    </DashboardContainer>
  );
};

export default Dashboard;
