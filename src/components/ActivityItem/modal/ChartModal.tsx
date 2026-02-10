import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { FaTimes } from "react-icons/fa";
import "./chartmodal.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
);

interface ChartModalProps {
  isOpen: boolean;
  onClose: () => void;
  trackData: {
    title: string;
    streams: string;
    amount: string;
    history: number[]; // Array of numbers for Chart.js
  } | null;
}

const ChartModal: React.FC<ChartModalProps> = ({
  isOpen,
  onClose,
  trackData,
}) => {
  if (!isOpen || !trackData) return null;

  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        fill: true,
        label: "Earnings",
        data: trackData.history,
        borderColor: "#a855f7",
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(168, 85, 247, 0.4)");
          gradient.addColorStop(1, "rgba(168, 85, 247, 0)");
          return gradient;
        },
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#a855f7",
        pointBorderColor: "#131720",
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1c222d",
        padding: 12,
        cornerRadius: 8,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#666" },
      },
      y: {
        grid: { color: "rgba(255, 255, 255, 0.05)" },
        ticks: { color: "#666" },
      },
    },
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-icon" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="modal-header">
          <h3>{trackData.title}</h3>
          <p>Weekly Performance</p>
        </div>

        <div className="chart-body" style={{ height: "250px" }}>
          <Line data={chartData} options={options} />
        </div>

        <div className="modal-stats">
          <div className="stat">
            <span>Streams</span>
            <strong>{trackData.streams}</strong>
          </div>
          <div className="stat">
            <span>Revenue</span>
            <strong>₹{trackData.amount}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartModal;
