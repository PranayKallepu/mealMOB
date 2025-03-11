import { Link } from "react-router-dom";

import { Container, Image, Heading, Button } from "./styledComponent";

const EmptyCartView = () => (
  <Container>
    <Image
      src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png"
      alt="cart empty"
    />
    <Heading>Your Cart Is Empty</Heading>
    <p>You can go to home page to view more restaurants</p>
    <Link to="/">
      <Button>Order Now</Button>
    </Link>
  </Container>
);

export default EmptyCartView;
