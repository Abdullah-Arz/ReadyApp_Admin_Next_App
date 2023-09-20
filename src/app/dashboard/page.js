"use client";

import React from 'react'
import Sidebar from '../component/sidebar/page';
import UserDropdown from '../component/user-dropdown/page';


function page() {
  return (
    <div className="flex">
    <div>
        <Sidebar />
    </div>
    <div className='flex-1'>
    <div 
    className='bg-white shadow-md h-16 flex items-center justify-end'
    >
      <UserDropdown />
    </div>
    <div>
    
      {/* <h1>Dashboard Page</h1> */}
    </div>
    </div>
    </div>
  )
}

export default page
