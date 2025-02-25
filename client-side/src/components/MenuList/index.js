import { menuList } from "../../utils/data";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cookies from "js-cookie";
import { MenuListContainer, ImageContainer, Image } from "./styledComponent";

const MenuList = () => {
  const username = Cookies.get("username");

  const settings = {
    infinite: false,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <MenuListContainer>
      <h2>{username}, what's on your mind?</h2>
      <ImageContainer>
        <Slider {...settings}>
          {menuList.map((eachItem, index) => (
            <div key={index}>
              <Link to={`/cuisines/${eachItem.cuisine}`}>
                <Image src={eachItem.item_img} alt={eachItem.cuisine} />
              </Link>
            </div>
          ))}
        </Slider>
      </ImageContainer>
    </MenuListContainer>
  );
};

export default MenuList;
