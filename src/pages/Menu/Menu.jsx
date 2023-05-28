import { Helmet } from "react-helmet-async";
import BackgroundCover from "../Shared/BackgroundCover/BackgroundCover";
import banner from "../../assets/menu/banner.jpg";
import dessert from "../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../assets/menu/pizza-bg.jpg";
import salad from "../../assets/menu/salad-bg.jpg";
import soup from "../../assets/menu/soup-bg.jpg";
import MenuCategory from "./MenuCategory/MenuCategory";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCard from "../../components/MenuCard/MenuCard";

const Menu = () => {
  const [menu] = useMenu();
  const salads = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drink");

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

      <SectionTitle
        title={"TODAY'S OFFER"}
        subTitle={"Don't miss"}
      ></SectionTitle>

      <div className="mb-20">
        <MenuCard items={drinks}></MenuCard>
      </div>

      <MenuCategory
        img={salad}
        title={"SALADS"}
        items={salads}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>

      <MenuCategory
        img={pizzaBg}
        title={"PIZZA"}
        items={pizza}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>

      <MenuCategory
        img={soup}
        title={"SOUPS"}
        items={soups}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>

      <MenuCategory
        img={dessert}
        title={"DESSERTS"}
        items={desserts}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
    </div>
  );
};

export default Menu;
