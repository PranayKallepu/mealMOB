import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 75vh;
  @media screen and (min-width: 768px) {
    min-height: 90vh;
  }
`;
export const CartContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1110px;
  @media screen and (min-width: 768px) {
    width: 80%;
    max-width: 1110px;
  }
`;

export const CartHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    color: #3b82f6;
    font-size: 12px;
    font-weight: 500;
    background-color: #ffffff;
    border: 1px solid #3b82f6;
    border-radius: 4px;
    padding: 6px 8px;
    cursor: pointer;
    margin-top: 22px;
    margin-bottom: 22px;

    @media screen and (min-width: 768px) {
      font-size: 14px;
      margin-bottom: 48px;
      margin-top: 48px;
    }
  }
`;

export const Heading = styled.h1`
  color: #3e4c59;
  font-size: 24px;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

export const BillDetails = styled.div`
  padding: 20px;
  border-top: 1px solid #ccc;
`;

export const TotalPrice = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const ProceedButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
