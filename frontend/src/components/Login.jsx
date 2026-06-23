import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <dialog id="my_modal_3" className="modal  ">
        <div className="modal-box bg-white text-black dark:bg-slate-900 dark:text-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg dark:bg-slate-900 dark:text-white">Login</h3>

          <div className="mt-4 space-y-2">
            <span className=" block mb-3">Email</span>

            <input
              type="email"
              placeholder="Enter your email"
              required 
             className="w-80 px-3 py-1 border rounded-md
             bg-white text-black
             dark:bg-slate-800 dark:text-white dark:border-white"
            />
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
            />

            
          </div>
          {/* {Button} */}

          <div className="flex justify-around mt-6 ">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
              Login
            </button>

            <p>
              Not Registered? <Link to="/signup" className="underline text-blue-500 cursor-pointer">Signup</Link>{" "}
            </p>
           
          </div>





        </div>
      </dialog>
    </div>
  );
}

export default Login;
