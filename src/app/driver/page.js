"use client";
import React from 'react'
import DashboardLayout from '../component/DashboardLayout/page';
import Driver_Table from '../component/driver_table/page';

function page() {
  return (
    <div className='overflow-y-hidden'>
    <DashboardLayout>
      <h1 className='text-2xl pl-1 pb-5 pt-2 font-inherit uppercase text-gray-500'>drivers</h1>
      <div className='rounded-2xl border shadow-md p-4 w-72 xl:w-auto lg:w-auto md:w-auto sm:w-auto '>
        <Driver_Table />
      </div>
    </DashboardLayout>
    </div>
  )
}

export default page
