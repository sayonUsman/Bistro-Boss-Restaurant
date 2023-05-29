import bg from "../../assets/bg.png";
import authImg from "../../assets/auth-img.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";

const Login = () => {
  useEffect(() => loadCaptchaEnginge(6), []);
  const captchaRef = useRef(null);
  const [isDisabled, SetIsDisabled] = useState(true);

  const verifyCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;

    if (validateCaptcha(user_captcha_value)) {
      SetIsDisabled(false);
    } else {
      SetIsDisabled(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
  };

  return (
    <div>
      <div
        className="hero min-h-screen bg-fixed"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
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
                      onClick={() => verifyCaptcha()}
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
      </div>
    </div>
  );
};

export default Login;
