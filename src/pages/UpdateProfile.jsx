import { Helmet } from "react-helmet-async";
import UseHook from "./hook/UseHook";

import { useForm } from "react-hook-form";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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
      })
      .catch((error) => {
        console.error("error", error);
      });
  };
  useEffect(() => {
    
    // Perform any actions needed after profile update and re-render
    console.log("Profile updated and re-rendered");
  }, [isUpdated]);

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>updateprofile</title>
      </Helmet>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-2/6 m-auto py-4"
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

        <button className="py-2 border-2 rounded-xl mt-2">Save Change</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
