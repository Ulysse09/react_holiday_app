import axios from "axios";
import React, { useEffect } from "react";
import { BsPencilFill } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";
import { useState } from "react";
const TourDash = () => {
  const [tours, setTours] = useState([]);

  const fetchTours = () => {
    axios({
      method: "GET",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/users",
    })
      .then((response) => {
        setTours(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("An error happened");
      });
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <div className="pt-8 flex flex-col justify-center container mx-auto px-[5rem] ">
      <table className="shadow-2xl rounded-xl  px-8">
        <thead>
          <tr className="font-bold text-2xl border-b-2 border-b-slate-200  space-x-5">
            <td className="px-[8rem]">Destination</td>
            <td className=" py-[0rem] px-[2rem]">Email</td>
            <td className="px-[6rem]">Role</td>
            <td className="px-[6rem] py-[1.5rem]">Actions</td>
          </tr>
        </thead>
        {tours.map((item) => {
          return (
            <tbody>
              <tr className="text-2xl border-b-2 border-b-slate-200    ">
                <td className="px-[8rem] py-[1.5rem]">{item.location}</td>
                <td className="px-[8rem]">{item.email}</td>
                <td className="px-[8rem]">{item.role}</td>
                <td className="px-[6rem] ">
                  <span className="flex space-x-4 px-4">
                    <BsPencilFill />
                    <BsTrashFill />
                  </span>
                </td>
              </tr>
            </tbody>
          );
        })}{" "}
      </table>
    </div>
  );
};

export default TourDash;
