import styled from "styled-components";

export const AddButton = styled.button`
  background: none;
  font-size: 14px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  color: #f7931e;
`;

// Popup Modal Overlay
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

// Modal Container
export const ModalContainer = styled.div`
  background: #fff;
  width: 90%;
  max-width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
`;

// Close Button
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

// Styled Form
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Styled Input Fields
export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  /* background-color: ${(props) => (props.isFill ? "#e0f7fa" : "white")};
  transition: background-color 0.3s ease-in-out; */

  &:focus {
    background-color: #e0f7fa;
  }
`;

// Styled Select
export const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

// Styled Textarea
export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
  height: 100px;
  outline: none;
  background-color: ${(props) => (props.isFill ? "#e0f7fa" : "white")};
  transition: background-color 0.3s ease-in-out;

  &:focus {
    background-color: #b2ebf2;
  }
`;

// Styled Submit Button
export const SubmitButton = styled.button`
  background: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;

  &:hover {
    background: #0056b3;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;
