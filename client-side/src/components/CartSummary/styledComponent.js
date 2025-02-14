import styled from "styled-components";

export const TotalAmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  color: rgb(97, 95, 95);
  button {
    background-color: #3b82f6;
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    border: none;
    border-radius: 4px;
    padding: 10px 15px;
    cursor: pointer;
    margin-bottom: 20px;
  }
`;
export const AmountSpan = styled.span`
  color: #0967d2;
  font-size: 22px;
  font-weight: bold;
`;

export const PopupContainer = styled.div`
  height: 100vh;
`;

export const OrderButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  font-family: "Roboto";
  color: white;
  padding: 8px 15px 8px 15px;
  margin: 8px;
  background-color: #7c69e9;
  border: none;
  border-radius: 4px;
  outline: none;
`;

export const CloseButton = styled.button`
  padding: 10px 20px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

export const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
`;
