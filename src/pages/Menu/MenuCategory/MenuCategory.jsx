import { Link } from "react-router-dom";
import MenuCard from "../../../components/MenuCard/MenuCard";

const MenuCategory = ({ img, title, subTitle, items }) => {
  return (
    <div>
      <div
        className="hero h-[625px] rounded-t-lg"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="w-9/12 h-48 lg:h-72 hero-overlay bg-opacity-60"></div>

        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-2 lg:mb-4 text-4xl lg:text-5xl font-bold">
              {title}
            </h1>

            <p className="mb-5 text-sm">{subTitle}</p>
          </div>
        </div>
      </div>

      <MenuCard items={items}></MenuCard>

      <Link to={`/order/${title}`}>
        <button className="flex mx-auto btn rounded-md btn-outline border-0 border-b-4 border-[#ff9000] hover:bg-[#ff9000] mt-5 lg:mt-7 mb-14 md:mb-16">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
