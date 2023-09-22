"use client"
import React, { useState } from 'react'
import DashboardLayout from '../component/DashboardLayout/page'
import Card_form from '../component/card_form/page'
import {Select,SelectItem} from "@nextui-org/react";


function page() {
    const [selected, setSelected] = useState("Term and Condition");

    const handleChange = (selectedOption) => {
      setSelected(selectedOption.target.value);
      console.log(`Option selected:`, selectedOption.target);
    };
  return (
    <DashboardLayout>
      <h1 className='text-2xl pl-1 pb-5 pt-2 font-inherit uppercase font-bold text-gray-500'>STATIC CONTENT</h1>
      <div className='px-32 bg-slate-50'>
        <span aria-label="Select Content Type" className=' text-slate-950 font-semibold'>Select Content Type</span>
      <Select
              placeholder="Privacy Policy"
              className="max-w-full mb-3 mt-1 pl-3 rounded-sm  bg-white text-slate-950"
              radius='none'
              aria-label="Select Content Type"
              variant='underlined'
              onChange={handleChange}

            >
                <SelectItem key="1" name="Term and Condition" value="Term_and_Condition">
                  Term and Condition
                </SelectItem>
                <SelectItem key="2" name="Privacy Policy" value="Privacy_Policy" Select>
                  Privacy Policy
                </SelectItem>
        </Select>
        <Card_form card_head={selected}/>
      </div>
    </DashboardLayout>
  )
}

export default page