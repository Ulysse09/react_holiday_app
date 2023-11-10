import axios from "axios";
import React, { useEffect } from "react";
import { BsPencilFill } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

import TourForm from "./TourForm";

import { Circles } from "react-loader-spinner";

const TourDash = () => {
  const [tours, setTours] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  //paginate

  const [tourPageNumber, setTourPageNumber] = useState(0);
  const tourPerPage = 5;
  const tourVisited = tourPageNumber * tourPerPage;
  const tourCount = Math.ceil(tours.length) / tourPerPage;
  const tourDisplay = tours
    .slice(tourVisited, tourVisited + tourPerPage)
    .map((item) => {
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
    });

  const tourPage = ({ selected }) => {
    setTourPageNumber(selected);
  };

  // fetch tours
  const fetchTours = () => {
    let token = localStorage.getItem("token");
    console.log(token, "token");
    setIsLoading(true);

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
        setIsLoading(false);
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
    <div className="pt-8 flex flex-col   lg:px-[5rem] lg:pt-[1rem] ">
      <div className="flex justify-end mb-4 md:pb-[2rem]">
        <Link to={"/dashboard/tourForm"}>
          <button className="bg-secondary rounded-lg text-white text-2xl font-semibold px-6 py-4">
            <p>Add tours </p>
          </button>
        </Link>
      </div>
      <ToastContainer />

      {/* table */}

      <div className=" md:w-auto md:overflow-x-hidden  ">
        {isLoading ? (
          <Circles
            height="90"
            width="80"
            color="#c29d59"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass="flex justify-center"
            visible={true}
          />
        ) : (
          <div>
            <div className="overflow-x-auto ">
              <table className="shadow-2xl pb-20 md:table-fixed  rounded-xl  items-center w-[70vw]  mx-auto   overflow-y-scroll    md:overflow-hidden md:overflow-x-hidden justify-center  md:px-4 ">
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
                <tbody className=" "> {tourDisplay} </tbody>
              </table>
            </div>

            <div>
              <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                pageCount={tourCount}
                onPageChange={tourPage}
                containerClassName="flex   justify-center   flex-row space-x-4 items-center md:pb-10 md:mb-4 md:mt-4  "
                pageClassName="bg-secondary text-white hover:bg-black rounded-lg p-4"
                pageLinkClassName="bg-secondary text-white hover:bg-black rounded-lg p-4"
                previousLinkClassName="bg-secondary text-white rounded-lg p-4"
                nextLinkClassName="bg-secondary text-white rounded-lg p-4"
                disabledClassName=""
                activeClassName=""
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TourDash;
