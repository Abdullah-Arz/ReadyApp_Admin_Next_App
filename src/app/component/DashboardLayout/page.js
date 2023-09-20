
"use client";

import React from 'react'
import Sidebar from '../sidebar/page';
import Navbar from '../navbar/page';


function DashboardLayout({children}) {
  return (
    <div className="flex">
    <div>
        <Sidebar />
    </div>
    <div className='flex-1'>
      <Navbar/>
    <div>
      {children}
    </div>
    </div>
    </div>
  )
}

export default DashboardLayout