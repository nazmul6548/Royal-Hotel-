// import { useContext } from "react";
// import { AuthContext } from "./authprovider/AuthProvider";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import UseHook from "./hook/UseHook";
import SocialLogin from "../component/SocialLogin";
import {useNavigate,useLocation} from 'react-router-dom'
import { Helmet } from "react-helmet-async";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import swal from "sweetalert";
import { useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
const LogIn = () => {
    const [showPassword,setShowPassword] = useState(false);

    const {login} =UseHook()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const navigate = useNavigate()
    const location = useLocation()
    const div =location?.state || '/';
    
      const onSubmit = (data) => {
        const {email,password} = data

        login(email, password)
        .then((result) => {
            if (result.user) {
                navigate(div)
                // toast.success("Login successful!");
                // console.log(result.user);
            }
        })


        .then(() => {
            swal({
              title: "LogIn successful",
              // text: "You clicked the button!",
              icon: "success",
              // button: "Aww yiss!",
              
              
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });

      }
    return (
        <div data-aos="zoom-out" className="flex items-center flex-col">
            <Helmet>
    <title>LogIn</title>
  </Helmet> 
            <h1 className="text-3xl text-center md:text-5xl font-bold mt-6 pb-10">Your have an account ? please LogIn</h1>
        <div className="w-full  md:max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">
            <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-400">User email</label>
                <input type="text" name="email" id="email" placeholder="User email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}
            </div>
            <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block text-gray-400">Password</label>
               <div className="relative">
               <input type={showPassword ? "text" : "password"}
                 name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" {...register("password", { required: true })} />
                 <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
                    {
                        showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />
                    }

                 </span>
               </div>
                {errors.password && <span>This field is required</span>}
                <div className="flex justify-end text-xs text-gray-400">
                    <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                </div>
            </div>
            <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">Sign in</button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            <p className="px-3 text-sm text-gray-400">Login with social accounts</p>
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
            <SocialLogin></SocialLogin>
            <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                    <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                </svg>
            </button>
            
        </div>
        
        <p className="text-xs text-center sm:px-6 text-gray-400">Don't have an account?
            <span rel="noopener noreferrer" href="#" className="underline text-gray-100 ml-2"><Link to="/register">Sign up</Link></span>
       
        </p>
    </div>
    <ToastContainer></ToastContainer>
    </div>
    );
};

export default LogIn;