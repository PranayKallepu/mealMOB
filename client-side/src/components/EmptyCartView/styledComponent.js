import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
`;

export const Image = styled.img`
  width: 180px;
  height: 190px;
  @media screen and (min-width: 768px) {
    width: 360px;
    height: 380px;
  }
`;

export const Heading = styled.h1`
  color: #1e293b;
  font-family: "Roboto";
  font-size: 24px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const Button = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  font-family: "Roboto";
  font-size: 12px;
  border-radius: 8px;
  border: none;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 16px;
  outline: none;
  cursor: pointer;
`;
