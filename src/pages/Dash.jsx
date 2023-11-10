import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import Statscard from "../components/statsCard";
import { useState } from "react";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dash = () => {
  const [bookings, setBookings] = useState([]);
  const [tours, setTours] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    let token = localStorage.getItem("token");

    axios({
      method: "GET",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/users",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  //fetchTours
  const fetchTours = () => {
    let token = localStorage.getItem("token");
    console.log(token, "token");

    axios({
      method: "GET",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour/",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setTours(response.data);
        console.log(response);
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  // make chart dynamic
  const fetchChart = () => {
    axios({
      method: "GET",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/count?year=2023",
    }).then((response) => {
      console.log(response.data);
      setBookings(response.data);
    });

    console.log(
      bookings.map((x) => x.count),
      "bookings"
    );
    // chart options
  };

  useEffect(() => {
    fetchChart();
    fetchTours();
    fetchUsers();
  }, []);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "December",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "number of bookings ",
        data: bookings.map((x) => x.count),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const data1 = {
    labels: bookings.map((x) => x.label),
    datasets: [
      {
        label: "# of Votes",
        data: bookings.map((x) => x.count),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="container mx-auto flex md:flex-row flex-col items-center space-y-4 md:space-x-20 pt-4 md:p-10 justify-evenly">
        {/* <div className=" bg-blue-400 p-[5rem] rounded-lg   ">
          <p className="text-white text-6xl font-bold">3800$</p>
        </div>
         */}
        <Statscard amount={tours.length} title="Tours" />
        <Statscard amount={bookings.length} title="Booking" />
        <Statscard amount={users.length} title="Users" />
      </div>
      <div className="  md:h-[20rem] w-[80vw]  flex md:flex-row flex-col justify-evenly items-center md:p-20">
        <div className="md:w-1/2 w-[75vw]      md:p-4">
          <Bar options={options} data={data} className />;
        </div>

        <div className=" md:p-20  md:w-1/2  w-[80vw] h-[75vh]  flex">
          <Doughnut data={data1} className="" />;
        </div>
      </div>
    </>
  );
};

export default Dash;
