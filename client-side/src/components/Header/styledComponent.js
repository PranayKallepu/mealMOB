import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: -50px;
  padding: 10px 0px 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
export const Logo = styled.img`
  width: 50px;
  cursor: pointer;
`;
export const LogoName = styled.p`
  color: rgb(10, 182, 177);
  font-size: 14px;
  font-weight: bold;
  margin-top: -10px;
`;
export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 70px;
    left: 0;
    background-color: white;
    width: 100%;
    height: 100vh;
    padding: 20px;
    z-index: 1000; //Ensures it appears above other content
  }
`;

export const NavItem = styled.li`
  list-style: none;
  padding-right: 40px;
  color: #000000;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    color: black;
    padding: 10px 0;
    font-size: 20px;
  }
`;
export const CartCount = styled.span`
  margin-left: 5px;
  color: white;
  background-color: rgb(241, 57, 57);
  border-radius: 100px;
  padding-right: 5px;
`;

export const HamburgerContainer = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
