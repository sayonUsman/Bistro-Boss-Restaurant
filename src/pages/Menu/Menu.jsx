import { Helmet } from "react-helmet-async";
import BackgroundCover from "../Shared/BackgroundCover/BackgroundCover";
import banner from "../../assets/menu/banner.jpg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <BackgroundCover img={banner}></BackgroundCover>
    </div>
  );
};

export default Menu;
