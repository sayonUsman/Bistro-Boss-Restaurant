import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/Cg";
import { BsFillCalendarWeekFill } from "react-icons/Bs";
import { GiWallet } from "react-icons/Gi";
import { MdReviews } from "react-icons/Md";
import { SlCalender } from "react-icons/Sl";
import { HiHome, HiMenu, HiMail } from "react-icons/Hi";
import { AiFillShopping } from "react-icons/Ai";

const Secondary = () => {
  const navbarContent = (
    <>
      <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-black">
        <li className="text-3xl font-bold">BISTRO BOSS</li>
        <li className="text-lg font-semibold">RESTAURANT</li>

        <li className="mt-16 mb-1 link link-hover hover:text-white">
          <NavLink to="profile">
            <CgProfile></CgProfile> My Profile
          </NavLink>
        </li>

        <li className="mb-1 link link-hover hover:text-white">
          <NavLink to="reservation">
            <BsFillCalendarWeekFill></BsFillCalendarWeekFill> Reservation
          </NavLink>
        </li>

        <li className="mb-1 link link-hover hover:text-white">
          <NavLink to="payment-history">
            <GiWallet></GiWallet> Payment History
          </NavLink>
        </li>

        <li className="mb-1 link link-hover hover:text-white">
          <NavLink to="cart">
            <FaShoppingCart></FaShoppingCart> My Cart
          </NavLink>
        </li>

        <li className="mb-1 link link-hover hover:text-white">
          <NavLink to="booking">
            <SlCalender></SlCalender> My Booking
          </NavLink>
        </li>

        <li className="link link-hover hover:text-white">
          <NavLink to="review">
            <MdReviews></MdReviews> Add Review
          </NavLink>
        </li>

        <hr className="mt-12 mb-12 border border-1" />

        <li className="mb-1 link link-hover hover:text-white">
          <NavLink to="/">
            <HiHome></HiHome> Home
          </NavLink>
        </li>

        <li className="mb-1 link link-hover hover:text-white">
          <NavLink to="/menu">
            <HiMenu></HiMenu> Menu
          </NavLink>
        </li>

        <li className="mb-1 link link-hover hover:text-white">
          <NavLink to="/order/SALADS">
            <AiFillShopping></AiFillShopping> Order
          </NavLink>
        </li>

        <li className="link link-hover hover:text-white">
          <NavLink to="/contact">
            <HiMail></HiMail> Contact
          </NavLink>
        </li>
      </ul>
    </>
  );

  return (
    <div className="container mx-auto">
      <div className="md:hidden drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col">
          <div className="container mx-auto navbar bg-black bg-opacity-50 fixed">
            <div className="flex-none lg:hidden text-white">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div className="flex-1 px-2 mx-2 text-white font-semibold">
              Bistro Boss Restaurant
            </div>

            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">{navbarContent}</ul>
            </div>
          </div>
          <Outlet></Outlet>
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          {navbarContent}
        </div>
      </div>

      <div className="hidden md:flex min-h-screen">
        <div className="drawer-side md:mr-7">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          {navbarContent}
        </div>

        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Secondary;
