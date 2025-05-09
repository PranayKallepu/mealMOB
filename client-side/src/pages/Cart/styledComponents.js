import styled from "styled-components";

export const CartContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 10px 150px;
  }
`;

export const AddressBox = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  background-color: white;

  p {
    font-size: 14px;
  }

  p span {
    font-weight: 500;
    font-size: 14px;
  }
`;

export const CartSection = styled.div`
  align-items: center;
  gap: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
  background-color: white;
`;

export const RestaurantInfo = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
`;

export const RestaurantImage = styled.img`
  width: 100px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

export const CartContent = styled.div`
  flex: 2;
`;

export const CartItems = styled.div`
  flex: 2;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 8px;

  /* Optional scroll style */
  scrollbar-width: thin;
  scrollbar-color: #ccc transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  background-color: white;
  h5 {
    font-weight: 500;
    font-size: medium;
    max-width: 150px;
  }
`;

export const ItemDetails = styled.div`
  flex: 1;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid;
  padding: 2px 8px;
  gap: 10px;
  font-size: 20px;
  color: green;
  button {
    color: green;
    border: none;
    font-size: 20px;
    background: none;
    cursor: pointer;
  }
`;

export const BillDetails = styled.div`
  flex: 1;
  background: white;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ddd;
  max-height: 350px;
`;

export const BillItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

export const TotalItem = styled(BillItem)`
  font-weight: bold;
`;

export const SaveItem = styled(BillItem)`
  color: green;
`;

export const ProceedButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  background-color: #ff5722;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: rgb(244, 84, 35);
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const EmptyCartWrapper = styled.div`
  text-align: center;
  padding: 50px;

  button {
    margin-top: 10px;
    border: none;
    padding: 10px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    background-color: rgb(56, 141, 76);
  }
`;

export const EmptyCartImage = styled.img`
  width: 250px;
  height: auto;
  margin-bottom: 20px;
`;
