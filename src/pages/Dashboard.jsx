import React from "react";
import logo from "../assets/dashboard/logo.svg";
import kleon from "../assets/dashboard/logo_text.svg";
import { RxDashboard } from "react-icons/rx";
import { FaRegPaperPlane } from "react-icons/fa";
import { RiContactsBook2Line } from "react-icons/ri";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";
import { BsHouseDoor } from "react-icons/bs";

const Dashboard = () => {
  return (
    <>
      <div className="px-4 flex justify-between">
        <div className="w-1/6 flex-col px-1 shadow-xl shadow-r rounded-xl items-center ">
          <div className=" py-8 flex space-x-6 items-center ml-10 justify-evenly">
            <div>
              <img src={logo} alt="" srcset="" />
            </div>
            <div>
              <img src={kleon} alt="" />
            </div>
          </div>
          <div className="space-y-[0.5rem] px-[2rem] py-[3rem] ">
            <div className="flex flex-col items-start text-2xl ">
              <Link to={""}>
                <button className="font-semibold hover:bg-slate-200 px-4 py-4 rounded-xl  flex items-center space-x-10 flex-row">
                  <span>
                    <RxDashboard />
                  </span>
                  <p>Dashboards</p>
                </button>{" "}
              </Link>
            </div>
            <div className="flex flex-col items-start   text-2xl">
              <Link to={"tourDash"}>
                <button className="font-semibold   flex items-center  px-8 hover:bg-slate-200   py-4 rounded-xl space-x-10 flex-row">
                  <span>
                    <FaRegPaperPlane />
                  </span>
                  <p>Tour</p>
                </button>
              </Link>
            </div>
            <div className="flex flex-col  items-start text-2xl">
              <Link to={"contactDash"}>
                <button className="font-semibold flex items-center hover:bg-slate-200 px-4 py-4 rounded-xl space-x-10 flex-row">
                  <span>
                    <RiContactsBook2Line />
                  </span>
                  <p>Contacts</p>
                </button>
              </Link>
            </div>
            <div className="flex flex-col  items-start text-2xl  ">
              <Link to={"bookingsDash"}>
                <button className="font-semibold flex items-center hover:bg-slate-200 px-4 py-4 rounded-xl space-x-10 flex-row ">
                  <span>
                    <AiOutlineCalendar />
                  </span>

                  <p>Bookings</p>
                </button>
              </Link>
            </div>

            <div className="flex flex-col  items-start text-2xl  ">
              <Link to={"/"}>
                <button className="font-semibold flex items-center hover:bg-slate-200 px-4 py-4 rounded-xl space-x-10 flex-row mb-[10rem]">
                  <span>
                    <BsHouseDoor />
                  </span>

                  <p>Home</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-5/6">
          {/* header */}
          <div className="p-10 flex justify-between items-center">
            <h2 className="text-4xl font-bold">Hello Paul</h2>
            <div>
              <p>
                <FiSettings className="text-5xl" />
              </p>
              <p></p>
            </div>
          </div>

          <Outlet />
        </div>
      </div>
      ;
    </>
  );
};

export default Dashboard;
