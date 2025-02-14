import { styled } from "styled-components";
import backgroundImageLg from "../../assets/background-lg.jpg";
import backgroundImageSm from "../../assets/background-lg.jpg";

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
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border: 1px solid #fff;
    display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  padding-bottom: 10px;
  color: #fff;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    margin: -10px;
    font-size: 12px;
    color: rgb(41, 184, 184);
  }
`;
export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
`;
export const NavItem = styled.li`
  list-style: none;
  padding-right: 40px;
  color: white;
  cursor: pointer;
`;

export const Logo = styled.img`
  padding-top: 10px;
  width: 50px;
  cursor: pointer;
  margin-top: -10px;
`;

export const DashboardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 30px;
  width: 100%;
  min-width: 120px;
  h1 {
    padding: 20px 0px;
    font-style: oblique;
  }
  p {
    font-size: 40px;
    font-style: italic;
    text-align: center;
    padding-left: 20px;
    margin-top: -20px;
  }
`;
