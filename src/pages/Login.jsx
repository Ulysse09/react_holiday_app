import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [passWord, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  // const [isLoading,setIsLoading] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      url: "https://holiday-api-zj3a.onrender.com/auth/login",
      data: {
        email: email,
        password: passWord,
      },
    })
      .then((response) => {
        console.log(response);

        toast.success(success.message);

        localStorage.setItem("token", response.data.access_token);
        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);

        toast.error(error.message);
      });

    setEmail("");

    setPassword("");
  };
  return (
    <div className="container mx-auto">
      <ToastContainer />
      <div className="">
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
      <div></div>
    </div>
  );
};

export default Login;
