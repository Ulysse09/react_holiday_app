import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TourForm = () => {
  const [title, setTitle] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleImage = (e) => {
    e.preventDefault();
    console.log(e.target.files, "file");
    setImage(e.target.files[0]);
  };

  const formData = new FormData();
  formData.append("backdropImage", image);

  formData.append("title", title);
  formData.append("GroupSize", groupSize);
  formData.append("Duration", duration);
  formData.append("destination", destination);
  formData.append("Price", price);

  const handleForm = (e) => {
    //console.log("Hii");
    e.preventDefault();

    axios({
      method: "POST",

      url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour/create",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response);

        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/dashboard/tourDash");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="md:p-14 bg-slate-100   ">
      <ToastContainer />
      <div className="md:p-8 rounded-lg flex flex-col items-center md:flex bg-white ">
        <form
          action="/"
          method="get"
          id="form"
          class="flex flex-col space-y-4 px-[1rem]  w-[80vw] "
        >
          <h2 className="font-bold  text-2xl text-center md:text-3xl">
            Tour Form
          </h2>

          <div className="flex flex-col items-center md:items-center space-y-8  md:justify-center  md:container ">
            <div className="md:flex-row md:flex flex-col items-center  flex justify-between md:space-x-4">
              <div className="flex flex-col ">
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
                  Group size
                </label>
                <input
                  value={groupSize}
                  onChange={(e) => {
                    setGroupSize(e.target.value);
                  }}
                  type="email"
                  id="email"
                  class=" border-2 hover:border-2 border-grey-500 hover:border-secondary rounded-lg px-24 py-4 text-black"
                  placeholder="Enter your description"
                />
              </div>
            </div>

            <div className="md:flex-row md:flex flex flex-col items-center justify-between md:space-x-4">
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
                  class="border-2 hover:border-2 border-grey-500 hover:border-secondary  rounded-lg py-4 px-24 text-black"
                  placeholder="Enter your duration"
                />
              </div>
            </div>

            <div className="md:flex-row md:flex flex flex-col items-center justify-between md:space-x-4">
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Image
                </label>
                <input
                  onChange={(e) => handleImage(e)}
                  type="file"
                  id="email"
                  class="border-2 hover:border-2 border-grey-500 hover:border-secondary  rounded-lg py-4 px-10 md:px-10 text-black"
                  placeholder="Enter your image"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Price
                </label>
                <input
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  type="text"
                  id="name1"
                  class="border-2 hover:border-2 border-grey-500 focus:border-secondary hover:border-secondary rounded-lg py-4 px-24 text-black "
                  placeholder="Enter your Price "
                />
              </div>
            </div>

            <div className="md:flex-row md:flex flex flex-col items-center justify-between md:space-x-4">
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Discount
                </label>
                <input
                  onChange={(e) => setDiscount(e.target.value)}
                  type="text"
                  id="email"
                  class="border-2 hover:border-2 border-grey-500 hover:border-secondary  rounded-lg py-4 px-10 md:px-24 text-black"
                  placeholder="Enter Discount"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Tour type
                </label>
                <input
                  onChange={(e) => {
                    setTourType(e.target.value);
                  }}
                  type="text"
                  id="name1"
                  class="border-2 hover:border-2 border-grey-500 focus:border-secondary hover:border-secondary rounded-lg py-4 px-24 text-black "
                  placeholder="Enter Tour type "
                />
              </div>
            </div>

            <div className="md:flex-row md:flex flex flex-col items-center justify-between md:space-x-4">
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Departure
                </label>
                <input
                  onChange={(e) => setDeparture(e.target.value)}
                  type="text"
                  id="email"
                  class="border-2 hover:border-2 border-grey-500 hover:border-secondary  rounded-lg py-4 px-10 md:px-24 text-black"
                  placeholder="Enter your image"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Seats
                </label>
                <input
                  value={price}
                  onChange={(e) => {
                    setSeats(e.target.value);
                  }}
                  type="text"
                  id="name1"
                  class="border-2 hover:border-2 border-grey-500 focus:border-secondary hover:border-secondary rounded-lg py-4 px-24 text-black "
                  placeholder="Enter seat number "
                />
              </div>
            </div>

            <div className="md:flex-row md:flex flex flex-col items-center justify-between md:space-x-4">
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  from Month
                </label>
                <input
                  onChange={(e) => setFromMonth(e.target.value)}
                  type="text"
                  id="email"
                  class="border-2 hover:border-2 border-grey-500 hover:border-secondary  rounded-lg py-4 px-10 md:px-24 text-black"
                  placeholder="Enter your from  month"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  to month
                </label>
                <input
                  onChange={(e) => {
                    setToMonth(e.target.value);
                  }}
                  type="text"
                  id="name1"
                  class="border-2 hover:border-2 border-grey-500 focus:border-secondary hover:border-secondary rounded-lg py-4 px-24 text-black "
                  placeholder="Enter  to month "
                />
              </div>
            </div>

            <div className="md:flex-row md:flex flex flex-col items-center justify-between md:space-x-4">
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Departure time
                </label>
                <input
                  onChange={(e) => setFromMonth(e.target.value)}
                  type="text"
                  id="email"
                  class="border-2 hover:border-2 border-grey-500 hover:border-secondary  rounded-lg py-4 px-10 md:px-24 text-black"
                  placeholder="Enter your time"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Return time
                </label>
                <input
                  onChange={(e) => {
                    setToMonth(e.target.value);
                  }}
                  type="text"
                  id="name1"
                  class="border-2 hover:border-2 border-grey-500 focus:border-secondary hover:border-secondary rounded-lg py-4 px-24 text-black "
                  placeholder="Enter your Price "
                />
              </div>
            </div>

            <div className="flex justify-start">
              <button
                className="px-6    bg-secondary items-center md:items-start  text-white py-4 rounded-lg text-xl"
                onClick={handleForm}
              >
                <p>Add tour</p>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TourForm;
