import bg from "../../../../assets/bg.png";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const TestimonialCard = ({ review }) => {
  return (
    <div
      className="hero h-[425px] sm:rounded-lg mb-16"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="sm:w-9/12 lg:w-1/2 sm:h-5/6 hero-overlay bg-opacity-60 sm:rounded-lg"></div>

      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <div className="flex justify-center">
            <Rating style={{ maxWidth: 125 }} value={review.rating} readOnly />
          </div>

          <p className="mt-1 text-xl lg:text-2xl">{review.name}</p>
          <p className="mt-3 text-justify">{review.details}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
