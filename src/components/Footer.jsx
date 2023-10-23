import React from "react";

import pic from "../assets/logo_footer.png";
import img from "../assets/10001.png";
import { Link } from "react-router-dom";
const footer = () => {
  return (
    <div className="bg-gray-700  bg-footer flex space-x-8 p-10 items-center justify-evenly mx-auto">
      <div className="flex space-y-8 flex-col ">
        <img src={pic} className="" alt="" srcset="" />
        <p className="max-w-md text-white">
          Holiday Planners sit amet consectetur adipisicing elit. Perferendis
          sapiente tenetur officiis explicabo fugit, sit mollitia eum atque
          excepturi quaerat autem.
        </p>
        <input
          type="text"
          id="name1"
          class="border-2 border-black rounded-lg p-4 text-black w-1/2"
          placeholder="Enter your name"
        />
        <div className="w-52">
          <img src={img} alt="" srcset="" />
        </div>
      </div>
      <div></div>
      <div className=" flex flex-col space-y-6">
        <p className="text-3xl font-bold text-white">Navigation</p>
        <div className="text-white flex flex-col space-y-6">
          <Link to={"/"} className="hover:underline">
            Home
          </Link>
          <Link to={"/about"} className="hover:underline">
            About
          </Link>
          <Link to={"/tour"} className="hover:underline">
            Tours
          </Link>
          <Link to={"/contact"} className="hover:underline">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="text-white flex-col space-y-6 ">
        <p>Need Help</p>
        <p>Call us </p>
        <p>Location</p>
        <p>follow us</p>
      </div>
    </div>
  );
};

export default footer;
