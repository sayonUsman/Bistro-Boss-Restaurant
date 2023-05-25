const BackgroundCover = ({ img }) => {
  return (
    <div
      className="hero h-[725px]"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">OUR MENU</h1>
          <p className="mb-5">WOULD YOU LIKE TO TRY A DISH?</p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundCover;
