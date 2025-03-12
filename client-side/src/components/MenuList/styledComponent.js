import styled from "styled-components";

export const MenuListContainer = styled.div`
  margin: 0 10px 0 10px;
  h2 span {
    font-size: 24px;
    font-weight: 500;
    text-transform: capitalize;
    color: rgb(15, 112, 89);
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  .slick-prev,
  .slick-next {
    display: block !important;
  }

  .slick-prev::before,
  .slick-next::before {
    font-size: 24px;
    color: black;
  }
`;
export const Image = styled.img`
  width: 150px;
  position: relative;
  z-index: -10;
  @media screen and (max-width: 768px) {
    width: 100px;
  }
`;
