import React from "react";
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
        data: [20, 42, 54, 23, 45, 23],
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
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
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
        <Statscard amount="220" title="Tours" />
        <Statscard amount="240" title="Booking" />
        <Statscard amount="2200" title="Users" />
      </div>
      <div className="  md:h-[20rem]  flex md:flex-row flex-col justify-evenly items-center md:p-20">
        <div className="md:w-1/2 md:p-4">
          <Bar options={options} data={data} className="   " />;
        </div>

        <div className=" md:p-20  w-1/2  flex">
          <Doughnut data={data1} className="" />;
        </div>
      </div>
    </>
  );
};

export default Dash;
