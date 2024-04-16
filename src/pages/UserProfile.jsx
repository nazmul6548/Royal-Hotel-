import { Helmet } from "react-helmet-async";
import UseHook from "./hook/UseHook";
import { Link } from "react-router-dom";



const UserProfile = () => {
    const {user} =UseHook()
   
    
    return (
        <div>
            <h1 className="text-center p-4 font-bold text-5xl ">User Profile</h1>
            <div data-aos="flip-left" className="flex justify-center mt-10">
            
            <Helmet>
    <title>userProfile</title>
  </Helmet>
            <div className="flex flex-col max-w-md p-6 bg-gray-900 text-gray-100">
	<img src={user?.photoURL} alt="" className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 bg-gray-500 aspect-square" />
	<div>
		<h2 className="text-xl font-semibold py-5">User Name : {user?.displayName}</h2>
		<span className="block pb-2 text-sm text-gray-400 py-4">CTO of Company Inc.</span>
		<p>user email : {user.email}</p>
	</div>
<Link to="/upProfile">
<button className="bg-primary w-full py-3 mt-4 rounded-xl">Update profile</button>
</Link>
</div>
        </div>
        </div>
    );
};

export default UserProfile;