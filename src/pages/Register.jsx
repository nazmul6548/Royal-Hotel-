// import { useContext } from "react";
// import { AuthContext } from "./authprovider/AuthProvider";
import { useForm } from "react-hook-form";
import UseHook from "./hook/UseHook";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import { Helmet } from "react-helmet-async";

const Register = () => {

    const {createUser,userUpdateProfile,logout} = UseHook()
    
    // console.log(createUser);
    
    
    

   
    const {
        register,handleSubmit,formState: { errors } } = useForm();

        const navigate = useNavigate()
    const div ='/';
    
      const onSubmit = data => {
        const {email,password,image,name} = data;
        createUser(email,password)
        .then(() => {
          userUpdateProfile(name,image)
          .then(()=>{
                navigate(div)
                
                
              })
            })
          }
          // logout()

    

    return (
        <div className="hero min-h-screen bg-base-100">

<Helmet>
    <title>Register</title>
  </Helmet>
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-slate-800">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Name</span>
          </label>
          <input type="name" placeholder="name" className="input input-bordered"   {...register("name", { required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>



        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" {...register("email",{ required: true } )} />
        </div>
        {errors.email && <span>This field is required</span>}


        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Image Url</span>
          </label>
          <input type="text" placeholder="image url" className="input input-bordered"  {...register("image")} />
        </div>

        


        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
          {errors.password && <span>This field is required</span>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div>
            <p className="p-2 text-white">have your account? go to <span className="text-purple-700 font-bold underline"><Link to="/login">LogIn</Link></span></p>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;