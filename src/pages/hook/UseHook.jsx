import { useContext } from "react";
import { AuthContext } from "../authprovider/AuthProvider";


const UseHook = () => {

    const allhook = useContext(AuthContext)
    return allhook
};

export default UseHook;