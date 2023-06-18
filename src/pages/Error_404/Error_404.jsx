import { Link } from "react-router-dom";
import bg from "../../assets/404.gif";

const Error_404 = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 p-3 lg:p-5 text-3xl lg:text-5xl bg-black text-white font-bold rounded-md lg:rounded-xl">
            Page Not Found
          </h1>

          <Link to="/" className="btn bg-black text-white">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error_404;
