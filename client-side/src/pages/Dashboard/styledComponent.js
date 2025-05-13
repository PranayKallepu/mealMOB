import { styled } from "styled-components";
import backgroundImageLg from "../../assets/background-lg.jpg";
import backgroundImageSm from "../../assets/background-sm.jpg";

export const DashboardContainer = styled.div`
  color: #ffffff;
  background-color: none;
`;

export const BackgroundContainer = styled.div`
  position: absolute;
  left: 0;
  background-image: url(${backgroundImageLg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  z-index: -1;
  filter: blur(2px);

  @media screen and (max-width: 786px) {
    background-image: url(${backgroundImageSm});
  }
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px 10px;
  background-color: black;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const BrandContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 14px;
    font-weight: 500;
    color: rgb(41, 184, 184);
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: white;
    width: 100%;
    height: 100vh;
    padding: 20px;
  }
`;

export const NavItem = styled.li`
  list-style: none;
  cursor: pointer;
  color: #f7931e;

  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }
`;

export const Logo = styled.img`
  width: 50px;
  cursor: pointer;
`;

export const DashboardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  text-align: center;

  h1 {
    font-style: oblique;
    font-size: 40px;
  }

  p {
    font-size: 34px;
    font-style: italic;
  }
`;

export const HamburgerContainer = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
