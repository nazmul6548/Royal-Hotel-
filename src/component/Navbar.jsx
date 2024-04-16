import { Link, NavLink } from "react-router-dom";
import UseHook from "../pages/hook/UseHook";
import "animate.css";

const Navbar = () => {
  const { logout, user, loader } = UseHook();
  const navlink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/upProfile">Update Profile</NavLink>
      </li>
      <li>
        <NavLink to="/login">Log In</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/usProfile">User Profile</NavLink>
        </li>
      )}

     {
      user &&  <li>
      <NavLink to="/review">Review</NavLink>
    </li>
     }
    </>
  );
  return loader ? (
    <div className="flex justify-center">
      <span className="loading loading-spinner loading-lg flex "></span>
    </div>
  ) : (
    <div className="navbar bg-base-300">
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
            className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-300 rounded-box w-52"
          >
            {navlink}
          </ul>
        </div>
        <Link to="/" className=" text-3xl font-bold flex items-center">
          <h3 className="text-4xl  text-secondary animate__animated animate__backInLeft">
            {" "}
            Royal{" "}
          </h3>
          Hotel
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">{navlink}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt="" />
              </div>
            </label>
            {/*  */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[3] p-2 shadow bg-base-100 rounded-box w-52 right-0 top-8"
            >
              <li>
                <button className="btn btn-sm btn-ghost">
                  {user?.displayName || "not found"}
                </button>
              </li>
              <li>
                <button onClick={logout} className="btn btn-sm btn-ghost">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm btn-ghost">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
