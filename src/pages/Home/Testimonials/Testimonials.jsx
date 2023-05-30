import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://bistro-boss-restaurant-two.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <>
      <SectionTitle
        title={"TESTIMONIALS"}
        subTitle={"What Our Clients Say"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <TestimonialCard review={review}></TestimonialCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonials;
