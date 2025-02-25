import styled from "styled-components";
import { FaStar } from "react-icons/fa";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 90%;
  max-width: 1110px;
`;

export const FoodItemsContainer = styled.div`
  width: 60%;
  margin-top: 20px;
  h4 {
    margin-top: 10px;
    margin-bottom: 5px;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;
//Restaurant Details
export const RestaurantContainer = styled.div`
  border: 0.5px solid gray;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  border-bottom-style: none;
  box-shadow: 0px 11px 10px -10px rgba(0, 0, 0, 0.31);
  -webkit-box-shadow: 0px 11px 10px -10px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: 0px 11px 10px -10px rgba(0, 0, 0, 0.31);
`;

export const RestaurantDetails = styled.div`
  h2 {
    color: #171f46;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  p {
    color: #64748b;
    font-size: 14px;
  }
`;

export const CuisinesCard = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const RatingCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  p {
    border-radius: 4px;
    padding: 6px;
    color: #ffffff;
    background-color: rgb(68, 159, 32);
  }
  span {
    color: gray;
  }
`;
export const Star = styled(FaStar)`
  font-size: 12px;
`;

export const FoodList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const NoFoodItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 64px;
  margin-top: 48px;
  @media screen and (min-width: 768px) {
    margin-left: 30px;
    width: 70%;
    padding-bottom: 0;
    margin-top: 0px;
  }
  img {
    width: 250px;
    height: 180px;
    @media screen and (min-width: 768px) {
      width: 459px;
      height: 315px;
    }
  }
  h1 {
    color: #171f46;
    font-family: "Roboto";
    font-size: 20px;
    font-weight: 500;
    line-height: 1.3px;
    @media screen and (min-width: 768px) {
      margin-top: 32px;
      font-size: 24px;
    }
  }
  p {
    text-align: center;
    color: #64748b;
    font-family: "Roboto";
    font-size: 14px;
    width: 90%;
    max-width: 288px;
    line-height: 1.3;

    @media screen and (min-width: 768px) {
      margin-top: 12px;
      font-size: 18px;
      width: 60%;
      max-width: 466px;
    }
  }
`;

//FAILURE VIEW CSS
export const FailureCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  padding-bottom: 64px;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
    margin-left: 30px;
    width: 70%;
    padding-bottom: 0;
  }
`;

export const FailureImage = styled.img`
  width: 250px;
  height: 200px;
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 350px;
  }
`;

export const FailureHeading = styled.h1`
  color: #171f46;
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const FailureDescription = styled.p`
  text-align: center;
  color: #64748b;
  font-family: "Roboto";
  font-size: 14px;
  width: 90%;
  max-width: 288px;
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 60%;
    max-width: 466px;
  }
`;
//LOADER VIEW CSS
export const LoaderCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`;
