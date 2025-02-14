import styled from "styled-components";

//Rating
export const RatingHeading = styled.h1`
color: #12022f;
font-size: 18px;
font-weight: 700;
margin-top: 32px;
margin-bottom: 18px;
`;

export const RatingsList = styled.ul`
padding-left: 0;
`;

export const RatingItem = styled.li`
display: flex;
align-items: center;
margin-bottom: 12px;
cursor: pointer;
p {
  color: ${(props) => (props.$isActive ? "#0967d2" : "#64748b")};
  font-size: 16px;
  font-weight: ${(props) => props.$isActive && "bold"};
  margin-left: 10px;
  margin-bottom: 0;
  margin-top: 0;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-left: 14px;
  }
}
`;

export const RatingImage = styled.img`
max-width: 152px;
height: 20px;
@media screen and (min-width: 768px) {
  height: 24px;
}
`;
// Clear Filter Button
export const ClearFilterButton = styled.button`
  background-color: #ffffff;
  color: #0967d2;
  font-size: 10px;
  font-weight: 700;
  border-radius: 4px;
  border: 1px solid #0967d2;
  padding: 8px 12px;
  margin-top: 16px;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    padding: 8px 20px;
    margin-top: 32px;
  }
`;

export const FilterButton = styled.button`
  width: 70px;
  border: 1px solid gray;
  border-radius: 8px;
  background-color:rgba(236, 241, 243, 0.7);
  cursor: pointer;
`;