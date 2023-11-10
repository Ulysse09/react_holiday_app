import React, { useEffect } from "react";
import logo from "../assets/dashboard/logo.svg";
import kleon from "../assets/logo1.png";
import { RxDashboard } from "react-icons/rx";
import { FaRegPaperPlane } from "react-icons/fa";
import { RiContactsBook2Line } from "react-icons/ri";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { Link, Outlet, useParams } from "react-router-dom";
import { BsHouseDoor } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Dashboard = () => {
  const [openDash, setOpen] = useState(false);
  // const [profile, setProfile] = useState("");
  const token = localStorage.getItem("token");
  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);

  const navigate = useNavigate();

  const open = () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log(user);
    console.log(token);
    if (token && user.role == "user") {
      navigate("/");
    } else if (!token) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <div className="px-4 flex relative ">
        {/* sidebar */}

        <div className="lg:w-1/6   md:w-1/4 container mx-auto hidden  md:flex md:flex-col px-1 shadow-xl shadow-r rounded-xl items-center">
          <div className=" py-8 flex space-x-6 items-center   justify-evenly">
            <div className="">
              <img src={kleon} alt="" />
            </div>
          </div>
          <div className="space-y-[0.5rem] px-[2rem] ">
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
              <Link to={"userDash"}>
                <button className="font-semibold flex items-center hover:bg-slate-200 px-4 py-4 rounded-xl space-x-10 flex-row">
                  <span>
                    <RiContactsBook2Line />
                  </span>
                  <p>Users</p>
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
                <button className="font-semibold flex items-center hover:bg-slate-200 px-4 py-4 rounded-xl space-x-10 flex-row ">
                  <span>
                    <BsHouseDoor />
                  </span>

                  <p>Home</p>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* main component */}

        <div
          className="lg:w-5/6 md:w-3/4 flex-col  container mx-auto"
          style={{
            height: 1000,
          }}
        >
          {/* header */}

          <div className="md:p-10 p-4 flex justify-between items-center mx-auto">
            <h2 className="md:text-4xl text-2xl font-bold">Hello Paul</h2>
            <div className="flex flex-row items-center">
              <p>
                <FiSettings className="md:text-5xl  hidden md:flex" />
              </p>
              <p>
                <span className="md:hidden md:text-5xl text-3xl" onClick={open}>
                  <FaBars />
                </span>
              </p>
            </div>
          </div>

          <Outlet />
        </div>

        {/* Modal */}
        {openDash && (
          <div className="bg-white animationDash md:hidden fixed   w-full h-full  top-0   right-0 z-10 pr-14 pb-52 space-y-20 flex items-center  mx-auto justify-between ">
            <div className="space-y-14">
              <p className="text-white font-semibold"></p>
              <div className=" flex flex-col items-start space-y-4  font-body font-semibold text-3xl bg-white text-black md:mr-14 container mx-auto  md:px-44 pl-[5rem]  py-8 rounded-lg">
                <Link to={""}>
                  <button
                    onClick={close}
                    className="font-semibold hover:bg-slate-200 px-4 py-4 rounded-xl  flex items-center space-x-10 flex-row"
                  >
                    <span>
                      <RxDashboard />
                    </span>
                    <p>Dashboards</p>
                  </button>{" "}
                </Link>
                <Link to={"tourDash"}>
                  <button
                    onClick={close}
                    className="font-semibold   flex items-center mr-[8rem] px-4 hover:bg-slate-200   py-4 rounded-xl space-x-10 flex-row"
                  >
                    <span>
                      <FaRegPaperPlane />
                    </span>
                    <p>Tour</p>
                  </button>
                </Link>
                <Link to={"userDash"}>
                  <button
                    onClick={close}
                    className="font-semibold flex items-center hover:bg-slate-200 px-4 py-4 rounded-xl space-x-10 flex-row"
                  >
                    <span>
                      <RiContactsBook2Line />
                    </span>
                    <p>Users</p>
                  </button>
                </Link>
                <Link to={"bookingsDash"}>
                  <button
                    onClick={close}
                    className="font-semibold flex items-center hover:bg-slate-200 px-4 py-4 rounded-xl space-x-10 flex-row "
                  >
                    <span>
                      <AiOutlineCalendar />
                    </span>

                    <p>Bookings</p>
                  </button>
                </Link>
                <Link to={"/"}>
                  <button className="font-semibold flex items-center hover:bg-slate-200 px-4 py-4 rounded-xl space-x-10 flex-row ">
                    <span>
                      <BsHouseDoor />
                    </span>

                    <p>Home</p>
                  </button>
                </Link>
              </div>
            </div>
            <button
              className="hover:text-secondary text-white  text-7xl"
              onClick={close}
            >
              {/* <AiOutlineCloseCircle /> */}
            </button>
          </div>
        )}
      </div>
      ;
    </>
  );
};

export default Dashboard;
