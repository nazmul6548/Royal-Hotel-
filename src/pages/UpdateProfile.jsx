import { Helmet } from "react-helmet-async";
import UseHook from "./hook/UseHook";

import { useForm } from "react-hook-form";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const UpdateProfile = () => {
  const [isUpdated, setIsUpdated] = useState(false);

  const { userUpdateProfile } = UseHook();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const div = location?.state || "/";

  const onSubmit = (data) => {
    const { name, image } = data;
    userUpdateProfile(name, image)
      .then(() => {
        console.log(name, image);
        setIsUpdated(true);
        navigate(div);
        window.location.reload();
      })
      .catch((error) => {
        console.error("error", error);
      });
  };


  return (
    
        <div data-aos="flip-down"  className="flex flex-col bg-[#36034e]  h-[60vh] mt-12 ">
      
      
      <h1 className="text-5xl  font-bold text-white text-center p-6 animate__animated animate__bounce">Update Your Profile</h1>
    <Helmet>
      <title>updateprofile</title>
    </Helmet>
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col md:w-2/6 m-auto py-3"
    >
      <input
        className="py-2 border-2 rounded-xl p-2"
        type="name"
        placeholder="name"
        {...register("name", { required: true })}
      />
      {errors.name && (
        <span className="text-red-600">This field is required</span>
      )}
      <input
        className="py-2 border-2 rounded-xl mt-3 p-2"
        type="text"
        placeholder="photo url"
        {...register("image")}
      />

      <button className="py-2 border-2 rounded-xl mt-2 bg-[#22d3ee] text-white font-bold hover:bg-secondary">Save Change</button>
    </form>
    
  </div>
    
  );
};

export default UpdateProfile;
