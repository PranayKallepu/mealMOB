// styledComponent.js
import styled from "styled-components";

export const CartItemContainer = styled.li`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0px 4px 16px 0px #7e858e29;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    padding: 24px 48px 24px 36px;
  }
`;

export const ProductImage = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 4px;
`;

export const CartItemDetailsContainer = styled.div`
  margin-left: 16px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
  }
`;

export const ProductTitleBrandContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 250px;
  }
`;

export const ProductTitle = styled.p`
  color: #171f46;
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 500;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ProductBrand = styled.p`
  color: #64748b;
  font-family: "Roboto";
  font-size: 10px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityControllerButton = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const Quantity = styled.p`
  color: #52606d;
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 500;
  margin: 8px;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin: 0 16px;
  }
`;

export const TotalPriceDeleteContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TotalPrice = styled.p`
  color: #0b69ff;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  min-width: 100px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  color: #334155;
  font-family: "Roboto";
  font-size: 10px;
  line-height: 16px;
  border: none;
  outline: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 32px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
