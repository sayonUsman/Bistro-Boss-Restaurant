const BackgroundCover = ({ img }) => {
  return (
    <div
      className="hero h-[725px]"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="w-9/12 h-48 lg:h-72 hero-overlay bg-opacity-60"></div>

      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-2 lg:mb-4 text-4xl lg:text-5xl font-bold">
            OUR MENU
          </h1>

          <p className="mb-5 text-sm">WOULD YOU LIKE TO TRY A DISH?</p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundCover;
