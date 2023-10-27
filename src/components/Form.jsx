import React from "react";

const Form = () => {
  return (
    <div>
      <form
        action="/"
        method="get"
        id="form"
        class="flex flex-col space-y-4 p-8 "
      >
        <h2 className="font-bold text-3xl">Login</h2>
        <p>
          Dont have an account yet{" "}
          <span className="text-secondary">Sign up</span>
        </p>
        <div className="flex flex-col space-y-8 justify-center  md:w-1/2 container ">
          <div className="flex flex-col">
            <label htmlFor="" className="font-semibold">
              Enter your email
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              id="name1"
              class="border-2 border-black rounded-lg p-4 text-black "
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="font-semibold">
              Enter your Password
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="email"
              id="email"
              class="border-2  border-black rounded-lg p-4 text-black"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex space-x-4 items-center">
            <p>Remember me </p>
            <input type="checkbox" name="" id="" />
          </div>
          <button
            onClick={handleLogin}
            className="px-6 bg-secondary text-white py-4 rounded-lg text-xl"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
