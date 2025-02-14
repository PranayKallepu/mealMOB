import { styled } from "styled-components";

// Modal Container
export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  padding: 20px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

// Dark Background Overlay
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;

// Close Button
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 22px;
  font-weight: bold;
  color: #64748b;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #dc2626;
  }
`;

// Form Container
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

  h3 {
    font-size: 20px;
    color: #1e293b;
    margin-bottom: 15px;
  }
`;

// Label
export const Label = styled.label`
  font-size: 16px;
  color: #1e293b;
  margin-bottom: 5px;
`;

// Input Fields
export const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #94a3b8;
  border-radius: 6px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #2563eb;
  }
`;

// Submit Button
export const Button = styled.button`
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
`;

// Select Dropdown
export const Select = styled.select`
  width: 90%;
  padding: 10px;
  margin: 8px 0;
  border-radius: 6px;
`;

// Checkbox Container
export const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;
