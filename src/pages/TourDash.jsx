import axios from "axios";
import React, { useEffect } from "react";
import { BsPencilFill } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import TourForm from "./TourForm";

const TourDash = () => {
  const [tours, setTours] = useState([]);

  const fetchTours = () => {
    let token = localStorage.getItem("token");
    console.log(token, "token");

    axios({
      method: "GET",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour/",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setTours(response.data);
        console.log(response);
        toast.success(success.response.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <div className="pt-8 flex flex-col justify-center   md:px-[5rem] md:pt-[4rem] ">
      <div className="flex justify-end md:pb-[4rem]">
        <Link to={"/dashboard/tourForm"}>
          <button className="bg-secondary rounded-lg text-white text-2xl font-semibold px-6 py-4">
            <p>Add tours </p>
          </button>
        </Link>
      </div>
      <ToastContainer />
      <table className="shadow-2xl rounded-xl container items-center  mx-auto w-[80vw] overflow-y-scroll  md:overflow-hidden md:overflow-x-hidden justify-center  md:px-4">
        <thead>
          <tr className="font-bold text-2xl  border-b-2 border-b-slate-200  md:space-x-1">
            <th className="px-[2rem]">Tour image</th>
            <th className=" py-[0rem] px-[2rem]">Destination</th>
            <th className="px-[2rem]  ">Duration</th>
            <th className="px-[2rem]  ">Group size</th>
            <th className="px-[2rem]  ">Price</th>
            <th className="px-[2rem]  py-[1.5rem]">Actions</th>
          </tr>
        </thead>
        <tbody className=" ">
          {tours.map((item) => {
            return (
              <tr className="text-2xl border-b-2    border-b-slate-200    ">
                <td className="px-[2rem] w-[14rem] text-center  ">
                  <img
                    className="rounded-lg h-[14vh] w-fit "
                    src={item.backdropImage}
                    alt=""
                  />
                </td>
                <td className="px-[2rem]   text-center  ">
                  {item.destination}
                </td>
                <td className="px-[2rem] py-[1.5rem]">{item.Duration}</td>
                <td className="px-[2rem] text-center">{item.GroupSize}</td>
                <td className="px-[2rem] text-center">{item.Price}</td>
                <td className="px-[2rem]">
                  <span className="flex space-x-4 px-4">
                    <BsPencilFill />
                    <BsTrashFill className="text-red-500" />
                  </span>
                </td>
              </tr>
            );
          })}{" "}
        </tbody>
      </table>
    </div>
  );
};

export default TourDash;
