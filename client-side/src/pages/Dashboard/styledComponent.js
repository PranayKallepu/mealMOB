import { styled } from "styled-components";
import backgroundImageLg from "../../assets/background-lg.jpg";
import backgroundImageSm from "../../assets/background-sm.jpg";

export const DashboardContainer = styled.div`
  color: #ffffff;
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
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    font-size: 14px;
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
  color: white;

  @media screen and (max-width: 768px) {
    color: black;
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
