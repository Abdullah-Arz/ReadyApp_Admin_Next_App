"use client"
import React, { useState } from 'react'
import DashboardLayout from '../component/DashboardLayout/page'
import Blogs_form from '../component/blogs_form/page'
import {Select,SelectItem} from "@nextui-org/react";


function page() {

   
  return (
    <DashboardLayout>
      <h1 className='text-2xl pl-1 pb-5 pt-2 font-inherit uppercase font-bold text-gray-500'>BLOGS</h1>
      <div className='px-32 bg-slate-50'>
        {/* <span aria-label="Select Content Type" className=' text-slate-950 font-semibold'>Add Blogs</span> */}
        <Blogs_form card_head="Add Blogs"/>
      </div>
    </DashboardLayout>
  )
}

export default page