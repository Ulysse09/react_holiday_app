import axios from "axios";
import React, { useEffect } from "react";
import { BsPencilFill } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import TourForm from "./TourForm";

const TourDash = () => {
  const [tours, setTours] = useState([]);
  const navigate = useNavigate();

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
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      let token = localStorage.getItem("token");
      axios({
        url: `https://holiday-planner-4lnj.onrender.com/api/v1/tour/delete/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          toast.success("Delete successful");
          setTimeout(() => {
            navigate("/dashboard/tourDash");
          }, 3000);
          console.log(response, "response");
        })

        .catch((error) => {
          console.log(error, "Error");
          toast.error(error.message);
        });
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <div className="pt-8 flex flex-col justify-center   lg:px-[5rem] lg:pt-[4rem] ">
      <div className="flex justify-end mb-10 md:pb-[4rem]">
        <Link to={"/dashboard/tourForm"}>
          <button className="bg-secondary rounded-lg text-white text-2xl font-semibold px-6 py-4">
            <p>Add tours </p>
          </button>
        </Link>
      </div>
      <ToastContainer />

      {/* table */}

      <div className="w-[90vw] overflow-x-auto">
        <table className="shadow-2xl  rounded-xl  items-center  mx-auto   overflow-y-scroll    md:overflow-hidden md:overflow-x-hidden justify-center  md:px-4 ">
          <thead className=" bg-gray-50">
            <tr className="font-bold  md:text-2xl   border-b-2 border-b-slate-200  md:space-x-1">
              <th className="lg:px-[4rem] ">Tour image</th>
              <th className=" lg:py-[0rem] lg:px-[2rem] ">Destination</th>
              <th className="lg:px-[2rem]   ">Duration</th>
              <th className="lg:px-[2rem]   ">Group size</th>
              <th className="lg:px-[2rem]   ">Price</th>
              <th className="lg:px-[2rem]  lg:py-[1.5rem]">Actions</th>
            </tr>
          </thead>
          <tbody className=" ">
            {tours.map((item) => {
              return (
                <tr className="text-2xl border-b-2    border-b-slate-200    ">
                  <td className="lg:px-[2rem] lg:w-[14rem] text-center  ">
                    <img
                      className="rounded-lg h-[14vh] w-fit "
                      src={item.backdropImage}
                      alt=""
                    />
                  </td>
                  <td className="lg:px-[2rem] px-[0.5rem]   text-center  ">
                    {item.destination}
                  </td>
                  <td className="md:px-[2rem] text-center  md:py-[1.5rem]">
                    {item.Duration}
                  </td>
                  <td className="md:px-[2rem] text-center">{item.GroupSize}</td>
                  <td className="md:px-[2rem] text-center">{item.Price}</td>
                  <td className="md:px-[2rem] text-center">
                    <span className="flex space-x-4 md:px-4">
                      <button
                        onClick={() => {
                          navigate(`/dashboard/editTour/${item._id}`);
                        }}
                      >
                        <BsPencilFill />
                      </button>

                      <button>
                        <BsTrashFill
                          className="text-red-500"
                          onClick={() => {
                            handleDelete(item._id);
                          }}
                        />
                      </button>
                    </span>
                  </td>
                </tr>
              );
            })}{" "}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TourDash;
