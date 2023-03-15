import React from "react";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import { Typography } from "antd";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function GrafikBalok() {
  const [data, setData] = useState({
    labels: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Neraca",
        data: [65, 59, 80, 81, 56, 55, 40, 44, 66, 55, 44, 77],
        backgroundColor: "grey",
        borderColor: "yellow",
        borderWidth: 1,
      },
    ],
  });
  const options = {};

  return (
    <div
      className="Appdua"
      style={{
        width: "700px",
        height: "500px",
        paddingTop: "7rem",
        display: "inline-block",
        marginLeft: "52rem",
      }}
    >
      <Typography style={{ fontSize: "1.7rem" }}>Grafik Neraca</Typography>
      <Bar data={data} options={options} />
    </div>
  );
}

export default GrafikBalok;
