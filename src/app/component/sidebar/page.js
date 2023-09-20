"use client";

import Image from "next/image";
import { useState } from "react";
import readyicon from "../../assets/ready-icon.png";
import { BsChevronDown } from "react-icons/bs";
import {
  TbAlignJustified,
  TbNotification,
  TbBrandBlogger,
  TbMessage2,
  TbUserSquareRounded,
  TbUsersGroup,
  TbLayoutGrid,
  TbClipboardList,
  TbFileReport,
  TbArchive,
  TbScanEye,
  TbChevronRight
} from "react-icons/tb";

import { IconName } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";

function page() {
  const [state_Open, setState_Opne] = useState(false);
  const [state_OpenSubmenu, setState_OpenSubmenu] = useState(true);

  const Menus = [
    { title: "Dashboard", icon: <TbLayoutGrid /> },
    { title: "Drivers", icon: <TbUsersGroup /> },
    { title: "Recruiters", icon: <TbUserSquareRounded /> },
    { title: "Static Content", icon: <TbMessage2 /> },
    { title: "Blogs", icon: <TbBrandBlogger /> },
    { title: "Notifications", icon: <TbNotification /> },
    {
      title: "Posts",
      icon: <TbAlignJustified />,
      submenuitem: [
        { title: "Post List", icon: <TbClipboardList /> },
        { title: "Reported Posts", icon: <TbFileReport /> },
        { title: "Archive Posts", icon: <TbArchive /> },
        { title: "Hidden Posts", icon: <TbScanEye /> },
      ],
    },
  ];
  const HandleSidebar = () => {
    setState_Opne(!state_Open);
  };

  const HandleSubMenu = () => {
    setState_OpenSubmenu(!state_OpenSubmenu);
  };

  return (
    <div>
      <div
        className={`bg-[#212529] h-screen p-5 pt-8 ${
          state_Open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <IoMenu
          className={`color-[#212529] text-3xl absolute -right-10 top-5
            cursor-pointer duration-0`}
          onClick={HandleSidebar}
        />
        <div className="inline-flex">
          <Image
            src={readyicon}
            alt="Ready App Icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "35px", height: "35px" }}
            className="cursor-pointer block float-left mr-2 h="
          />
          <h1
            style={{ width: "250px" }}
            className={`text-white text-2xl origin-left font-medium ${
              !state_Open && "hidden"
            }`}
          >
            Ready App
          </h1>
        </div>

        <ul className="pt-2">
          {Menus.map((item, index) => (
            <>
              <li
                key={index}
                className="text-sm text-[#8b8b8d] flex items-center gap-x-4 p-2 mt-4 cursor-pointer 
                    hover:bg-white rounded-md duration-100"
              >
                {/* <span style={{width:"200px"}} className={`text-sm font-medium flex-1 ${!state_Open && "hidden"}`}>{item.title}</span> */}
                {item.submenuitem ? (
                  <>
                    {/* <div className="flex items-center" onClick={HandleSubMenu}> */}
                    <span
                      onClick={HandleSubMenu}
                      className="text-2xl block float-left"
                    >
                      {item.icon}
                    </span>
                    <span
                      onClick={HandleSubMenu}
                      style={{ width: "200px" }}
                      className={`text-sm font-medium flex-1 ${
                        !state_Open && "hidden"
                      }`}
                    >
                      {item.title}
                    </span>
                    <TbChevronRight
                      onClick={HandleSubMenu}
                      className={` ${state_OpenSubmenu && "rotate-90"}`}
                    />
                    {/* </div> */}
                  </>
                ) : (
                  <>
                    <span className="text-2xl block float-left">
                      {item.icon}
                    </span>
                    <span
                      style={{ width: "200px" }}
                      className={`text-sm font-medium flex-1 ${
                        !state_Open && "hidden"
                      }`}
                    >
                      {item.title}
                    </span>
                  </>
                )}
              </li>

              {item.submenuitem && state_OpenSubmenu && state_Open && (
                <ul>
                  {item.submenuitem.map((submenu, index) => (
                    <li
                      key={index}
                      className="text-sm text-[#8b8b8d] flex items-center gap-x-4 p-2 px-5 cursor-pointer 
                    hover:bg-white rounded-md"
                    >
                      <span className="text-1xl block float-left">
                        {submenu.icon}
                      </span>
                      <span className="text-1xl font-normal block float-left">
                        {submenu.title}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
      {/* <div className="p-7">
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </div> */}
    </div>
  );
}

export default page;
