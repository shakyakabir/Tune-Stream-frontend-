import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Stream", "ADs", "Premium", "Downloads", "Subscriptions"],
  datasets: [
    {
      label: "Rs",
      data: [1200, 1900, 300, 5000, 200, 3000],
      backgroundColor: [
        "rgba(255, 99, 132, 0.4)",
        "rgba(54, 162, 235, 0.4)",
        "rgba(255, 206, 86, 0.4)",
        "rgba(75, 192, 192, 0.4)",
        "rgba(153, 102, 255, 0.4)",
        "rgba(255, 159, 64, 0.4)",
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

const options = {
  cutout: "65%",
  plugins: {
    legend: {
      position: "right",
      labels: {
        boxWidth: 12,
        padding: 15,
      },
    },
  },
};
const total = data.datasets[0].data.reduce((sum, value) => sum + value, 0);
const centerTextPlugin = {
  id: "centerText",
  beforeDraw: (chart: any) => {
    const { ctx } = chart;
    const meta = chart.getDatasetMeta(0);

    if (!meta?.data?.length) return;

    // 👇 real center of the doughnut
    const { x, y } = meta.data[0];

    ctx.save();
    ctx.font = "bold 24px Arial";
    ctx.fillStyle = "#e5e5e5";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText(total, x, y);
    ctx.restore();
  },
};

const DoughnutChart: React.FC = () => {
  return (
    <div style={{ width: "300px", height: "300px" }}>
      <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
    </div>
  );
};

export default DoughnutChart;
