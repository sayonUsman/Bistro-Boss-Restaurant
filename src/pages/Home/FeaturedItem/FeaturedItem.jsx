import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredItem from "../../../assets/featured.jpg";

const FeaturedItem = () => {
  return (
    <div
      className="hero h-[845px] mt-16 lg:mt-20"
      style={{
        backgroundImage: `url(${featuredItem})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>

      <div className="text-white">
        <SectionTitle
          title={"FEATURED ITEM"}
          subTitle={"Check it Out"}
        ></SectionTitle>

        <div className="flex flex-col mx-auto md:flex-row items-center">
          <div className="md:flex justify-end w-1/2 md:ml-5 lg:md-0 md:mr-5">
            <img
              src={featuredItem}
              alt="Featured Item"
              className="w-96 rounded-md"
            />
          </div>

          <div className="w-1/2 text-center md:text-left text-neutral-content mt-7 md:mt-0 md:pl-5 md:pr-10">
            <p>May 20, 2023</p>
            <h3 className="text-lg">WHERE CAN I GET IT?</h3>

            <p className="lg:pr-24 xl:pr-36">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>

            <button className="mt-3 xl:mt-5 link-hover">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
