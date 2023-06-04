import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../authProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut, loggedInUser } = useContext(AuthContext);
  const userDetails = loggedInUser();

  const handleLogOut = () => {
    logOut()
      .than(() => {})
      .catch(() => {});
  };

  const navbarContent = (
    <>
      <li>
        <NavLink to="/" className="mb-1 lg:mb-0 lg:mr-1 link link-hover">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard"
          className="mb-1 lg:mb-0 lg:mr-1 link link-hover"
        >
          Dashboard
        </NavLink>
      </li>

      <li>
        <NavLink to="/menu" className="mb-1 lg:mb-0 lg:mr-1 link link-hover">
          Our Menu
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/order/SALADS"
          className="mb-1 lg:mb-0 lg:mr-1 link link-hover"
        >
          Order
        </NavLink>
      </li>

      <li>
        <NavLink to="/contact" className="mb-1 lg:mb-0 lg:mr-1 link link-hover">
          Contact
        </NavLink>
      </li>

      {user ? (
        <li>
          <NavLink
            to="/login"
            onClick={handleLogOut}
            className="link link-hover"
          >
            Log Out
          </NavLink>
        </li>
      ) : (
        <li>
          <NavLink to="/login" className="link link-hover">
            Login
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="container navbar fixed z-10 bg-black bg-opacity-50 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost xl:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black bg-opacity-50 rounded w-52"
          >
            {navbarContent}
          </ul>
        </div>

        <a className="btn btn-ghost normal-case text-xl">
          Bistro Boss Restaurant
        </a>
      </div>

      <div className="navbar-center hidden xl:flex">
        <ul className="menu menu-horizontal px-1">{navbarContent}</ul>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end mr-3 md:mr-4">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">0</span>
            </div>
          </label>

          <div
            tabIndex={0}
            className="mt-3 card rounded-md card-compact dropdown-content w-52 bg-black bg-opacity-50 text-white"
          >
            <div className="card-body">
              <span className="font-bold text-lg">0 Items</span>
              <span className="text-info">Subtotal: $00</span>

              <div className="text-center">
                <Link to="/dashboard/cart" className="link link-hover">
                  View cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {user && (
        <div className="dropdown dropdown-end mr-3 md:mr-4">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar online"
          >
            <div className="rounded-full">
              <img
                src={
                  userDetails[2]
                    ? userDetails[2]
                    : "https://img.freepik.com/free-vector/hand-drawn-coconut-illustration_23-2148160083.jpg?w=826&t=st=1685442440~exp=1685443040~hmac=f375ed00db010995d113408e9a3f685e87616a91ce07cf3ed521b21ba1a13b2a"
                }
              />
            </div>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black bg-opacity-50 rounded-md w-52"
          >
            <li>
              <NavLink
                to="/dashboard/profile"
                className="justify-between btn-ghost link link-hover mb-1"
              >
                {userDetails[0] ? userDetails[0] : userDetails[1]}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/settings"
                className="btn-ghost link link-hover mb-1"
              >
                Settings
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/login"
                onClick={handleLogOut}
                className="btn-ghost link link-hover"
              >
                Log Out
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
