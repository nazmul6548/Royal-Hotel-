import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Home from "./Home";
import {Outlet} from "react-router-dom"
import AuthProvider from "./authprovider/AuthProvider";
import Sectionfirst from "./Sectionfirst";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet>
           
           <Footer></Footer>
            
            
        </div>
    );
};

export default Root;