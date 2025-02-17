import { styled } from "styled-components";
import { BsSearch } from "react-icons/bs";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1; /* Pushes footer down */
  margin: auto;
  padding: 20px;
  width: 90%;
  max-width: 1110px;
`;

export const SearchContainer = styled.div`
  text-align: center;
  padding-bottom: 10px;
`;

export const SearchInputContainer = styled.div`
  display: flex;
  background-color: #f1f5f9;
  border-radius: 8px;
  padding: 15px 16px;
  margin: 0px 300px;
  text-decoration: none;
`;
export const SearchInput = styled.input`
  background-color: #f1f5f9;
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
`;

export const SearchIcon = styled(BsSearch)`
  color: #0f172a;
  font-size: 20px;
`;
