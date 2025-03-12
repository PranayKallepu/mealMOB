import { FaStar } from "react-icons/fa";
import {
  LinkItem,
  RestaurantItemCard,
  DetailsCard,
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

  return (
    <LinkItem to={`/restaurantItems/${_id}`}>
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
    </LinkItem>
  );
};

export default RestaurantCard;
