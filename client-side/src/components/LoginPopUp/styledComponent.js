import { styled } from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  max-width: 400px;
  padding: 20px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border: none;
  @media screen and (max-width: 768px) {
    padding: 5px;
    margin: 15px 5px 15px 5px;
  }
`;

export const Button = styled.button`
  color: white;
  border: none;
  background: #2563eb;
  font-size: 16px;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #1e40af;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin-bottom: 10px;
  }
`;

export const Form = styled.form`
  border-radius: 10px;
  padding: 20px;
  border: 2px solid #cbd5e1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8fafc;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
  }

  h3 {
    font-size: 20px;
    color: #1e293b;
    margin-bottom: 15px;
  }

  input {
    width: 90%;
    padding: 10px;
    margin: 8px 0;
    border: 1px solid #94a3b8;
    border-radius: 6px;
    font-size: 14px;
    outline: none;
    transition: border 0.3s ease-in-out;

    &:focus {
      border-color: #2563eb;
      box-shadow: 0 0 5px rgba(37, 99, 235, 0.3);
    }
  }

  button {
    width: 100%;
    padding: 10px;
    margin-top: 15px;
    background-color: #22c55e;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #16a34a;
    }

    &:disabled {
      background-color: #94a3b8;
      cursor: not-allowed;
    }
  }
`;
