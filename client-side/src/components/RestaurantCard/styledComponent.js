import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkItem = styled(Link)`
  text-decoration: none;
  width: 300px;
  flex-grow: 0;
  flex-shrink: 1;
  margin-right: 20px;
  @media (max-width: 768px) {
    margin: 10px;
  }
`;

export const RestaurantItemCard = styled.li`
  display: flex;
  flex-direction: column;
  color: #000000;
  padding: 10px;
  transition: all 0.3s ease-in-out; /* Smooth animation */
  @media (max-width: 768px) {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: rgb(238, 241, 246);
  }
  &:hover {
    background-color: rgb(238, 241, 246);
    transform: scale(0.9); /* Slight zoom out effect */
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
  img {
    height: 180px;
    width: 100%;
    border-radius: 10px;
  }

  p {
    color: gray;
  }
`;

export const Offer = styled.div`
  position: relative;
  top: -40px;
  padding: 10px 3px;
  color: #ffffff;
  font-weight: 800;
  background: transparent;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: ${({ isOffer }) =>
    isOffer
      ? "linear-gradient(to bottom, rgba(50, 0, 0, 0.06), black)"
      : "none"};
  height: 40px;
`;

export const DetailsCard = styled.div`
  position: ${(isOffer) => (isOffer ? "relative" : "static")};
  bottom: ${(isOffer) => isOffer && "40px"};
`;

export const RestaurantName = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Rating = styled.div`
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  padding: 0 5px;
  border-radius: 6px;
  margin-top: 5px;
  color: rgb(24, 113, 10);
  p {
    background-color: rgb(24, 113, 10);
    color: #ffffff;
    text-align: center;
    border-radius: 50%;
    width: 20px;
  }
`;

export const CuisineCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  p {
    font-size: 14px;
  }
`;
