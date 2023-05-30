import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

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
            <div className="text-center">
              <div className="flex justify-center">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
              </div>

              <p className="mt-4 text-3xl text-[#CD9003]">{review.name}</p>

              <div className="sm:w-9/12 h-24 overflow-y-auto mx-auto mt-3 mb-16 lg:mb-20 px-7 md:px-0">
                <div className="hero-content">
                  <p className="text-justify">{review.details}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonials;
