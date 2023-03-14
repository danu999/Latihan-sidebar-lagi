import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

function Grafic() {
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
        label: "Grafik Laba Rugi",
        data: [
          2000000, 3000000, 2500000, 4000000, 3500000, 6000000, 4000000,
          3000000, 4100000, 3000000, 4000000, 3000000,
        ],
        backgroundColor: "transparent",
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
    <div className="App" style={{ width: "700px", height: "500px", paddingTop: "7rem" }}>
      <Line data={data}>Hello</Line>
    </div>
  );
}

export default Grafic;
