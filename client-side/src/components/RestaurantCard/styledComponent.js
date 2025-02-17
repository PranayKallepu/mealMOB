import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkItem = styled(Link)`
  text-decoration: none;
  margin-bottom: 48px;
  width: 300px;
  flex-grow: 0;
  flex-shrink: 1;
  margin-right: 20px;

  @media screen and (min-width: 768px) and (max-width: 991px) {
    width: 250px;
  }
`;

export const RestaurantItemCard = styled.li`
  display: flex;
  flex-direction: column;
  color: #000000;
  padding: 10px;
  transition: all 0.3s ease-in-out; /* Smooth animation */
  &:hover {
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

export const RestaurantName = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CuisineCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  p {
    font-size: 14px;
  }
`;

export const Offer = styled.div`
  padding: 10px 3px;
  color: #fff;
  font-weight: 800;
  margin-top: -40px;
  background: transparent;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: linear-gradient(to bottom, rgba(50, 0, 0, 0.06), black);
`;

export const Rating = styled.div`
  align-items: center;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  padding: 0 5px;
  border-radius: 6px;
  margin-top: 5px;
  background-color: rgb(63, 190, 43);
`;
