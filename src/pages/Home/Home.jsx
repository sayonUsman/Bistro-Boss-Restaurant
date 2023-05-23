import Banner from "./Banner/Banner";
import OrderMenu from "./OrderMenu/OrderMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <div className="mb-10">
        <OrderMenu></OrderMenu>
      </div>
    </div>
  );
};

export default Home;
