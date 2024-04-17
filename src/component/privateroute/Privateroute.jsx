
import UseHook from "../../pages/hook/UseHook";
import { Navigate, useLocation } from "react-router-dom";


const Privateroute = ({ children }) => {
  // const authprovider =AuthProvider()
  const { user, loader } = UseHook();
  console.log(loader);
  const location = useLocation();

  if (loader) {
    console.log(loader);
    return <div className="flex justify-center">
        <span className="loading loading-spinner loading-lg flex "></span>
      </div>
    
  }
  
  if (!user){
    console.log(user);
    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
  }

   

 

  return children;
};
export default Privateroute;
