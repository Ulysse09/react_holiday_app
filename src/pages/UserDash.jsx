import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { BsPencilFill } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

import ReactPaginate from "react-paginate";
import { Circles } from "react-loader-spinner";

const UserDash = () => {
  const navigate = useNavigate();
  const [user, setUsers] = useState([]);

  //spinners

  const [isLoading, setIsLoading] = useState(false);

  //paginate

  const [userPageNumber, setUserPageNumber] = useState(0);
  const userPerPage = 5;
  const usersVisited = userPageNumber * userPerPage;
  const userCount = Math.ceil(user.length) / userPerPage;
  const userDisplay = user
    .slice(usersVisited, usersVisited + userPerPage)
    .map((item) => {
      return (
        <tr className="text-2xl border-b-2    border-b-slate-200    ">
          <td className="lg:px-[0.5rem] w-[10rem] break-words   text-center  ">
            {item.email}
          </td>
          <td className="lg:px-[0rem] px-[0rem]   text-center  ">
            {item.fullName}
          </td>
          <td className="md:px-[0.5rem] text-center  md:py-[1.5rem]">
            {item.role}
          </td>

          <td className="md:px-[0rem] text-center">
            <span className="flex space-x-4 md:pl-8">
              <button
                onClick={() => {
                  navigate(`/dashboard/editUser/${item._id}`);
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

  const userPage = ({ selected }) => {
    setUserPageNumber(selected);
  };

  //fetchUsers

  const fetchUsers = () => {
    let token = localStorage.getItem("token");
    setIsLoading(true);

    axios({
      method: "GET",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/users",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
        console.log(response.data.userDetails);
        setUsers(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  //delete button
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      let token = localStorage.getItem("token");
      axios({
        url: `https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/delete/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log(response, "response");
          toast.success("Delete succesfull");
        })
        .catch((error) => {
          console.log(error, "error");
          toast.error(error.message);
        });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

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
        <div className="bg-grey-300 flex flex-col items-center">
          <div className="md:px-[0rem]  w-[80vw] mb-4  overflow-x-auto  ">
            <table className="shadow-2xl md:table-fixed   w-[75vw]    rounded-xl  items-center  mx-auto   overflow-y-scroll    md:overflow-hidden md:overflow-x-hidden justify-center  md:px-4  ">
              <thead className=" bg-gray-100">
                <tr className="font-bold  md:text-2xl   border-b-2 border-b-slate-200   ">
                  <th className="px-5 w-[20rem] ">Email</th>
                  <th className=" lg:py-[0rem]   ">Names</th>
                  <th className="lg:px-[0.5rem]     ">Role</th>

                  <th className="md:px-[0rem]    lg:py-[1.5rem]">Actions</th>
                </tr>
              </thead>
              <tbody className=" ">{userDisplay}</tbody>
            </table>
          </div>

          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            pageCount={userCount}
            onPageChange={userPage}
            containerClassName="flex  justify-center   flex-row space-x-4 items-center mt-4  "
            pageClassName="bg-secondary text-white rounded-lg md:p-4 "
            pageLinkClassName="bg-secondary text-white rounded-lg md:p-3 p-[0.2rem]"
            previousLinkClassName="bg-secondary text-white rounded-lg md:p-4"
            nextLinkClassName="bg-secondary text-white rounded-lg md:p-4"
            disabledClassName=""
            activeClassName=""
          />
        </div>
      )}
    </>
  );
};

export default UserDash;
