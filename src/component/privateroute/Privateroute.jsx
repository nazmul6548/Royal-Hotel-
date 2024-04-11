import { Children } from "react";
import UseHook from "../../pages/hook/UseHook";
import {Navigate,useLocation} from 'react-router-dom'

const Privateroute = ({children}) => {

    const {user,loader} =UseHook()
    const location = useLocation()

    if (loader) {
        console.log(loader);
         return <div className="flex justify-center">
             <span className="loading loading-spinner loading-lg flex "></span>
         </div>
     }

    if (!user) {
        console.log(user);
                return <Navigate to="/login" state={location?.pathname || "/"}></Navigate> 
            }
    
   
    
   
    
    return  (
        <div>
            {children}
        </div>
    );
};

export default Privateroute;