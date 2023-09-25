
"use client"
import React, { useState } from 'react'
import DashboardLayout from '../component/DashboardLayout/page'
import Notification_form from '../component/notification_form/page'
import {Select,SelectItem} from "@nextui-org/react";


function page() {
    const [selected, setSelected] = useState("Term and Condition");

   
  return (
    <DashboardLayout>
      <h1 className='text-2xl pl-1 pb-5 pt-2 font-inherit uppercase font-medium text-gray-500'>Hidden Post</h1>
      <div className='px-32 bg-slate-50'>
      </div>
    </DashboardLayout>
  )
}

export default page