import Banner from "./Banner/Banner";
import FeaturedItem from "./FeaturedItem/FeaturedItem";
import OrderMenu from "./OrderMenu/OrderMenu";
import Testimonials from "./Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>

      <Banner></Banner>
      <OrderMenu></OrderMenu>
      <FeaturedItem></FeaturedItem>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
