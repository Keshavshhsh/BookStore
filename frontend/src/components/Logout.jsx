import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

const Logout = () => {
  const [authUser,setAuthUser]=useAuth()

  const handleLogout=()=>{
    try{
      // setAuthUser({
      //   ...authUser,
      //   user:null
      // })
      setAuthUser(null);

      localStorage.removeItem("Users")

      toast.success("Logout Successfully");

      const modal = document.getElementById("my_modal_3");

    if (modal) {
      modal.close();
    }

      
        
           
          setTimeout(()=>{
            window.location.reload();
      

          },3000);


      //window.location.reload();

    }
    catch(error){
      toast.error("Error: "+error.message)
      setTimeout(()=>{},2000);
      

    }
  }

  return (
   
 
    <div>
      <button className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
      onClick={handleLogout}>
        Logout
      </button>
    </div>
 
  )
}

export default Logout
