import { Link, NavLink } from "react-router-dom";
import UseHook from "../pages/hook/UseHook";


const Navbar = () => {
    const {logout,user} =UseHook()
    const navlink = <>
    <li><NavLink to="/">home</NavLink></li>
    <li><NavLink to="upProfile">Update Profile</NavLink></li>
    <li><NavLink to="/login">Log In</NavLink></li>
    <li><NavLink to="/usProfile">User Profile</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52">
        
        {navlink}
      </ul>
    </div>
    <a className=" text-xl"><img src="https://i.ibb.co/tBmmWW2/Hospitality1.jpg" className="h-[40px] w-full" alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
      {navlink}
    </ul>
  </div>
  <div className="navbar-end">

    {
        user ? <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src={user?.photoURL} alt="" />
                </div>
            </label> 
            {/*  */}
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[3] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <button className="btn btn-sm btn-ghost">{user?.displayName || "not found"}</button>
                </li>
                <li>
                <button onClick={logout} className="btn btn-sm btn-ghost">Logout</button>
                </li>

            </ul>
        </div>   
        :
        <Link to="/login">
            <button className="btn btn-sm btn-ghost">Login</button>
        </Link> 
    }
  
  </div>
</div>
    );
};

export default Navbar;