import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slide1 from "../../../assets/orderMenu//slide1.jpg";
import slide2 from "../../../assets/orderMenu//slide2.jpg";
import slide3 from "../../../assets/orderMenu//slide3.jpg";
import slide4 from "../../../assets/orderMenu//slide4.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const OrderMenu = () => {
  return (
    <section className="mt-10">
      <SectionTitle
        title={"ORDER ONLINE"}
        subTitle={"From 11.00am to 10.00pm"}
      ></SectionTitle>

      <Swiper
        slidesPerView={5}
        spaceBetween={25}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={slide1}
            alt="Menu Item"
            className="w-full rounded-md lg:rounded-xl"
          ></img>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={slide2}
            alt="Menu Item"
            className="w-full rounded-md lg:rounded-xl"
          ></img>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={slide3}
            alt="Menu Item"
            className="w-full rounded-md lg:rounded-xl"
          ></img>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={slide4}
            alt="Menu Item"
            className="w-full rounded-md lg:rounded-xl"
          ></img>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={slide1}
            alt="Menu Item"
            className="w-full rounded-md lg:rounded-xl"
          ></img>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={slide2}
            alt="Menu Item"
            className="w-full rounded-md lg:rounded-xl"
          ></img>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={slide3}
            alt="Menu Item"
            className="w-full rounded-md lg:rounded-xl"
          ></img>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={slide4}
            alt="Menu Item"
            className="w-full rounded-md lg:rounded-xl"
          ></img>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={slide1}
            alt="Menu Item"
            className="w-full rounded-md lg:rounded-xl"
          ></img>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={slide2}
            alt="Menu Item"
            className="w-full rounded-md lg:rounded-xl"
          ></img>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={slide3}
            alt="Menu Item"
            className="w-full rounded-md lg:rounded-xl"
          ></img>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={slide4}
            alt="Menu Item"
            className="w-full rounded-md lg:rounded-xl"
          ></img>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={slide1}
            alt="Menu Item"
            className="w-full rounded-md lg:rounded-xl"
          ></img>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={slide2}
            alt="Menu Item"
            className="w-full rounded-md lg:rounded-xl"
          ></img>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={slide3}
            alt="Menu Item"
            className="w-full rounded-md lg:rounded-xl"
          ></img>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={slide4}
            alt="Menu Item"
            className="w-full rounded-md lg:rounded-xl"
          ></img>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default OrderMenu;
