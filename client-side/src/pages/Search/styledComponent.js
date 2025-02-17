import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

// Search

export const SearchContainer = styled.div`
  margin: auto;
  width: 80%;
  max-width: 1110px;
`;

export const SearchInputCard = styled.div`
  border-radius: 10px;
  padding: 18px 30px;
  margin-top: 30px;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  background-color: #f1f5f9;
  color: #0f172a;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  outline: none;
  flex-grow: 1;
  padding: 12px 20px;
  transition: all 0.3s ease-in-out;

  ::placeholder {
    text-indent: 15px;
    color: #94a3b8;
    font-size: 15px;
  }
`;

export const SearchIcon = styled(BsSearch)`
  color: #1e293b;
  font-size: 22px;
  margin-left: -40px;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #2563eb;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px;
`;

export const ToggleButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin: 0 10px;
  border-radius: 8px;
  transition: all 0.3s ease;

  /* Default button styles */
  background-color: #ddd;
  color: #333;

  /* Apply active styles when button is selected */
  ${({ active }) =>
    active &&
    `
    background-color: #4CAF50;
    color: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  `}
`;

//Display Container
export const DisplayContainer = styled.div`
  height: 100vh;
  overflow-y: auto;
  margin: auto;
  width: 80%;
  padding: 10px;
  border-radius: 8px;
  background-color: #f8fafc;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

  /* Hide scrollbar for Chrome, Safari, and Edge */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: none;

  /* Hide scrollbar for IE/Edge */
  -ms-overflow-style: none;
`;
