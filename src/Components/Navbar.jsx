import { Link, NavLink } from "react-router-dom";
import { FaTrailer } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className="navbar w-[90%] mx-auto mt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <Link to={"/"}>Home</Link>
            <Link to={"/statistics"}>Statistics</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
          </ul>
        </div>
        <NavLink to={"/"} className="btn btn-ghost text-xl text-white">
          GADGET_HEAVEN
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 ">
          <Link to={"/"}>Home</Link>
          <Link to={"/statistics"}>Statistics</Link>
          <Link to={"/dashboard"}>Dashboard</Link>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex justify-center items-center gap-4">
          <div className="text-xl font-bold bg-white p-2 rounded-full">
            <FaTrailer />
          </div>
          <div className="text-xl font-bold bg-white rounded-full p-2">
            <GiSelfLove />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
