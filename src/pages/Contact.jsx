import React from "react";
import { BsChevronRight } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <div className=" flex md:flex-row   flex-col md:justify-between">
        <div class="md:w-1/2 md:px-8 w-auto ">
          <h1 className="text-secondary font-bold text-5xl ml-2 mb-10">
            Contact us
          </h1>
          <form
            action="/"
            method="get"
            id="form"
            class="flex flex-col space-y-4 md:p-8"
          >
            <div className="md:flex-row flex flex-col space-y-2 md:space-y-0  md:space-x-4">
              <input
                type="text"
                id="name1"
                class="border-2 border-black rounded-lg p-4 text-black md:w-1/2 w-auto"
                placeholder="Enter your name"
              />

              <input
                type="email"
                id="email"
                class="border-2 md:w-1/2 border-black rounded-lg p-4 text-black"
                placeholder="Enter your email"
              />
            </div>

            <div className="md:space-x-4 md:flex-row space-y-2 md:space-y-0   flex flex-col">
              <input
                type="text"
                id="name1"
                class="border-2 border-black rounded-lg p-4 text-black md:w-1/2"
                placeholder="Phone"
              />

              <input
                type="email"
                id="email"
                class="border-2 md:w-1/2 border-black rounded-lg p-4 text-black"
                placeholder="Services"
              />
            </div>

            <input
              type="message"
              class="border-2 w-auto md:w-auto text-black border-black rounded-lg py-10 px-4"
              name=""
              id="message"
              placeholder="Enter your message"
            />

            <div>
              <button
                type="submit"
                class="px-10 mt-10 py-4 bg-secondary hover:bg-black transition ease-in-out duration-300 font-Rubik text-white rounded-lg "
                id="btn1"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="md:w-1/4 flex-col flex space-y-8 mb-[5rem]">
          <div className="bg-tertiary  px-[2rem] py-[2rem] space-y-3 flex flex-col items-start text-center   ">
            <h2 className="font-bold  px-1 border-l-4 border-l-secondary text-xl mb-6">
              WHY BOOK WITH US?
            </h2>
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

          <div className="bg-secondary bg-idea p-8    px-[2rem] space-y-2 flex flex-col items-start text-center text-white   ">
            <h2 className="font-semibold text-2xl border-l-4 border-l-black px-1 text-white">
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

export default Contact;
