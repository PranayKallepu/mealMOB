// styledComponents.js

import styled from "styled-components";

export const AddressContainer = styled.div`
  padding: 30px;
  border-radius: 10px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 6px;
    font-weight: 500;
  }

  input {
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 14px;
  }
`;

export const ProceedButton = styled.button`
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  background-color: #ff6347;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #e5533d;
  }
`;

export const ChangeAddressBtn = styled.button`
  padding: 8px 14px;
  background-color: #3498db;
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

export const AddressEmpty = styled.div`
  text-align: center;
  margin-top: 50px;

  h2 {
    margin-bottom: 20px;
  }

  button {
    padding: 10px 16px;
    font-size: 15px;
    background-color: #ff6347;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background-color: #e5533d;
    }
  }
`;
