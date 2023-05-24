import Banner from "./Banner/Banner";
import FeaturedItem from "./FeaturedItem/FeaturedItem";
import OrderMenu from "./OrderMenu/OrderMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <div className="mb-10">
        <OrderMenu></OrderMenu>
      </div>

      <FeaturedItem></FeaturedItem>
    </div>
  );
};

export default Home;
