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
        label: "Arus Kas-1 2023",
        data: [
          2000000, 3000000, 2500000, 4000000, 3500000, 6000000, 4000000,
          3000000, 4100000, 3000000, 4000000, 3000000,
        ],
        
        backgroundColor: "#e6e5e1",
        borderColor: "#2eb94c",
        tension: 0.2,
        fill: true,
        pointStyle: "ref.current",
        pointBorderColor: "black",
        pointBackgroundColor: "#ffcf00",
        showLine: true,
        
      },
      {
        label: "Arus Kas-2 2023",
        data: [
          1000000, 4000000, 1500000, 2500000, 1500000, 2000000, 1500000,
          1000000, 2100000, 2000000, 2500000, 1500000,
        ],
        
        backgroundColor: "#e6e5e1",
        borderColor: "green",
        tension: 0.2,
        fill: true,
        pointStyle: "ref.current",
        pointBorderColor: "black",
        pointBackgroundColor: "#ffcf00",
        showLine: true,
        
      },
    ],
  });

  const options = {};

  return (
    <div
      className="App"
      style={{
        width: "700px",
        height: "500px",
        paddingTop: "7rem",
        position: "absolute",
        marginLeft: "52rem",
      }}
    >
      <Typography style={{ fontSize: "1.7rem" }}>Grafik Arus Kas</Typography>
      <Line data={data} options={options}></Line>
    </div>
  );
}

export default App;
