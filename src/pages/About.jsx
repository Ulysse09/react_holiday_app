import React from "react";
import pic from "../assets/images/plae.jpg";
import air from "../assets/air1.jpg";
import air1 from "../assets/air2.jpg";

const About = () => {
  return (
    <div className="flex flex-col  md:flex-row    mx-auto container justify-between md:items-center md:px-24 mb-44   ">
      <div className="space-y-6 flex flex-col items-start  md:w-1/2 mt-24">
        <div className=" relative ]">
          <img
            className="md:h-[28rem] h-[15rem] md:w-[24rem] w-[20rem] bg-cover  border-secondary border-[0.3rem] p-1 border-spacing-[10rem] bg-center z-[-10] "
            src={air}
            alt=""
          />
          <img
            className="md:h-[10rem] h-[10rem] transform translate-x-10 md:translate-x-[4rem] w-[10rem] md:w-[14rem] bg-cover bg-center border-secondary border-[0.3rem] p-1 border-spacing-[10rem]  absolute right-0 bottom-[-4.5rem]    "
            src={air1}
            alt=""
          />
        </div>
      </div>
      <div className="md:w-1/2 space-y-8 px-4 transform translate-y-24    ">
        <h1 className="text-secondary text-3xl text-left border-l-4 border-secondary px-2 font-body">
          About us
        </h1>
        <h2 className=" font-body : text-4xl text-left ">
          Plan Your Trip with Us
        </h2>
        <p className=" font-normal text-xl  text-left ">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic
          country she had a last view back on the skyline The Big Oxmox advised
          her not to do so, because there were thousands of bad Commas, wild
          Question Marks and devious Semikoli, but the Little Blind Text didn’t
          listen. She packed her seven versalia she had a last view back on the
          skyline of her hometown
        </p>

        <button className="px-10 py-3 space-y-14  bg-secondary text-white rounded-lg font-bodyold">
          Reserve
        </button>
      </div>
    </div>
  );
};

export default About;
