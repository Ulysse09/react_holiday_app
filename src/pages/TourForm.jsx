import axios from "axios";
import React from "react";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TourForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [image, setImage] = useState("");

  const handleImage = (e) => {
    e.preventDefault();
    console.log(e.target.files);
    setImage(e.target.files);
  };

  const formData = new FormData();
  formData.append("backdropImage", image);
  formData.append("Gallery", image);
  formData.append("title", title);
  formData.append("description", description);
  formData.append("duration", duration);
  formData.append("destination", destination);

  const handleForm = (e) => {
    console.log("Hii");
    e.preventDefault();

    axios({
      method: "POST",

      url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour/create",
      data: formData,
    })
      .then((response) => {
        console.log(response);

        toast.success(response.success);
        setTimeout(() => {
          navigate("/tourDash");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="p-14 bg-slate-100 h-[100vh] ">
      <ToastContainer />
      <div className="p-8 rounded-lg bg-white ">
        <form
          action="/"
          method="get"
          id="form"
          class="flex flex-col space-y-4 px-[14rem] "
        >
          <h2 className="font-bold text-3xl">Tour Form</h2>

          <div className="flex flex-col space-y-8 justify-center  md: container ">
            <div className="flex-row flex justify-between space-x-4">
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Title
                </label>
                <input
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  type="text"
                  id="name1"
                  class=" border-2 hover:border-2 border-grey-500 hover:border-secondary rounded-lg px-24 py-4 text-black "
                  placeholder="Enter the title "
                  secondary
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Description
                </label>
                <input
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  type="email"
                  id="email"
                  class=" border-2 hover:border-2 border-grey-500 hover:border-secondary rounded-lg px-20 py-4 text-black"
                  placeholder="Enter your description"
                />
              </div>
            </div>

            <div className="flex-row flex justify-between space-x-4">
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Destination
                </label>
                <input
                  value={destination}
                  onChange={(e) => {
                    setDestination(e.target.value);
                  }}
                  type="text"
                  id="name1"
                  class="border-2 hover:border-2 border-grey-500 focus:border-secondary hover:border-secondary rounded-lg py-4 px-24 text-black "
                  placeholder="Enter your destination "
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Duration
                </label>
                <input
                  value={duration}
                  onChange={(e) => {
                    setDuration(e.target.value);
                  }}
                  type="email"
                  id="email"
                  class="border-2 hover:border-2 border-grey-500 hover:border-secondary  rounded-lg py-4 px-20 text-black"
                  placeholder="Enter your duration"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Image
              </label>
              <input
                onChange={(e) => handleImage(e)}
                type="file"
                multiple="multiple"
                id="email"
                class="border-2 hover:border-2 border-grey-500 hover:border-secondary  rounded-lg py-4 px-20 text-black"
                placeholder="Enter your image"
              />
            </div>

            <button
              className="px-6 w-1/2 bg-secondary text-white py-4 rounded-lg text-xl"
              onClick={handleForm}
            >
              <p>Add tour</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TourForm;
