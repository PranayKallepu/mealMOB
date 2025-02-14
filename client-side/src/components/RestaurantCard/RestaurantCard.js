import { API_URL } from "../../utils/data";
import { FaStar } from "react-icons/fa";
import { LinkItem, RestaurantItem, Offer, Rating } from "./styledComponent";

const RestaurantCard = ({ restaurantData }) => {
  if (!restaurantData) return null;

  const { restaurantName, restaurantImage, rating, cuisines, offer, area, _id } =
    restaurantData;
  // Normalize image path (replace backslashes with forward slashes)
  const imageUrl = `${API_URL}/${restaurantImage.replace(/\\/g, "/")}`;

  return (
    <LinkItem to={`/restaurantItems/${_id}`}>
      <RestaurantItem>
        <img src={imageUrl} alt={restaurantName} />
        <Offer>{offer}</Offer>
        <div>
          <h3>{restaurantName}</h3>
          <Rating>
            {rating}+ <FaStar />
          </Rating>
        </div>
        <div>
          {cuisines.map((cuisine, index) => {
            const lastCuisine = index === cuisines.length - 1;
            return (
              <p key={cuisine}>
                {cuisine}
                {lastCuisine ? "" : ","}
              </p>
            );
          })}
        </div>
        <p>{area}</p>
      </RestaurantItem>
    </LinkItem>
  );
};

export default RestaurantCard;
