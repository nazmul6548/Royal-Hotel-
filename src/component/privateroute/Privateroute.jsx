import UseHook from "../../pages/hook/UseHook";
import {Navigate,useLocation} from 'react-router-dom'

const Privateroute = ({children}) => {

    const {user} =UseHook()
    const location = useLocation()
    
    if (!user) {
        return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default Privateroute;