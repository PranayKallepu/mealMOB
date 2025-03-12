import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 20px;
  height: 300px;
  border-radius: 10px;
  text-align: center;
`;

export const PopupContainer = styled.div`
  align-items: center;
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  border: 1px solid;
  background-color: #ffffff;
`;

export const FilterButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Dropdown = styled.select`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`;

export const RatingContainer = styled.div`
  margin: 15px 0;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const RatingButton = styled.button`
  background: ${(props) => (props.selected ? "#ffcc00" : "#eee")};
  border: none;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #ffcc00;
  }
`;

export const PopupActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const ButtonApply = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

export const ClearFilterButton = styled.button`
  background: #dc3545;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #c82333;
  }
`;
