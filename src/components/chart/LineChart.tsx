import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./LineChar.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       display: false,
//     },
//     title: {
//       display: true,
//       text: "Monthly Sales",
//     },
//   },
//   scales: {
//     x: {
//       grid: {
//         display: false,
//       },
//     },
//     y: {
//       min: 100,
//       max: 1000,
//       ticks: {
//         stepSize: 100, // 👈 100, 200, 300 ...
//         padding: 0,
//       },
//       grid: {
//         display: true,
//         drawBorder: false,
//         borderDash: [3, 6],
//         color: "rgba(0,0,0,0.25)",
//         lineWidth: 1,
//       },
//     },
//   },
// };
export const options = {
  responsive: true,
  maintainAspectRatio: false, // Allows the container to control height
  plugins: {
    legend: { display: false },
    title: { display: false }, // Use HTML for title (better styling)
    tooltip: {
      backgroundColor: "#1c222d",
      titleColor: "#ff4b5c",
      bodyColor: "#fff",
      padding: 12,
      cornerRadius: 8,
      displayColors: false,
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: "#a1aab3", font: { size: 11 } },
    },
    y: {
      ticks: {
        color: "#a1aab3",
        font: { size: 11 },
        callback: (value) => `$${value}`, // Adds currency or formatting
      },
      grid: {
        color: "rgba(255, 255, 255, 0.05)", // Subtle grid lines
        drawBorder: false,
      },
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
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const data = {
  labels,
  datasets: [
    // {
    //   label: "Sales",
    //   data: [300, 500, 450, 700, 650, 800, 900],
    //   borderColor: "rgb(255, 99, 132)",
    //   backgroundColor: "rgba(255, 99, 132, 0.3)",
    //   fill: true, // 👈 background fill
    //   tension: 0.4, // 👈 smooth curve
    //   pointRadius: 4,
    // },
    {
      label: "Revenue",
      data: [350, 360, 355, 360, 360, 365, 355, 360, 365, 360, 355, 360],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.3)",
      fill: true,
      tension: 0.4,
      pointRadius: 4,
    },
  ],
};

const LineChart = () => {
  return (
    <div className="chart-container">
      <div className="chart-container__header">
        <h3>Revenue Overview</h3>
        <span className="chart-period">Last 12 Months</span>
      </div>
      <div className="chart-container__body">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default LineChart;
