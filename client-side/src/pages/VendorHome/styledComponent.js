import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  gap: 20px;
  @media (min-width: 768px) {
    padding-top: 30px;
    flex-direction: row;
    margin: 0px 150px;
  }
`;

export const VendorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
  @media (min-width: 768px) {
    flex: 3px;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 10px;
  }
`;
export const TabButtonsCard = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
export const ButtonsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  @media (min-width: 768px) {
    width: 60%;
  }
`;

export const Heading = styled.h2`
  text-align: center;
  color: gray;
  font-weight: 400;
  span {
    color: rgb(7, 109, 106);
    font-weight: bold;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  @media (min-width: 768px) {
    width: 400px;
    height: 400px;
  }
`;

export const Button = styled.button`
  padding: 10px;
  margin-top: 15px;
  background-color: rgb(236, 32, 32);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: red;
  }
`;

export const TabButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.active ? "#ff5722" : "#f3f4f6")};
  color: ${(props) => (props.active ? "white" : "#ff5722")};
  border: ${(props) => (props.active ? "none" : "1px solid #ff5722")};
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.active ? "#ff5722" : "#e5e7eb")};
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
