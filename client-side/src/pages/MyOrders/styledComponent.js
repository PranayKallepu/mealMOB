// MyOrdersStyles.js
import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  animation: fadeIn 0.6s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const SearchInput = styled.input`
  padding: 0.7rem 1rem;
  flex: 1;
  border-radius: 10px;
  border: 1px solid #ccc;
  transition: all 0.3s ease;
  &:focus {
    border-color: #333;
    outline: none;
  }
`;

export const StatusDropdown = styled.select`
  padding: 0.7rem 1rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  transition: all 0.3s ease;
  &:focus {
    border-color: #333;
    outline: none;
  }
`;

export const OrderLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const OrderCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.07);
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.01);
  }
`;

export const OrderImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
`;

export const OrderDetails = styled.div`
  flex: 1;
`;

export const OrderStatus = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
`;

export const OrderName = styled.p`
  font-size: 1.1rem;
`;

export const OrderActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CancelButton = styled.button`
  background-color: orange;
  color: white;
  border: none;
  padding: 0.5rem 0.9rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: darkorange;
  }
`;

export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: red;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const NoOrder = styled.div`
  text-align: center;
  margin-top: 2rem;

  h2 {
    margin-bottom: 1rem;
  }

  button {
    padding: 0.7rem 1.2rem;
    background-color: #007bff;
    color: #fff;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const LoadingText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-size: 1.2rem;
`;
