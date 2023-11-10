import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";

import "./App.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { IoReorderThree } from "react-icons/io5";
import About from "./pages/About";
import Contact from "./pages/Contact";
import image from "./assets/mountain.jpg";
import Tour from "./pages/Tour";
import colon from "./assets/colon.svg";
import { AiFillStar } from "react-icons/ai";

function App() {
  return (
    <>
      <div className="   text-center md:mb-16 mb-[10rem] px-8 py-52 md:p-36">
        <div className="bg-image  " />
        <p className="font-bold font-body min-w-xl md:text-7xl text-4xl py-2 px-2 text-white container mx-auto ">
          Enjoy the travel with
          <span className="py-0"> holiday partners</span>
        </p>
      </div>

      <div className="md:container bg-white md:mx-auto md:px-10 md:space-y-[5rem]  px-[0.5rem]    ">
        {/* <div className="flex justify-center  bg-white   mt-[6rem]">
          <form action="" className="flex ">
            <div className=" border rounded-l-lg mr-0 py-2 px-28  border-black">
              <label htmlFor="" className="font-bold text-center">
                Sort by:
              </label>
            </div>
            <div className=" border border-l-0  ml-0 py-2 px-4 border-black">
              <label htmlFor=""></label>
              <select name="" id="">
                <option value="">Release date</option>
              </select>
            </div>
            <div className=" border rounded-r-lg border-l-0  py-2 px-28 border-black">
              <select name="" id="">
                <option value="">Descending</option>
                <option value="">Ascending</option>
              </select>
            </div>
          </form>
        </div> */}
        <About />
        <Tour />

        <div className="flex md:flex-row flex-col ">
          <div className="md:w-1/2 flex flex-col  items-end  bg-secondary md:h-[100vh]       transform md:translate-x-[-6rem] md:translate-y-[-10rem] ">
            <div className="p-10 space-y-6">
              <div className="font-normal border-l-white border-l-[0.3rem] flex items-center px-2  text-4xl text-white ">
                Testimonials{" "}
              </div>
              <p className="font-body text-4xl text-white">Customer reviews</p>
            </div>
            <div className="w-4/5 hidden md:block">
              <img
                src={colon}
                alt=""
                className="   border-white border bg-white    pl-[24rem] md:pb-[10.2rem]      md:pt-[9rem] md:pl-[15rem]"
                srcset=""
              />
            </div>
          </div>
          <div className="md:w-1/2 space-y-5 transform  md:translate-y-[7rem]">
            <div className="flex space-x-4 text-secondary text-3xl">
              <p>
                <AiFillStar />
              </p>
              <p>
                <AiFillStar />
              </p>
              <p>
                <AiFillStar />
              </p>
              <p>
                <AiFillStar />
              </p>
              <p>
                <AiFillStar />
              </p>
            </div>
            <p className="text-3xl font-light  ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem,
              incidunt accusantium nisi quam veritatis placeat sint ab
              reiciendis est repudiandae aut quo, necessitatibus a saepe? Quod,
              neque maiores. Molestias, minus.
            </p>
          </div>
        </div>
        <div className="md: transform md: ">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
