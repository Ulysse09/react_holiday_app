import React, { useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import { AiFillClockCircle } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { BiSolidUserPlus } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import axios from "axios";
const TourDetails = () => {
  const params = useParams();
  const tourId = params.id;

  const [destination, setDestination] = useState("");

  const fetchTour = () => {
    const token = localStorage.getItem("token");
    console.log(token, "token");
    console.log(
      `https://holiday-planner-4lnj.onrender.com/api/v1/tour/getElement/fieldName=_id&value=${tourId}`,
      "Perfcet"
    );
    axios({
      method: "GET",
      url: `https://holiday-planner-4lnj.onrender.com/api/v1/tour/getElement/fieldName=_id&value=${tourId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response.data);

        setDestination(response?.data?.destination);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTour();
  }, []);

  return (
    <>
      <div className="  text-center mb-32 px-8 py-52 md:p-40">
        <div className="bg-image2" />
        <p className="font-bold font-body md:text-7xl text-4xl py-2 px-2 text-white container mx-auto ">
          Italy{destination}
        </p>
      </div>

      {/* main content */}

      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="md:w-2/3 container mt-44 md:mt-32 mb-32  shadow-lg">
          <form action="" className="flex justify-center  ">
            <div className=" border-2 border-slate-400 rounded-l-lg mr-0 py-4 md:px-8 bg-secondary px:4 text-white  ">
              <label htmlFor="" className=" text-center">
                Information
              </label>
            </div>
            <div className=" border-2 hover:bg-secondary hover:text-white border-slate-400 border-l-0  ml-0 py-4 px-2 md:px-12  ">
              <label htmlFor="">Tour plan</label>
            </div>
            <div className=" border-2 hover:bg-secondary hover:text-white border-slate-400  border-l-0  py-4 px-2 md:px-12  ">
              <label htmlFor="">Location</label>
            </div>
            <div className=" border-2 hover:bg-secondary hover:text-white border-slate-400 border-l-0  py-4 px-2 md:px-12  ">
              <label htmlFor="">Gallery</label>
            </div>
            <div className=" border-2 hover:bg-secondary hover:text-white border-slate-400 rounded-r-lg border-l-0  py-4 md:px-10 px-2  ">
              <label htmlFor="">Review</label>
            </div>
          </form>

          <div className="md:px-12 md:py-10 md:mr-[4rem] space-y-10 shadow-2xl">
            <div className="flex justify-between pt-7 items-center md:flex-row space-y-4 flex-col  ">
              <h1 className="md:text-4xl text-2xl md:w-1/2 font-normal text-center md:text-left font-body items-center">
                A wonderful serenity has taken possession of my entire soul
              </h1>

              <p className="rounded-full font-bold py-[2.8rem] px-[2.5rem] bg-secondary  text-white">
                $1200
              </p>
            </div>

            {/* icons */}
            <div className="flex flex-col md:flex-row space-y-4 bg-secondary px-4 py-8 justify-evenly   mx-2">
              <div className="flex flex-col text-3xl items-center text-white">
                <AiFillClockCircle />
                <p className="text-black font-semibold">2 days</p>
              </div>
              <div className="flex flex-col text-3xl items-center text-white">
                <HiUsers />
                <p className="text-black font-semibold"> 6 people</p>
              </div>
              <div className="flex flex-col text-3xl items-center text-white">
                <BiSolidUserPlus />
                <p className="text-black font-semibold"> 18</p>
              </div>
              <div className="flex flex-col text-3xl items-center text-white">
                <FaLocationDot />
                <p className="text-black font-semibold">Greece</p>
              </div>
              <div className="flex flex-col text-3xl items-center text-white">
                <FaSun />
                <p className="text-black font-semibold"> Discovery </p>
              </div>
            </div>

            <p className="font-light text-lg max-w-3xl">
              I should be incapable of drawing a single stroke at the present
              moment; and yet I feel that I never was a greater artist than now.
              When, while the lovely valley teems with vapour around me, and the
              meridian sun strikes the upper surface of the impenetrable foliage
              of my trees, and but a few stray gleams.
            </p>

            <p className="font-light text-lg max-w-3xl">
              I should be incapable of drawing a single stroke at the present
              moment; and yet I feel that I never was a greater artist than now.
              When, while the lovely valley teems with vapour around me, and the
              meridian sun strikes the upper surface of the impenetrable foliage
              of my trees, and but a few stray gleams steal into the inner
              sanctuary, I throw myself down among the tall grass by the
              trickling stream; and, as I lie close to the earth, a thousand
              unknown plants are noticed by me: when I hear the buzz of the
              little world among the stalks, and grow familiar with the
              countless indescribable forms of the insects and flies, then I
              feel the presence of the Almighty, who formed us in his own image,
              and the breath
            </p>

            {/* video */}

            <div className="flex justify-start overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <td className="font-semibold text-2xl md:px-24 border-t-2 border-b-2 border-r-2 border-slate-300 md:p-4">
                      Destination
                    </td>
                    <td className="text-2xl border-b-2 border-t-2   border-slate-300 md:p-4">
                      Greece
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-semibold text-2xl md:px-24 border-b-2 border-r-2 border-slate-300">
                      Departure
                    </td>
                    <td className="text-xl border-b-2   border-slate-300 md:p-4">
                      Lorem Ipsum
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-2xl md:px-24 border-b-2 border-r-2 border-slate-300">
                      Departure time
                    </td>
                    <td className="text-xl border-b-2   border-slate-300 md:p-4">
                      9:15am to 9:30am
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-2xl md:px-24 border-b-2 border-r-2 border-slate-300">
                      Return time
                    </td>
                    <td className="text-xl border-b-2   border-slate-300 md:p-4">
                      Approximately 10:30pm
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-2xl md:px-24 border-b-2 border-r-2 border-slate-300">
                      Dress Code
                    </td>
                    <td className="text-xl border-b-2   border-slate-300 md:p-4">
                      Comfortable clothing and light jacket
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-2xl md:px-24 border-b-2 border-r-2 border-slate-300">
                      Price Include
                    </td>
                    <td className="text-xl border-b-2   border-slate-300 md:p-4">
                      <div className="flex flex-col">
                        <p>5 star accomodation</p>
                        <p>Air fases</p>
                        <p>3 night hotel accomodation</p>
                        <p>All transport in destination location</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-2xl md:px-24 border-b-2 border-r-2 border-slate-300">
                      Price Not Included
                    </td>
                    <td className="text-xl border-b-2   border-slate-300 md:p-4">
                      <div className="flex flex-col">
                        <p>Guide service Fee</p>
                        <p>Any private expenses</p>
                        <p>Room service Fees</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* side component */}
        <div className="md:w-1/3">
          <div className="flex flex-col p-4 shadow-xl transform translate-y-[-5.5rem]  bg-white  ">
            <h2 className="font-semibold text-2xl flex justify-center">
              Book your tour
            </h2>
            <form
              action="/"
              method="get"
              id="form"
              class="flex flex-col space-y-4 p-8 "
            >
              <div className="flex flex-col space-y-8 justify-center   container ">
                <div className="flex flex-col">
                  <input
                    type="text"
                    id="name1"
                    class="border-2 border-black rounded-lg p-4 text-black "
                    placeholder="Full Name"
                  />
                </div>

                <div className="flex flex-col">
                  <input
                    type="email"
                    id="email"
                    class="border-2  border-black rounded-lg p-4 text-black"
                    placeholder="Email"
                  />
                </div>

                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Confirm email"
                    className=" border-black  border-2 rounded-lg p-4"
                  />
                </div>

                <div className="flex flex-col">
                  <input
                    type="text"
                    id="name1"
                    class="border-2 border-black rounded-lg p-4 text-black "
                    placeholder="Phone"
                  />
                </div>

                <div className="flex flex-col">
                  <input
                    type="date"
                    id="email"
                    class="border-2  border-black rounded-lg p-4 text-black"
                    placeholder="Date"
                  />
                </div>

                <div className="flex flex-col">
                  <input
                    type="Confirm-email"
                    className=" border-black  border-2 rounded-lg p-4"
                    placeholder="Number of text"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    className=" border-black  border-2 rounded-lg py-10 px-4"
                    placeholder="Message"
                  />
                </div>

                <div className="flex space-x-4 text-2xl items-center">
                  <input
                    type="checkbox"
                    className="py-44 text-7xl w-12 h-8 px-8 rounded-lg"
                    name=""
                    id=""
                  />
                  <p> Check availability</p>
                </div>

                <button className="px-6 bg-secondary text-white py-4 rounded-lg text-xl">
                  Book now
                </button>
              </div>
            </form>
          </div>

          <div className="bg-tertiary p-8  px-14 space-y-4 flex flex-col items-start text-center   ">
            <h2 className="font-semibold text-2xl mb-6">Why book with us?</h2>
            <p className="font-light flex items-center ">
              <span className="font-bold">
                <BsChevronRight />
              </span>
              Best price guarantee
            </p>
            <p className="font-light flex items-center">
              <span className="font-bold">
                <BsChevronRight />
              </span>
              Customer care available 24/7
            </p>
            <p className="font-light flex items-center">
              <span className="font-bold">
                <BsChevronRight />
              </span>
              Free travel insurance
            </p>
            <p className="font-light flex items-center">
              <span className="font-bold">
                <BsChevronRight />
              </span>
              Hand picked tours and activities
            </p>
          </div>

          <div className="bg-secondary mt-8 mb-8  p-8 pb-20   px-14 space-y-2 flex flex-col items-start text-center   ">
            <h2 className="font-semibold text-2xl text-white">
              Got a question
            </h2>
            <p className="font-light text-white flex items-center ">
              Do not hesitage to give us a call. We are an expert team and we
              are happy to talk to you.
            </p>
            <p className="font-light flex items-center">
              <span className="font-bold">
                <BsChevronRight />
              </span>
              Customer care available 24/7
            </p>
            <p className="font-light flex items-center">
              <span className="font-bold">
                <BsChevronRight />
              </span>
              Free travel insurance
            </p>
            <p className="font-light flex items-center">
              <span className="font-bold">
                <BsChevronRight />
              </span>
              Hand picked tours and activities
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourDetails;
