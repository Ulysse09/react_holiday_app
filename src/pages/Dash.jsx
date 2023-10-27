import React from "react";
import { BsPencilFill } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";

const Dash = () => {
  return (
    <>
      <div className="container mx-auto flex md:flex-row flex-col items-center space-y-4 md:space-x-20 p-10 justify-evenly">
        <div className=" bg-blue-400 p-[5rem] rounded-lg   ">
          <p className="text-white text-6xl font-bold">3800$</p>
        </div>
        <div className=" bg-green-400 p-[5rem] rounded-lg">
          <p className="text-white text-6xl font-bold">120 users</p>
        </div>
        <div className=" bg-yellow-400 p-[5rem] rounded-lg">
          <p className="text-white text-6xl font-bold">200 tours</p>
        </div>
      </div>
    </>
  );
};

export default Dash;
