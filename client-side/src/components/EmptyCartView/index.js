import { Link } from "react-router-dom";

import { Container, Image, Heading, Button } from "./styledComponent";

const EmptyCartView = () => (
  <Container>
    <Image
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
      alt="cart empty"
    />
    <Heading>Your Cart Is Empty</Heading>

    <Link to="/">
      <Button>Order Now</Button>
    </Link>
  </Container>
);

export default EmptyCartView;
