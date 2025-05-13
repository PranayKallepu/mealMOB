import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 10px;
  width: 100%;
  max-width: 1110px;
  height: 100vh;
  h2 {
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    padding: 10px 0px;
    h2 {
      margin-bottom: 0px;
    }
  }
`;

export const RestaurantHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FilterCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border: 1px solid gray;
    padding: 6px;
    border-radius: 6px;
    margin-left: 10px;
    @media screen and (max-width: 768px) {
      width: 100%;
      font-size: 12px;
    }
  }
`;

export const ClearButton = styled.button`
  border-radius: 6px;
  border: none;
  color: white;
  cursor: pointer;
  padding: 5px;
  margin-left: 10px;
  background: #dc3545;
  &:hover {
    background: #c82333;
  }
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const RestaurantList = styled.ul`
  display: flex;
  width: 100%;
  margin-top: 10px;
  flex-wrap: wrap;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: #ccc transparent;
  background-color: #ffffff;

  @media (max-width: 768px) {
    justify-content: center;
  }

  /* For WebKit Browsers */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 3px;
  }
`;

export const NoRestaurantsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 30px;
    width: 70%;
    padding-bottom: 0;
    margin-top: 0px;
  }
  img {
    width: 200px;
    height: 150px;
    @media screen and (min-width: 768px) {
      width: 300px;
      height: 250px;
    }
  }
  h1 {
    color: #171f46;
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
  margin-top: 50px;
  padding-bottom: 64px;
  @media screen and (min-width: 768px) {
    width: 70%;
    padding-bottom: 0;
  }
  button {
    background: #dc3545;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background: #c82333;
    }
  }
`;

export const FailureImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;

export const FailureHeading = styled.h1`
  padding-top: 10px;
  color: #171f46;
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

//LOADING VIEW CSS
// Shimmer Animation
const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  flex-wrap: wrap;
`;

// Shared Loading Styles
const LoadingEffect = styled.div`
  background: linear-gradient(120deg, #e2e8f0 25%, rgb(222, 227, 234) 90%);
  background-size: 400% 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 8px;
`;

// Loading Image Skeleton
export const LoadingImage = styled(LoadingEffect)`
  width: 250px;
  height: 200px;
  margin: 10px 10px;
`;

// Loading Name Skeleton
export const LoadingName = styled(LoadingEffect)`
  width: 250px;
  height: 30px;
  margin: 10px 10px;
`;
