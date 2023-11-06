import React, { useState } from "react";
import pic from "../assets/10002.jpg";
import picc from "../assets/10003.jpg";
import piccc from "../assets/10004.jpg";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";

const TourList = () => {
  const TourCard = ({ tour }) => {
    const { title, Price, backdropImage, description, destination, _id } = tour;

    return (
      <div className="flex flex-col items-start md:w-1/3    py-8   ">
        <div className="  ">
          <img
            className="bg-cover  w-fit h-[20rem]    "
            src={backdropImage}
            alt={title}
          />
        </div>

        <div className="tour-info flex flex-col text-left  items-start  space-x-4 border-l-secondary border-l-4">
          <h2 className="font-semibold text-left text-2xl  bg-secondary transform translate-x-2 p-2 translate-y-[-1rem]   text-white">
            {destination}
          </h2>
          <p className="tour-description max-w-2xl  font-semibold  text-left">
            {description}
          </p>
          <p className="tour-description max-w-2xl    font-light  text-left">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove.
          </p>
          <div className="flex space-x-12">
            <p className="tour-price text-3xl font-bold">{Price} $</p>
            <Link to={`/tourDetails/${_id}`}>
              <button className="px-4 py-2 bg-secondary text-white rounded-lg">
                Book now{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const TourListMain = () => {
    const [tours, setTours] = useState([]);
    let token = localStorage.getItem("token");

    axios({
      method: "GET",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour/",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response.data);
        setTours(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // tours = [
    //   {
    //     id: 1,
    //     title: "Greece",
    //     description:
    //       "Holiday Planners is a World Leading Online Tour Booking Platform.",
    //     price: "$100",
    //     image: pic,
    //   },
    //   {
    //     id: 2,
    //     title: "Jerusalem",
    //     description:
    //       "Holiday Planners is a World Leading Online Tour Booking Platform.",
    //     price: "$120",
    //     image: picc,
    //   },
    //   {
    //     id: 3,
    //     title: "Italy",
    //     description:
    //       "Holiday Planners is a World Leading Online Tour Booking Platform.",
    //     price: "$90",
    //     image: piccc,
    //   },
    //   {
    //     id: 4,
    //     title: "Santorini",
    //     description:
    //       "Holiday Planners is a World Leading Online Tour Booking Platform.",
    //     price: "$100",
    //     image: pic,
    //   },
    // ];

    return (
      <>
        <div className=" md:py-8 md:px-8">
          <div className=" flex flex-wrap space-x-4 justify-evenly  p-0     ">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="  text-center mb-10 md:px-8 py-52 md:p-40">
        <div className="bg-image1" />
        <p className="font-bold font-body md:text-7xl text-4xl py-2 px-2 text-white container mx-auto ">
          Tour list
        </p>
      </div>

      <div className="container md:flex-row flex-col flex mx-auto   relative">
        <div className="md:w-2/3 flex justify-evenly px-4 flex-col  md:mt-12 mt-[14rem] ">
          <div className="mt-0">
            <form
              action=""
              className="flex flex-col md:justify-center  space-y-4 md:flex-row  "
            >
              <div className=" border md:rounded-l-lg mr-0 py-2 mt-[1rem] px-20 md:px-16 text-center justify-center  border-black">
                <label htmlFor="" className="font-bold  h-[19px] ">
                  Sort by:
                </label>
              </div>
              <div className=" border md:border-l-0  ml-0 py-2 px-14 justify-center text-center border-black">
                {/* <label htmlFor=""></label> */}
                <select name="" id="" className="flex text-center ">
                  <option value="">Release date</option>
                </select>
              </div>
              <div className=" border md:rounded-r-lg md:border-l-0 px-20 text-center  py-2 md:px-16 border-black">
                <select name="" id="">
                  <option value="">Descending</option>
                  <option value="">Ascending</option>
                </select>
              </div>
            </form>
          </div>

          <TourListMain />
        </div>
        <div className="md:w-1/3 flex-col flex space-y-6 mb-10 mt-24">
          <div className="flex flex-col p-4 shadow-xl md:transform md:translate-y-[-8.5rem]  bg-white  ">
            <h2 className="font-bold  text-2xl pl-4 flex justify-start ml-8 border-l-4 mb-4 md:mb-0 border-secondary">
              FIND YOUR TOUR
            </h2>
            <form
              action="/"
              method="get"
              id="form"
              class="flex flex-col space-y-4 md:p-8 "
            >
              <div className="flex flex-col space-y-8 justify-center   container ">
                <div className="flex flex-col">
                  <input
                    type="text"
                    id="name1"
                    class="border-2 border-black rounded-lg p-4 text-black "
                    placeholder="Search tour"
                  />
                </div>

                <div className="flex flex-col">
                  <input
                    type="email"
                    id="email"
                    class="border-2  border-black rounded-lg p-4 text-black"
                    placeholder="Where to?"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold">
                    Duration
                  </label>
                  <input
                    type="date"
                    className=" border-black  border-2 rounded-lg p-4"
                  />
                </div>

                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-semibold">
                      Min price
                    </label>
                    <input
                      type="text"
                      className="w-1/2   border-black  border-2 rounded-lg px-14 py-4"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-semibold">
                      Max price
                    </label>
                    <input
                      type="text"
                      className="w-1/2  border-black  border-2 rounded-lg px-14 py-4"
                    />
                  </div>
                </div>

                <div className="flex space-x-4 text-2xl items-center">
                  <input
                    type="checkbox"
                    className="py-44 text-7xl w-12 h-8 px-8 rounded-lg"
                    name=""
                    id=""
                  />
                  <p>Cultural</p>
                </div>

                <div className="flex space-x-4 text-2xl items-center">
                  <input
                    type="checkbox"
                    className="py-44 text-7xl w-12 h-8 px-8 rounded-lg"
                    name=""
                    id=""
                  />
                  <p> Adventure</p>
                </div>

                <div className="flex space-x-4 text-2xl items-center">
                  <input
                    type="checkbox"
                    className="py-44 text-7xl w-12 h-8 px-8 rounded-lg"
                    name=""
                    id=""
                  />
                  <p> Historical</p>
                </div>

                <div className="flex space-x-4 text-2xl items-center">
                  <input
                    type="checkbox"
                    className="py-44 text-7xl w-12 h-8 px-8 rounded-lg"
                    name=""
                    id=""
                  />
                  <p> Seaside</p>
                </div>

                <div className="flex space-x-4 text-2xl items-center">
                  <input
                    type="checkbox"
                    className="py-44 text-2xl w-12 h-8 px-8 rounded-lg"
                    name=""
                    id=""
                  />
                  <p> Discovery</p>
                </div>

                <button className="px-6 bg-secondary text-white py-4 rounded-lg text-xl">
                  Find now
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

          <div className="bg-secondary bg-idea p-8 pb-20   px-14 space-y-2 flex flex-col items-start text-center text-white   ">
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

export default TourList;
