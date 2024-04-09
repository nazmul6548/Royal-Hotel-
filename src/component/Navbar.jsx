import { NavLink } from "react-router-dom";


const Navbar = () => {
    const navlink = <>
    <li><NavLink to="/">home</NavLink></li>
    <li><NavLink to="upprofile">Update Profile</NavLink></li>
    <li><NavLink to="/login">Log In</NavLink></li>
    {/* <li><NavLink to="/register">Register</NavLink></li> */}
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        
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
  <div className="w-10 rounded-full overflow-hidden">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"  />
        </div>
    <div className="ml-2">
    <a className="btn">LogIn</a>
    </div>
  </div>
</div>
    );
};

export default Navbar;