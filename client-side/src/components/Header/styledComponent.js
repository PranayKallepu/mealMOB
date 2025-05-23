import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0px 10px;
  background-color: white;
  box-shadow: 0px 0px 5px 0px rgba(97, 96, 96, 0.75);
  position: sticky;
  top: 0;
  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 0px 10px;
  }
`;
export const Logo = styled.img`
  width: 50px;
  cursor: pointer;
`;
export const LogoName = styled.p`
  color: rgb(13, 160, 168);
  font-size: 14px;
  font-weight: 500;
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
    height: 30vh;
    padding: 20px;
  }
`;

export const NavItem = styled.li`
  list-style: none;
  padding-right: 40px;
  color: #f7931e;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    padding: 10px 0;
    font-size: 16px;
  }
`;
export const CartCount = styled.span`
  margin-left: 5px;
  padding-right: 3px;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 500;
  color: white;
  background-color: rgb(241, 57, 57);
`;

export const HamburgerContainer = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 9999;
  }
`;
