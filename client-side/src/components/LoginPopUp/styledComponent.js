import { styled } from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  min-width: 300px;
  max-width: 500px;
  padding: 20px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

export const Button = styled.button`
  color: white;
  border: none;
  background: #f7931e;
  font-size: 16px;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: rgb(250, 144, 23);
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
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
      border-color: #f7931e;
      box-shadow: 0 0 5px #f7931e;
    }
  }

  button {
    width: 100%;
    padding: 10px;
    margin-top: 15px;
    background-color: #f7931e;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: rgb(250, 141, 17);
    }

    &:disabled {
      background-color: #94a3b8;
      cursor: not-allowed;
    }
  }
`;
