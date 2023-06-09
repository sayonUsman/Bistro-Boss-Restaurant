import bg from "../../assets/bg.png";
import authImg from "../../assets/auth-img.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getAuth, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { IconContext } from "react-icons";
import { FcGoogle } from "react-icons/Fc";

const SignUp = () => {
  const { createNewUser, loginWithGoogle } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (newUser) => {
    createNewUser(newUser.email, newUser.password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: newUser.name,
          photoURL: newUser.url,
        })
          .then(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Welcome.",
              text: "Your account has been created successfully.",
              showConfirmButton: true,
              timer: 2000,
            });

            navigate("/");
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });

    reset();
  };

  const handleGoogleLogin = () => {
    setErrorMessage("");

    loginWithGoogle()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Welcome.",
          text: "Logged in has been done successfully.",
          showConfirmButton: true,
          timer: 2000,
        });

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
      <div className="hero-content flex-col text-black">
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
                  className="input input-bordered bg-white"
                />

                {errors.name && (
                  <span className="text-red-500 pt-1 pl-1">
                    Name is required.
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile Picture</span>
                </label>

                <input
                  type="url"
                  {...register("url")}
                  placeholder="photo url"
                  className="input input-bordered bg-white"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>

                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered bg-white"
                />

                {errors.email && (
                  <span className="text-red-500 pt-1 pl-1">
                    Email is required.
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered bg-white"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                  })}
                />

                {errors.password?.type === "required" && (
                  <span className="text-red-500 pt-1 pl-1">
                    Password is required.
                  </span>
                )}

                {errors.password?.type === "minLength" && (
                  <span className="text-red-500 pt-1 pl-1">
                    Password must be six characters.
                  </span>
                )}

                {errors.password?.type === "pattern" && (
                  <span className="text-red-500 pt-1 pl-1">
                    Password must have at least one capital letter and one
                    special character.
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

        <p className="mt-5 text-center text-xl">
          Or
          <br />
          Continue With
        </p>

        <IconContext.Provider value={{ size: "45px" }}>
          <div className="flex mx-auto mt-3">
            <button
              className="btn btn-circle bg-transparent"
              onClick={handleGoogleLogin}
            >
              <FcGoogle></FcGoogle>
            </button>
          </div>
        </IconContext.Provider>

        <div className="text-center mt-5">
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
