import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 64px;
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
  width: 400px;
`;

export const ButtonsCard = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto;
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

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
`;

export const TabButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.active ? "#3b82f6" : "#f3f4f6")};
  color: ${(props) => (props.active ? "white" : "#333")};
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.active ? "#2563eb" : "#e5e7eb")};
  }
`;
