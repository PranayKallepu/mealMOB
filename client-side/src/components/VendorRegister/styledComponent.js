import styled from "styled-components";

export const FormContainer = styled.div`
  border: 1px solid;
  border-radius: 20px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 60px;

  h3 {
    text-align: center;
    margin-bottom: 10px;
  }

  input {
    border: none;
    margin-bottom: 10px;
    padding: 8px;
    border-radius: 5px;
  }
  button {
    margin-top: 10px;
    padding: 6px;
    border: none;
    border-radius: 7px;
    background-color: #3b82f6;
    color: white;
    cursor: pointer;
    &:disabled {
      background-color: #94a3b8;
      cursor: not-allowed;
    }
  }
`;

export const Error = styled.p`
  color: red;
  text-align: center;
  font-weight: 500;
`;
