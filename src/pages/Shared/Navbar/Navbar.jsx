import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navbarContent = (
    <>
      <li>
        <NavLink to="/" className="mb-1 lg:mb-0 lg:mr-1 link-hover">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/dashboard" className="mb-1 lg:mb-0 lg:mr-1 link-hover">
          Dashboard
        </NavLink>
      </li>

      <li>
        <NavLink to="/menu" className="mb-1 lg:mb-0 lg:mr-1 link-hover">
          Our Menu
        </NavLink>
      </li>

      <li>
        <NavLink to="/contact" className="mb-1 lg:mb-0 lg:mr-1 link-hover">
          Contact
        </NavLink>
      </li>

      <li>
        <NavLink to="/shop" className="mb-1 lg:mb-0 lg:mr-1 link-hover">
          Our Shop
        </NavLink>
      </li>

      <li>
        <NavLink to="/login" className="mb-1 lg:mb-0 lg:mr-1 link-hover">
          Login
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="container navbar absolute z-10 bg-black bg-opacity-50 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navbarContent}</ul>
      </div>
    </div>
  );
};

export default Navbar;
