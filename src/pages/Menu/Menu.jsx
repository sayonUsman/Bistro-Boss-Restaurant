import { Helmet } from "react-helmet-async";
import BackgroundCover from "../Shared/BackgroundCover/BackgroundCover";
import banner from "../../assets/menu/banner.jpg";
import dessert from "../../assets/menu/dessert-bg.jpeg";
import pizza from "../../assets/menu/pizza-bg.jpg";
import salad from "../../assets/menu/salad-bg.jpg";
import soup from "../../assets/menu/soup-bg.jpg";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <BackgroundCover
        img={banner}
        title={"OUR MENU"}
        subTitle={"WOULD YOU LIKE TO TRY A DISH?"}
      ></BackgroundCover>

      <MenuCategory
        img={dessert}
        title={"DESSERTS"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>

      <MenuCategory
        img={pizza}
        title={"PIZZA"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>

      <MenuCategory
        img={salad}
        title={"SALADS"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>

      <MenuCategory
        img={soup}
        title={"SOUPS"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
    </div>
  );
};

export default Menu;
