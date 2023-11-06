import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditBooking = () => {
  const [fullName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [tourId, setTourId] = useState("");

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  // params access
  const params = useParams();
  const bookingId = params.id;
  console.log(bookingId);

  // fetchBooking
  const fetchBooking = () => {
    const token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: `https://holiday-planner-4lnj.onrender.com/api/v1/booking/${bookingId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response, "response");
        setName(response?.data?.fullname);
        setEmail(response?.data?.email);
        setPhone(response?.data?.phone);
        setDate(response?.data?.date);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchBooking();
  }, []);

  // handleForm
  const handleForm = (e) => {
    e.preventDefault();
    setIsLoading(true);
    let token = localStorage.getItem("token");

    const formData = new FormData();

    formData.append("fullname", fullName);
    formData.append("tourID", bookingId);
    formData.append("email", email);
    formData.append("date", date);

    axios({
      url: `https://holiday-planner-4lnj.onrender.com/api/v1/booking/update/${bookingId}`,
      data: formData,
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        setIsLoading(false);
        toast.success("Booking updated");
        setTimeout(() => {
          navigate("/dashboard/bookingsDash");
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };
  return (
    <div>
      <div className="md:pt-[3rem] md:px-[5rem] px-[1.5rem] pt-[2rem]  bg-slate-100 h-[100vh] ">
        <ToastContainer />
        <div className="md:p-0 rounded-lg bg-slate-100   ">
          <form
            action="/"
            method="get"
            id="form"
            class="flex rounded-xl flex-col items-center md:items-start bg-white space-y-4 md:py-[2rem] md:px-[4rem] "
          >
            <h2 className="font-bold text-3xl">Edit Booking </h2>

            <div className="flex flex-col space-y-8  justify-center  md: container ">
              <div className="flex-col md:flex-row flex justify-between md:space-x-4">
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold">
                    Name
                  </label>
                  <input
                    value={fullName}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    type="text"
                    id="name1"
                    class=" border-2 hover:border-2 border-grey-500 hover:border-secondary rounded-lg px-24 py-4 text-black "
                    placeholder="Enter Name "
                    secondary
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold">
                    E-mail
                  </label>
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    id="email"
                    class=" border-2 hover:border-2 border-grey-500 hover:border-secondary rounded-lg px-20 py-4 text-black"
                    placeholder="Enter email"
                  />
                </div>
              </div>

              <div className="md:flex-row flex-col  flex justify-between md:space-x-4">
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold">
                    Phone
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    type="text"
                    id="name1"
                    class="border-2 hover:border-2 border-grey-500 focus:border-secondary hover:border-secondary rounded-lg py-4 px-24 text-black "
                    placeholder="Enter phone number "
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold">
                    Date
                  </label>
                  <input
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                    type="date"
                    id="name1"
                    class="border-2 hover:border-2 border-grey-500 focus:border-secondary hover:border-secondary rounded-lg py-4 px-[6.5rem] text-black "
                    placeholder="Enter date "
                  />
                </div>
              </div>

              <div className="flex justify-center md:justify-start">
                <button
                  className="md:px-2 w-1/2 bg-secondary text-white py-2 px-[0.25rem]  md:py-4 rounded-lg text-xl hover:bg-black hover:text-white"
                  onClick={(e) => handleForm(e)}
                >
                  <p>{isLoading ? "Updating..." : " Update booking "}</p>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBooking;
