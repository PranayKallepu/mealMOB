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
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  h2 {
    color: #333;
    margin-bottom: 20px;
  }
`;

export const OrderCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
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
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  h4 {
    color: #333;
    margin: 0 0 10px;
  }

  p {
    margin: 5px 0;
    color: #666;
  }
`;

export const StatusSelect = styled.select`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  color: #333;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

export const OrderItems = styled.div`
  h4 {
    margin-bottom: 15px;
  }
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
