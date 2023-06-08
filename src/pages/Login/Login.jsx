import bg from "../../assets/bg.png";
import authImg from "../../assets/auth-img.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useContext, useRef, useState } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  useEffect(() => loadCaptchaEnginge(6), []);
  const { loginWithEmailAndPassword } = useContext(AuthContext);
  const captchaRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [errorMessage, setErrorMessage] = useState("");
  const [isDisabled, SetIsDisabled] = useState(true);

  const verifyCaptcha = (event) => {
    const user_captcha_value = captchaRef.current.value;
    setErrorMessage("");

    if (validateCaptcha(user_captcha_value)) {
      SetIsDisabled(false);
    } else {
      SetIsDisabled(true);
      setErrorMessage("Captcha validation failed.");
    }

    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setErrorMessage("");

    loginWithEmailAndPassword(email, password)
      .then(() => {
        form.reset();
        SetIsDisabled(true);
        navigate(from, { replace: true });

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged in has been done successfully",
          showConfirmButton: true,
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
        SetIsDisabled(true);
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
              onSubmit={handleSubmit}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>

                <input
                  type="email"
                  placeholder="email"
                  id="email"
                  required
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <input
                  type="password"
                  placeholder="password"
                  id="password"
                  required
                  className="input input-bordered"
                />

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control">
                <label className="label mb-3">
                  <LoadCanvasTemplate />
                </label>

                <input
                  type="text"
                  ref={captchaRef}
                  placeholder="Type the captcha here"
                  id="captcha"
                  required
                  className="input input-bordered"
                />

                {isDisabled && (
                  <label className="label label-text-alt">
                    To Verify Your Captcha
                    <button
                      className="link link-hover text-red-500"
                      onClick={verifyCaptcha}
                    >
                      Click Here
                    </button>
                  </label>
                )}
              </div>

              <div className="form-control mt-10">
                <input
                  className="btn bg-[#D1A054]"
                  type="submit"
                  value="Login"
                  disabled={isDisabled}
                />
              </div>
            </form>
          </div>
        </div>

        <div className="text-center mt-10 lg:mt-14">
          <p className="mb-2">
            New here?{" "}
            <span>
              <Link to="/signUp" className="link link-hover">
                Create a New Account
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

export default Login;
