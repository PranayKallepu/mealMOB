import styled from "styled-components";

// ✅ Responsive Main Container
export const MainContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  height: 100vh;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 95%;
    padding: 15px;
  }
`;

// ✅ Search Input - Responsive
export const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 14px;
  outline: none;
  transition: 0.3s;
  display: block;
  margin-left: auto;
  margin-right: auto;

  &:focus {
    border-color: #007bff;
  }

  @media (max-width: 768px) {
    width: 90%;
    max-width: none;
  }
`;

// ✅ Table Wrapper (for mobile scroll)
export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto; // Enables horizontal scrolling on small screens
  border-radius: 10px;
`;

// ✅ Responsive Table
export const StyledTable = styled.table`
  width: 100%;
  min-width: 600px;
  border-collapse: collapse;
  margin-top: 10px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

  th,
  td {
    padding: 12px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }

  th {
    background: #007bff;
    color: white;
    font-weight: bold;
  }

  td img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  tr:hover {
    background-color: #f5f5f5;
  }

  .deleteBtn {
    background: #ff4d4d;
    color: white;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: #cc0000;
    }
  }

  @media (max-width: 768px) {
    th,
    td {
      padding: 8px;
      font-size: 14px;
    }

    td img {
      width: 40px;
      height: 40px;
    }

    .deleteBtn {
      padding: 4px 8px;
      font-size: 12px;
    }
  }
`;

export const NoFoodCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
  p{
    margin-bottom: 10px;
  }
`;
