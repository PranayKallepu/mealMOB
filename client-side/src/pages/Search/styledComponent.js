import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

// Search

export const SearchContainer = styled.div`
  margin: auto;
  width: 80%;
  max-width: 1110px;
`;

export const SearchInputCard = styled.div`
  display: flex;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 15px 16px;
  text-decoration: none;
  margin-top: 30px;
`;

export const SearchInput = styled.input`
  color: #0f172a;
  font-size: 14px;
  font-weight: 500;
  border: none;
  outline: none;
  flex-grow: 1;
  &::placeholder {
    text-decoration: none;
    font-style: normal;
  }

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

  /* Hide scrollbar for Chrome, Safari, and Edge */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: none;

  /* Hide scrollbar for IE/Edge */
  -ms-overflow-style: none;
`;
