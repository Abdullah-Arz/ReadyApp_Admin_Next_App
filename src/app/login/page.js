import Image from 'next/image'
import React from 'react'
function Login() {
  return (
    <div className='bg-slate-50 px-56 pt-24 h-screen'>
    <h1 class="text-gray-800 text-3xl font-semibold	  mb-5">Login Now</h1>

    <div class="md:flex   bg-white    rounded-xl shadow-lg">
      <div class="flex w-3/5 justify-center  items-center">
        <form class="bg-white w-screen px-10 py-10 ">
          <p class="text-sm font-normal text-gray-950 mb-1">Username <span className='text-red-600'>*</span></p>

          <div class="flex items-center  text-gray-400 border-2 py-2 px-3 rounded-lg mb-4">

            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-800 " viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd" />
            </svg>
            <input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Full name" />
          </div>
          <p class="text-sm font-normal text-gray-950 mb-1">Password <span className='text-red-600'>*</span></p>

          <div class="flex items-center text-gray-400 border-2 py-2 px-3 rounded-lg">

            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-800" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd" />
            </svg>
            <input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Password" />
         
            
          </div>
        
          <div class="flex justify-between mt-5">
          <span class="text-base ml-2cursor-pointer"><input type='checkbox' class="default:ring-2 "/> Remember me</span>
          <span class="text-base ml-2 text-blue-500 cursor-pointer ">Forgot Password ?</span>
          </div>
          <div class="flex justify-end">
             <button type="submit" class="block w-1/5 	justify-between bg-neutral-800 mt-12 py-2 rounded-md text-white font-medium mb-2">Login</button>
          </div>
        
        </form>
      </div>
      <div class="md:mb-0 w-2/5 ">
      <img src="/readylogo.jpg"alt="Phone image" className='w-full h-full' /> 
        
      </div>
    </div>
 
    </div>

  )
}

export default Login