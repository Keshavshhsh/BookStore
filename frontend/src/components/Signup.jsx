import React from "react";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form"
import axios from "axios";

function Signup() {

  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
  
    const onSubmit = async (data) => {
      const userInfo={
        fullname:data.fullname,
        email:data.email,
        password:data.password,
      }
    await  axios.post("http://localhost:4001/user/signup",userInfo).then((res)=>{
        console.log(res.data)
        if(res.data){
          alert("Signup Successfully")
        }
      }).catch((err)=>{
        if(err.response){
          console.log(err);
           alert("Error: "+err.response.data.message)

        }
        //console.log(err)
       
      })
      // console.log(data);
    };

  return (
    <>
      <div className="flex h-screen items-center justify-center ">
        <div
          id="my_modal_3"
          className="
        border-2 shadow-md p-5 rounded-md "
        >
          <div
            className="
  relative
  bg-white text-black dark:bg-slate-900 dark:text-white
  p-6 rounded-lg"
          >
            <form onSubmit={handleSubmit(onSubmit)} method='dialog'>
              <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            
            

            <h3 className="font-bold text-lg dark:bg-slate-900 dark:text-white">
              Signup
            </h3>

            {/* {Name} */}

            <div className="mt-4 space-y-2">
              <span className=" block mb-3">Name</span>

              <input
                type="text"
                placeholder="Enter your full name"
                required
                className="w-80 px-3 py-1 border rounded-md
             bg-white text-black
             dark:bg-slate-800 dark:text-white dark:border-white"

             {...register("fullname", { required: true })}

              />

               <br/>

             {errors.fullname && <span className="text-sm  text-red-500">This field is required</span>}
            </div>

            <div className="mt-4 space-y-2">
              <span className=" block mb-3">Email</span>

              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-80 px-3 py-1 border rounded-md
             bg-white text-black
             dark:bg-slate-800 dark:text-white dark:border-white"
             {...register("email", { required: true })}
              />

               <br/>

             {errors.email && <span className="text-sm  text-red-500">This field is required</span>}

            </div>

            {/* {password} */}

            <div className="mt-4 space-y-2">
              <span className=" block mb-3">Password</span>

              <input
                type="password"
                placeholder="Enter your password"
                required
                className="w-80 px-3 py-1 border rounded-md
             bg-white text-black
             dark:bg-slate-800 dark:text-white dark:border-white"
             {...register("password", { required: true })}
              />
               <br/>

             {errors.password && <span className="text-sm  text-red-500">This field is required</span>}
            </div>
            {/* {Button} */}

            <div className="flex justify-around mt-6 ">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>

              <p >
                Have account?{" "}
                <Link to="/" className="underline text-blue-500 cursor-pointer">
                  Login
                </Link>{" "}
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
