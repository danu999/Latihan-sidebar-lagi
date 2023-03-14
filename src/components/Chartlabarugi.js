import React from "react";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Typography } from "antd";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function App() {
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
        label: "Laba Rugi",
        data: [
          2000000, 3000000, 2500000, 4000000, 3500000, 6000000, 4000000,
          3000000, 4100000, 3000000, 4000000, 3000000,
        ],
        backgroundColor: "#e6e5e1",
        borderColor: "grey",
        tension: 0.4,
        fill: true,
        pointStyle: "ref.current",
        pointBorderColor: "black",
        pointBackgroundColor: "#ffcf00",
        showLine: true,
      },
    ],
  });

  return (
    <div
      className="App"
      style={{ width: "700px", height: "500px", paddingTop: "7rem", position: "absolute" }}
    >
      <Typography style={{ fontSize: "1.5" }}>Grafik Laba Rugi</Typography>
      <Line data={data} ></Line>
    </div>
  );
}

export default App;
