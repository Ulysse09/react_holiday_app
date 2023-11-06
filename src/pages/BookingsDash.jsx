import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BsPencilFill } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";

import "react-toastify/dist/ReactToastify.css";
const BookingsDash = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  const fetchBooking = () => {
    let token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/booking/view",
    })
      .then((response) => {
        console.log(response);
        setBookings(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchBooking();
  }, []);

  const handleDelete = (id) => {
    let token = localStorage.getItem("token");
    window.confirm("Are you sure?")
      ? axios({
          url: `https://holiday-planner-4lnj.onrender.com/api/v1/booking/delete/${id}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            console.log(response);
            toast.success(response.data.message);
          })
          .catch((error) => {
            console.log(id, "id");
            console.log(token, "token");
            console.log(error);
          })
      : null;
  };
  return (
    <>
      <ToastContainer />
      <div className="pt-8 flex flex-col items-center   lg:px-[5rem] lg:pt-[4rem]">
        <div className="w-[80vw] h-[80vh]   overflow-x-auto shadow-2xl ">
          <table className=" rounded-2xl w-auto  items-center  mx-auto   overflow-y-scroll    md:overflow-hidden md:overflow-x-hidden justify-center  md:px-4 ">
            <thead className=" bg-gray-100">
              <tr className="font-bold  md:text-2xl   border-b-2 border-b-slate-200  md:space-x-1">
                <th className="lg:px-[2rem] ">Name</th>
                <th className=" lg:py-[0rem] lg:px-[2rem] ">Email</th>
                <th className="lg:px-[2rem]   ">Phone</th>
                <th className="lg:px-[2rem]   ">Date</th>
                <th className="lg:px-[2rem]   ">Number of Tickets</th>
                <th className="lg:px-[2rem]  lg:py-[1.5rem]">Actions</th>
              </tr>
            </thead>
            <tbody className=" ">
              {bookings.map((item) => {
                return (
                  <tr className="text-2xl border-b-2    border-b-slate-200    ">
                    <td className="lg:px-[2rem]  text-center  ">
                      {item.fullname}
                    </td>
                    <td className="lg:px-[2rem] px-[0.5rem]   text-center  ">
                      {item.email}
                    </td>
                    <td className="md:px-[2rem] text-center  md:py-[1.5rem]">
                      {item.phone}
                    </td>
                    <td className="md:px-[2rem] text-center">{item.date}</td>
                    <td className="md:px-[2rem] text-center">{item.tickets}</td>
                    <td className="md:px-[2rem] text-center">
                      <span className="flex space-x-4 md:px-4">
                        <button
                          onClick={() => {
                            navigate(`/dashboard/editBooking/${item._id}`);
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
    </>
  );
};

export default BookingsDash;
