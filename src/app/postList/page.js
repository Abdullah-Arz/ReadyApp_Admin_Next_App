"use client";
import React, { useState } from "react";
import DashboardLayout from "../component/DashboardLayout/page";
import Notification_form from "../component/notification_form/page";
import { Select, SelectItem } from "@nextui-org/react";
import Driver_Table from "../component/driver_table/page";
import { columns, users, statusOptions } from "./postlist_data";

function page() {
  const [selected, setSelected] = useState("Term and Condition");

  return (
    <DashboardLayout>
      <h1 className="text-2xl pl-1 pb-5 pt-2 font-inherit uppercase text-gray-500">
        Post List
      </h1>
      <div className="px-0 2lx:px-32 lx:px-32 lg:px-32 md:px-32 sm:px-32 bg-slate-50">
        <div className="mt-4 border p-3 rounded-ss-xl rounded-se-xl bg-[#212529] w-72 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-auto ">
          <p className="text-white capitalize text-inherit text-md">Blogs</p>
        </div>
        <div className="bg-white rounded-ee-xl rounded-es-xl border shadow-md p-4 w-72 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-auto ">
          <Driver_Table
            title="name"
            title1="recruiter"
            title2="location"
            title5="jobtype"
            // title4="actions"
            title6="postdate"
            title7="salary"
            title8="experience"
            // type="true"
            columns={columns}
            users={users}
            statusOptions={statusOptions}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default page;