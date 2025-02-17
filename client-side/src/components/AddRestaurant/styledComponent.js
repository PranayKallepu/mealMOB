import styled from "styled-components";

export const AddButton = styled.button`
  background-color: rgb(90, 147, 238);
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  padding: 10px;
  margin-top: 15px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #0b69ff;
  }
`;

// ✅ Modal Overlay
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

// ✅ Modal Container
export const ModalContainer = styled.div`
  background: white;
  width: 80%;
  height: 80%;
  max-height: 800px;
  max-width: 500px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  border: 1px solid blue;
`;

// ✅ Close Button
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

// ✅ Styled Form
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
  height: 100%;
  max-height: 500px;
`;

// ✅ Styled Input Fields
export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
`;

// ✅ Styled Select
export const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
`;

// ✅ Styled Checkbox Container
export const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  padding: 5px;
  border: 1px solid #cbd5e1;
`;

export const Label = styled.label`
  font-size: 20px;
  text-align: start;
  width: 100%;
`;

// ✅ Styled Cuisine Card
export const CuisinesCard = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 8px;
  border: 1px solid #ff6b6b; /* Soft red border */
  border-radius: 8px;
  background-color: #fff5f5;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffe3e3; /* Light red on hover */
  }
`;

// ✅ Styled Checkbox
export const StyleCheckBox = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
  accent-color: #ff6b6b; /* Soft red color */
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:checked {
    transform: scale(0.8); /* Slight zoom effect */
  }
`;

// ✅ Styled Submit Button
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
