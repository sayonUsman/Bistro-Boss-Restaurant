import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from "../../../assets/banner/slide-01.jpg";
import slide2 from "../../../assets/banner/slide-02.jpg";
import slide3 from "../../../assets/banner/slide-03.png";
import slide4 from "../../../assets/banner/slide-04.jpg";
import slide5 from "../../../assets/banner/slide-05.png";
import slide6 from "../../../assets/banner/slide-06.png";

const Banner = () => {
  return (
    <Carousel autoPlay infiniteLoop interval={4000}>
      <div>
        <img src={slide1} alt="Slider Image" />
      </div>

      <div>
        <img src={slide2} alt="Slider Image" />
      </div>

      <div>
        <img src={slide3} alt="Slider Image" />
      </div>

      <div>
        <img src={slide4} alt="Slider Image" />
      </div>

      <div>
        <img src={slide5} alt="Slider Image" />
      </div>

      <div>
        <img src={slide6} alt="Slider Image" />
      </div>
    </Carousel>
  );
};

export default Banner;
