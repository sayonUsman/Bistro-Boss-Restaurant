import BeatLoader from "react-spinners/BeatLoader";

const Loader = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <BeatLoader
              color="#ff9000"
              size={25}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
