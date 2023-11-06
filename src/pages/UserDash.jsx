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

const UserDash = () => {
  const navigate = useNavigate();
  const [user, setUsers] = useState([]);

  const fetchUsers = () => {
    let token = localStorage.getItem("token");

    axios({
      method: "GET",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/users",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
        setUsers(response.data);
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
      <div className="bg-grey-300 flex flex-col items-center">
        <div className="md:px-[5rem] overflow-x-auto w-[80vw] h-[75vh]  ">
          <table className="shadow-2xl table-fixed      rounded-xl  items-center  mx-auto   overflow-y-scroll    md:overflow-hidden md:overflow-x-hidden justify-center  md:px-4  ">
            <thead className=" bg-gray-100">
              <tr className="font-bold  md:text-2xl   border-b-2 border-b-slate-200   ">
                <th className="px-5 w-[20rem] ">Email</th>
                <th className=" lg:py-[0rem]   ">Names</th>
                <th className="lg:px-[0.5rem]     ">Role</th>

                <th className="md:px-[0.5rem]  lg:py-[1.5rem]">Actions</th>
              </tr>
            </thead>
            <tbody className=" ">
              {user.map((item) => {
                return (
                  <tr className="text-2xl border-b-2    border-b-slate-200    ">
                    <td className="lg:px-[0.5rem] w-[10rem] break-words whitespace-nowrap  text-center  ">
                      {item.email}
                    </td>
                    <td className="lg:px-[0rem] px-[0rem]   text-center  ">
                      {item.fullName}
                    </td>
                    <td className="md:px-[0.5rem] text-center  md:py-[1.5rem]">
                      {item.role}
                    </td>

                    <td className="md:px-[0.5rem] text-center">
                      <span className="flex space-x-4 md:px-4">
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
              })}{" "}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserDash;
