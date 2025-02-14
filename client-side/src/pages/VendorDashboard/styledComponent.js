import styled from "styled-components";

export const BackgroundContainer = styled.div`
position: absolute;
  left: 0;
  background-image: url('https://img.freepik.com/premium-photo/food-stall-night-with-food-vendor-background_808092-1735.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  z-index: -1;
  filter: blur(4px);
  @media screen and (max-width: 786px) {
    background-image: url('https://img.freepik.com/premium-photo/food-stall-night-with-food-vendor-background_808092-1735.jpg');
  }
`
export const DashboardDetails = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 90vh;
h2{
  margin-bottom: 50px;
}
`