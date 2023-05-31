import { Link } from "react-router-dom";
import ItemCard from "../../components/ItemCard/ItemCard";
import MenuCard from "../../components/MenuCard/MenuCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";
import Banner from "./Banner/Banner";
import FeaturedItem from "./FeaturedItem/FeaturedItem";
import IdCard from "./IdCard/IdCard";
import OrderMenu from "./OrderMenu/OrderMenu";
import Testimonials from "./Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [menu] = useMenu();
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drink");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>

      <Banner></Banner>
      <OrderMenu></OrderMenu>
      <IdCard></IdCard>

      <SectionTitle
        title={"FROM OUR MENU"}
        subTitle={"Check it Out"}
      ></SectionTitle>

      <MenuCard items={drinks}></MenuCard>

      <Link to={`/menu`}>
        <button className="flex mx-auto btn rounded-md btn-outline border-0 border-b-4 border-[#ff9000] hover:bg-[#ff9000] mt-9 lg:mt-12">
          View Full Menu
        </button>
      </Link>

      <SectionTitle
        title={"CHEF RECOMMENDS"}
        subTitle={"Should Try"}
      ></SectionTitle>

      <div className="flex justify-center mt-10 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-12">
          {pizza.slice(1, 4).map((item) => (
            <ItemCard key={item._id} item={item}></ItemCard>
          ))}
        </div>
      </div>

      <FeaturedItem></FeaturedItem>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
