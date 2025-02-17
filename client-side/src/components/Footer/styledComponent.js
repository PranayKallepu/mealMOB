import styled from "styled-components";

export const FooterSection = styled.footer`
  padding: 20px;
  background-color: rgb(238, 233, 233);
  color: gray;
  text-align: center;
  margin-top: auto; /* Ensures it stays at the bottom */

  h2 {
    color: black;
    margin-bottom: 15px;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const DetailsCard = styled.div`
  flex: 1;
  min-width: 200px; /* Prevents too small items on small screens */
  max-width: 250px;
  margin: 10px;
  text-align: left;

  ul {
    padding: 0;
  }

  ul li {
    list-style: none;
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

export const SocialIcons = styled.div`
  margin-top: 15px;

  div {
    display: flex;
    justify-content: center;
    gap: 15px;
    padding-top: 10px;
  }

  a {
    font-size: 20px;
    color: gray;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: black;
    }
  }
`;
