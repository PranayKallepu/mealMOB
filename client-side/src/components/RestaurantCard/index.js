import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  LinkItem,
  RestaurantItemCard,
  DetailsCard,
  RestaurantName,
  CuisineCard,
  Offer,
  Rating,
} from "./styledComponent";

// Define animation variants for the card: Scale + Fade
const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8, // Start scaled down
  },
  visible: {
    opacity: 1,
    scale: 1, // Animate to full scale
    transition: {
      duration: 0.4, // Slightly faster duration
      ease: [0.6, -0.05, 0.01, 0.99], // Example of a custom cubic bezier easing for a nice effect
    },
  },
};

const RestaurantCard = ({ restaurantData }) => {
  if (!restaurantData) return null;

  const {
    restaurantName,
    restaurantImage,
    rating,
    cuisines,
    offer,
    area,
    _id,
  } = restaurantData;

  return (
    <LinkItem to={`/restaurantItems/${_id}`}>
      <motion.div
        variants={cardVariants}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
        }} // Increased scale and shadow slightly more on hover
        transition={{ type: "spring", stiffness: 300, damping: 10 }} // Spring for hover effect
      >
        <RestaurantItemCard>
          <img src={restaurantImage} alt={restaurantName} />
          <Offer isOffer={offer.length > 0}>{offer}</Offer>
          <DetailsCard>
            <RestaurantName>
              <h3>{restaurantName}</h3>
              <Rating>
                <p>
                  <FaStar />
                </p>
                {rating}+
              </Rating>
            </RestaurantName>
            <CuisineCard>
              {cuisines.map((cuisine, index) => {
                const lastCuisine = index === cuisines.length - 1;
                return (
                  <p key={cuisine}>
                    {cuisine}
                    {lastCuisine ? "" : ","}
                  </p>
                );
              })}
            </CuisineCard>
            <p>{area}</p>
          </DetailsCard>
        </RestaurantItemCard>
      </motion.div>
    </LinkItem>
  );
};

export default RestaurantCard;
