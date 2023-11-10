import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BsPencilFill } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";

import "react-toastify/dist/ReactToastify.css";

import ReactPaginate from "react-paginate";
import { Circles } from "react-loader-spinner";
const BookingsDash = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  //paginate

  const [bookPageNumber, setBookPageNumber] = useState(0);
  const booksPerPage = 5;
  const booksVisited = bookPageNumber * booksPerPage;
  const pageCount = Math.ceil(bookings.length) / booksPerPage;
  const bookingDisplay = bookings

    .slice(booksVisited, booksVisited + booksPerPage)
    .map((item) => {
      return (
        <tr className="text-2xl border-b-2    border-b-slate-200    ">
          <td className="lg:px-[2rem]  text-center break-words  ">
            {item.fullname}
          </td>
          <td className="lg:px-[2rem] px-[0.5rem] break-words      text-center  ">
            {item.email}
          </td>
          <td className="md:px-[0.5rem] text-center  md:py-[1.5rem]">
            {item.phone}
          </td>
          <td className="md:px-[2rem] text-center">{item.date}</td>
          <td className="md:px-[2rem] text-center">{item.numberOfTickets}</td>
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
    });

  const bookPage = ({ selected }) => {
    setBookPageNumber(selected);
  };

  // fetchbooking
  const fetchBooking = () => {
    let token = localStorage.getItem("token");
    setIsLoading(true);
    axios({
      method: "GET",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/booking/view",
    })
      .then((response) => {
        console.log(response);
        setBookings(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchBooking();
  }, []);

  //delete button

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
      {isLoading ? (
        <Circles
          height="90vh"
          width="80"
          color="#c29d59"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass="flex items-center justify-center"
          visible={true}
        />
      ) : (
        <div className="pt-8 flex flex-col items-center   lg:px-[5rem] lg:pt-[4rem]">
          <div className=" overflow-x-auto w-[75vw]        shadow-2xl ">
            <table className=" w-[75vw]  rounded-2xl md:table-fixed     items-center       md:overflow-hidden justify-center  md:px-4 ">
              <thead className=" bg-gray-100">
                <tr className="font-bold  md:text-2xl   border-b-2 border-b-slate-200  md:space-x-1">
                  <th className="lg:px-[2rem] ">Name</th>
                  <th className=" lg:py-[2rem] lg:px-[2rem]  ">Email</th>
                  <th className="lg:px-[2rem]   ">Phone</th>
                  <th className="lg:px-[2rem]   ">Date</th>
                  <th className="lg:px-[2rem]   ">Number of Tickets</th>
                  <th className="lg:px-[2rem]  lg:py-[1.5rem]">Actions</th>
                </tr>
              </thead>
              <tbody className=" ">{bookingDisplay}</tbody>
            </table>
          </div>

          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            pageCount={pageCount}
            pageRangeDisplayed={5}
            onPageChange={bookPage}
            containerClassName=" flex w-[20rem] justify-center     flex-row md:space-x-4 space-x-3 items-center mt-4  "
            pageClassName="bg-secondary text-white rounded-lg md:p-4"
            pageLinkClassName="bg-secondary text-white rounded-lg md:p-3 p-[0.2rem]"
            previousLinkClassName="bg-secondary text-white rounded-lg p-[0.2rem] md:p-4"
            nextLinkClassName="bg-secondary text-white rounded-lg md:p-4 p-[0.2rem]"
            disabledClassName=""
            activeClassName=""
          />
        </div>
      )}
    </>
  );
};

export default BookingsDash;
