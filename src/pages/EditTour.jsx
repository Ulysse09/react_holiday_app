import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
const EditTour = () => {
  const [price, setPrice] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");

  const params = useParams();
  const tourId = params.id;

  // fetch data to display on form

  const fetchTour = () => {
    const token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: `https://holiday-planner-4lnj.onrender.com/api/v1/tour/getElement?fieldName=_id&value=${tourId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response, "response");
        setPrice(response?.data?.Price);
        setDestination(response?.data?.destination);
        setDuration(response?.data?.Duration);
        setGroupSize(response?.data?.GroupSize);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTour();
  }, []);

  // handle form function
  const handleForm = (e) => {
    e.preventDefault();
    let token = localStorage.getItem("token");

    const formData = new FormData();

    formData.append("backdropImage", image);
    formData.append("Price", price);
    formData.append("GroupSize", groupSize);
    formData.append("duration", duration);
    formData.append("destination", destination);

    //update api

    axios({
      url: `https://holiday-planner-4lnj.onrender.com/api/v1/tour/update/${tourId}`,
      method: "PUT",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
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

  const handleImage = (e) => {
    e.preventDefault();
    console.log(e.target.files, "file");
    setImage(e.target.files[0]);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      let token = localStorage.getItem("token");
      axios({
        url: `https://holiday-planner-4lnj.onrender.com/api/v1/booking/delete/${id}`,
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

  const [image, setImage] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <div className="md:pt-[3rem] bg-slate-100 md:px-[10rem]   h-[100vh] ">
        <ToastContainer />
        <div className="md:p-0 rounded-lg   ">
          <form
            action="/"
            method="get"
            id="form"
            class="flex rounded-xl flex-col items-center md:items-start bg-white pb-4  space-y-4 md:px-[1rem] "
          >
            <h2 className="font-bold text-3xl">Edit tour </h2>

            <div className="flex flex-col space-y-8    md: container ">
              <div className="flex-col md:flex-row flex justify-between md:space-x-4">
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
                    class=" border-2 hover:border-2 border-grey-500 hover:border-secondary rounded-lg px-20 py-4 text-black"
                    placeholder="Enter your description"
                  />
                </div>
              </div>

              <div className="md:flex-row flex-col  flex justify-between md:space-x-4">
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
                  id="email"
                  class="border-2 hover:border-2 border-grey-500 hover:border-secondary  rounded-lg py-4 px-20 text-black"
                  placeholder="Enter your image"
                />
              </div>

              <button
                className="px-6 mb-4 md:w-1/2  bg-secondary text-white py-4 rounded-lg text-xl"
                onClick={handleForm}
              >
                <p>Add tour</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTour;
