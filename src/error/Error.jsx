import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="text-center w-full md:w-full">
             <Helmet>
    <title>Error</title>
  </Helmet> 
            <h1 className=" text-[150px] md:text-[350px] font-bold">404</h1>

            <h2 className="text-3xl md:text-5xl font-bold">Not Found</h2>

            <button className="bg-secondary p-4 rounded-xl mt-6"><Link to="/">Back to Home</Link></button>
        </div>
    );
};

export default Error;