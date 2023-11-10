import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import pic from "../assets/logo1.png";
// import logo from "../assets/logo.PNG";

// import "./App.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoSearchCircleOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";

function Nav() {
  const [openModal, setOpen] = useState(false);

  const open = () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };

  return (
    <div className="">
      <div className=" hidden md:flex justify-between bg-primary text-white p-5 relative    ">
        <div className="flex space-x-4 p-0  ">
          <p className="flex items-center space-x-4 font-light p-2    hover:bg-slate-200 transition duration-300 ease-in-out hover:text-black">
            <span className="  text-3xl text-secondary">
              <FiMail />
            </span>
            holidayplanners@gmail.com
          </p>
          <p className="flex items-center space-x-6 hover:bg-slate-200 transition ease-in-out duration-300 hover:text-black">
            <span className="text-3xl text-secondary">
              <FiPhoneCall />
            </span>
            +1234567890
          </p>
        </div>
        <div className="flex justify-evenly items-center space-x-4">
          <p className="text-3xl text-secondary hover:bg-slate-200 transition duration-300  hover:text-black">
            <FaFacebookF />
          </p>
          <p className=" text-3xl text-secondary hover:bg-slate-200 hover:text-black transition duration-300">
            <FaInstagram />
          </p>
          <p className=" text-3xl text-secondary hover:bg-slate-200 hover:text-black transition duration-300">
            <FaTwitter />
          </p>
        </div>
      </div>
      {/* white navbar */}
      <div className="flex justify-between  items-center  p-4 md:w-[85vw]  transform md:translate-y-[-1.25rem] sticky bg-white     container mx-auto  ">
        <div className="w-1/2">
          <img src={pic} alt="" className="" />
        </div>

        <div className="md:space-x-6 flex items-center">
          <button className="px-10 py-3 hidden md:flex bg-secondary text-white rounded-lg font-semibold">
            Reserve
          </button>
          <i className="text-6xl">
            <IoSearchCircleOutline />
          </i>
          <button
            className="text-3xl text-white bg-secondary rounded-full  py-4 px-4 "
            onClick={open}
          >
            <BiMenuAltRight />
          </button>
        </div>
      </div>

      {/* Navigation modal */}

      {openModal && (
        <div className="bg-primary animation  w-full h-full fixed top-0   left-0 z-10 pr-14 space-y-20 flex items-center  mx-auto justify-between ">
          <div className="space-y-14">
            <p className="text-white font-semibold"></p>
            <div className="text-white flex flex-col space-y-4  font-body font-semibold text-3xl bg-nav mr-14  px-44 pr-[24rem] items-start py-8 rounded-lg">
              <Link to={"/"}>
                <button className="hover:text-secondary" onClick={close}>
                  Home
                </button>
              </Link>
              <Link to={"/about"}>
                <p className="hover:text-secondary " onClick={close}>
                  About
                </p>
              </Link>
              <Link to={"/Tour"}>
                <p className="hover:text-secondary" onClick={close}>
                  Tour
                </p>
              </Link>

              <Link to={"/Contact"}>
                <p className="hover:text-secondary" onClick={close}>
                  Contact us
                </p>
              </Link>

              <Link to={"/Login"}>
                <p className="hover:text-secondary" onClick={close}>
                  Login
                </p>
              </Link>

              <Link to={"/Sign_up"}>
                <p className="hover:text-secondary" onClick={close}>
                  Sign up
                </p>
              </Link>

              <Link to={"/dashboard"}>
                <p className="hover:text-secondary" onClick={close}>
                  Dashboard
                </p>
              </Link>
            </div>
          </div>
          <button
            className="hover:text-secondary text-white  text-7xl"
            onClick={close}
          >
            <AiOutlineCloseCircle />
          </button>
        </div>
      )}
    </div>
  );
}

export default Nav;
