import styled from "styled-components";

export const FoodItem = styled.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  &:last-child {
    border-bottom: none; /* Removes border for the last item */
  }
`;

export const FoodDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 1;
  h3 {
    font-weight: 500;
    font-size: 22px;
  }
  h4 {
    font-weight: 500;
  }
  h4 span {
    font-weight: 300;
  }
  @media screen and (max-width: 768px) {
    h3 {
      font-size: 16px;
    }
  }
`;

export const FoodHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Category = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 10px;
  width: 50px;
  background-color: ${(props) =>
    props.isVeg ? "rgba(74, 206, 17, 0.82)" : "rgba(247, 3, 3, 0.77);"};
`;

export const FoodImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  img {
    width: 130px;
    height: 130px;
    border-radius: 10px;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 80px;
      height: 80px;
    }
  }
`;

export const AddButtonCard = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid gray;
  border-radius: 6px;
  text-align: center;
  width: 80%;
  padding: 5px;
  margin-top: -40px;
  background-color: white;
  color: green;
  cursor: pointer;
  button {
    cursor: pointer;
    font-weight: 500;
  }
`;

export const ReadMoreButton = styled.button`
  cursor: pointer;
  font-weight: bold;
  margin-left: 5px;
  border: none;
  background: none;
  font-size: 12px;
  &:hover {
    text-decoration: underline;
  }
`;
