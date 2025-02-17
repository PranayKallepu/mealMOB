import { API_URL } from "../../utils/data";
import { FaStar } from "react-icons/fa";
import {
  LinkItem,
  RestaurantItemCard,
  RestaurantName,
  CuisineCard,
  Offer,
  Rating,
} from "./styledComponent";

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
  // Normalize image path (replace backslashes with forward slashes)

  return (
    <LinkItem to={`/restaurantItems/${_id}`}>
      <RestaurantItemCard>
        <img src={restaurantImage} alt={restaurantName} />
        <Offer>{offer}</Offer>
        <RestaurantName>
          <h3>{restaurantName}</h3>
          <Rating>
            {rating}+ <FaStar />
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
      </RestaurantItemCard>
    </LinkItem>
  );
};

export default RestaurantCard;
