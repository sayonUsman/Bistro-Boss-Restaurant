import bg from "../../assets/bg.png";
import authImg from "../../assets/auth-img.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { createNewUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (user) => {
    createNewUser(user.email, user.password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div
      className="hero min-h-screen bg-fixed"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="hero-content flex-col">
        <div className="hero w-9/12 lg:w-[925px] rounded-lg shadow-lg shadow-zinc-900">
          <div className="hero-content flex-col lg:flex-row">
            <div className="lg:w-9/12">
              <img src={authImg} alt="Image" />
            </div>

            <form
              className="card rounded-lg flex-shrink-0 w-full max-w-sm"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>

                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="name"
                  id="name"
                  className="input input-bordered"
                />

                {errors.name && (
                  <span className="text-red-500 pl-2">Name is required.</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>

                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  id="email"
                  className="input input-bordered"
                />

                {errors.email && (
                  <span className="text-red-500 pl-2">Email is required.</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <input
                  type="password"
                  {...register("password", { required: true, minLength: 6 })}
                  placeholder="password"
                  id="password"
                  className="input input-bordered"
                />

                {errors.password?.type === "required" && (
                  <span className="text-red-500 pl-2">
                    Password is required.
                  </span>
                )}

                {errors.password?.type === "minLength" && (
                  <span className="text-red-500 pl-2">
                    Password must be 6 characters.
                  </span>
                )}
              </div>

              <div className="form-control mt-10">
                <input
                  className="btn bg-[#D1A054]"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="text-center mt-10 lg:mt-14">
          <p className="mb-2">
            Already registered?{" "}
            <span>
              <Link to="/login" className="link link-hover">
                Go to the Login
              </Link>
            </span>
          </p>

          <Link to="/" className="link link-hover">
            Back to Home
          </Link>
        </div>
      </div>

      {errorMessage && (
        <div className="toast toast-end">
          <div className="alert alert-error">
            <div>
              <span>{errorMessage}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;