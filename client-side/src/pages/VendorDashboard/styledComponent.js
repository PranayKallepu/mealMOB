import styled from "styled-components";

export const BackgroundContainer = styled.div`
  position: absolute;
  left: 0;
  background-image: url("https://img.freepik.com/premium-photo/food-stall-night-with-food-vendor-background_808092-1735.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  z-index: -1;
  filter: blur(4px);
  @media screen and (max-width: 786px) {
    background-image: url("https://img.freepik.com/premium-photo/food-stall-night-with-food-vendor-background_808092-1735.jpg");
  }
`;
export const DashboardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  h2 {
    margin-bottom: 50px;
  }
`;

export const OrdersContainer = styled.div`
  max-height: 80vh;
  overflow-y: auto;
  scroll-behavior: smooth;
  padding-right: 0.5rem;

  /* Optional scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
  width: 100%;
  h2 {
    color: #333;
    margin-bottom: 20px;
  }
  @media (min-width: 768px) {
    padding: 0px 20px;
  }
`;

export const OrderCard = styled.div`
  background-color: white;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  h3 {
    margin: 0;
    color: #333;
  }

  p {
    margin: 5px 0 0;
    color: #666;
    font-size: 14px;
  }
`;

export const OrderDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 5px 10px;
  background-color: aliceblue;
  h3 {
    font-weight: 500;
  }
  p {
    font-size: 14px;
    font-weight: 500;
  }
  span {
    font-size: 11px;
  }
`;

export const ItemsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

export const ItemRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 10px;
  padding: 8px 0;
  border-bottom: ${(props) => (props.total ? "none" : "1px solid #eee")};
  font-weight: ${(props) => (props.total ? "bold" : "normal")};
  margin-top: ${(props) => (props.total ? "15px" : "0")};

  span {
    color: #666;
  }
`;

export const ButtonsCard = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 10px;

  button {
    padding: 6px 8px;
    font-size: 13px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
`;

export const CancelButton = styled.button`
  background-color: #dc3545;
  color: white;

  &:hover {
    background-color: #b02a37;
  }
`;

export const AcceptButton = styled.button`
  background-color: #28a745;
  color: white;

  &:hover {
    background-color: #1e7e34;
  }
`;

export const StatusSelect = styled.select`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  color: #ff5722;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #ff5722;
  }
  option {
  }
`;

export const OrderItems = styled.div`
  h4 {
    margin-bottom: 15px;
  }
`;

export const NoOrders = styled.div`
  text-align: center;
  padding: 40px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    color: #333;
    margin-bottom: 10px;
  }

  p {
    color: #666;
  }
`;

export const OrderIdContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CopyButton = styled.button`
  padding: 2px;
  font-size: 18px;
  cursor: pointer;
  color: gray;
  border: none;
  background: none;
  border-radius: 4px;

  &:hover {
    background-color: #ccc;
    border-radius: 50%;
    color: black;
  }
`;
