import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0px 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
export const Logo = styled.img`
  width: 50px;
  cursor: pointer;
`;
export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const NavItem = styled.li`
    list-style: none;
    padding-right: 40px;
    color: #000000;
    cursor: pointer;
    
`
export const CartCount = styled.span`
margin-left: 5px;
color: white;
background-color:rgb(241, 57, 57);
border-radius: 100px;
padding-right: 5px;
`