// import { useContext } from "react";
// import { AuthContext } from "./authprovider/AuthProvider";
import { useForm } from "react-hook-form";
import UseHook from "./hook/UseHook";
import { Link } from "react-router-dom";
import {useNavigate,useLocation} from 'react-router-dom'

const Register = () => {

    const {createUser} = UseHook()
    // console.log(createUser);
    const navigate = useNavigate()
    const location = useLocation()
    const div =location?.state || '/';

   
    const {
        register,handleSubmit,formState: { errors } } = useForm();
    
      const onSubmit = data => {
        const {email,password} = data;
        createUser(email,password)
        .then((result) => {
          if (result.user) {
              navigate(div)
             
          }
      })
    }
    

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" placeholder="name" className="input input-bordered"   {...register("name", { required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>



        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" {...register("email",{ required: true } )} />
        </div>
        {errors.email && <span>This field is required</span>}


        <div className="form-control">
          <label className="label">
            <span className="label-text">Image Url</span>
          </label>
          <input type="text" placeholder="image url" className="input input-bordered"  {...register("image")} />
        </div>

        


        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
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
            <p className="p-2">have your account? go to <span className="text-purple-700 font-bold underline"><Link to="/login">LogIn</Link></span></p>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;