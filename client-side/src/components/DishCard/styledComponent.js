import styled from "styled-components";
import { FaArrowRightToBracket } from "react-icons/fa6";

export const DishCard = styled.div`
  width: 300px;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 10px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  ${({ isHovered }) =>
    isHovered &&
    `
    transform: scale(1.02);
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
  `}
`;

export const RestaurantDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const RightArrow = styled(FaArrowRightToBracket)`
  font-size: 20px;
  margin-right: 10px;
`;

export const FoodItem = styled.li`
  display: flex;
  margin-right: 10px;
  list-style: none;
`;

export const FoodDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 2;
  h3 {
    font-weight: 500;
    font-size: 22px;
  }
  h4 {
    font-weight: 500;
  }
  h4 span {
    font-weight: 300;
  }
`;

export const FoodImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  margin-top: 10px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
  }
`;

export const AddButtonCard = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid gray;
  border-radius: 6px;
  text-align: center;
  width: 80%;
  padding: 5px;
  margin-top: -40px;
  background-color: white;
  color: green;
  cursor: pointer;
  button {
    cursor: pointer;
    font-weight: 500;
  }
`;

export const ReadMoreButton = styled.button`
  color: blue;
  cursor: pointer;
  font-weight: bold;
  margin-left: 5px;

  &:hover {
    text-decoration: underline;
  }
`;
