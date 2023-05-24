import Banner from "./Banner/Banner";
import FeaturedItem from "./FeaturedItem/FeaturedItem";
import OrderMenu from "./OrderMenu/OrderMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OrderMenu></OrderMenu>
      <FeaturedItem></FeaturedItem>
    </div>
  );
};

export default Home;
