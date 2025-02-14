import styled from "styled-components";

export const MenuListContainer = styled.div`
  margin: 0px 150px;
`;
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  .slick-prev,
  .slick-next {
    display: block !important;
    z-index: 10;
  }

  .slick-prev::before,
  .slick-next::before {
    font-size: 24px;
    color: black;
  }
`;
export const Image = styled.img`
  width: 150px;
`;
