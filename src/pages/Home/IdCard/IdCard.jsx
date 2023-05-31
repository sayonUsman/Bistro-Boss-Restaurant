import bg from "../../../assets/id-bg.jpg";

const IdCard = () => {
  return (
    <div
      className="hero h-[575px] mt-12 lg:mt-16"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="sm:w-9/12 h-64 sm:h-48 lg:h-72 hero-overlay bg-opacity-60"></div>

      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-2 lg:mb-4 text-xl  md:text-2xl 2xl:text-3xl font-bold">
            BISTRO BOSS
          </h1>

          <p className="mb-5 text-sm text-justify">
            Bistro Boss’s is a cozy and casual restaurant that serves delicious
            and affordable dishes from around the world. Whether you crave for
            salads, pizza, soup, or desserts, you can find it here. Bistro
            Boss’s also offers vegetarian, vegan, and gluten-free options to
            cater to different dietary needs. Come and enjoy the friendly
            service, the relaxing atmosphere, and the mouth-watering food at
            Bistro Boss’s!
          </p>
        </div>
      </div>
    </div>
  );
};

export default IdCard;
