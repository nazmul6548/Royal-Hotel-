import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Home from "./Home";
import {Outlet} from "react-router-dom"


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Home></Home> */}
           <Outlet></Outlet>
           <Footer></Footer>
            
            
        </div>
    );
};

export default Root;