import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "tailwindcss/tailwind.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

export default function ComparisonGraph({ userPercentile, avgPercentile }) {
  const data = {
    labels: ["Average", "You"],
    datasets: [
      {
        label: "Percentile Comparison",
        data: [avgPercentile, userPercentile],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        pointBackgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `Percentile: ${context.raw}%`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Student Comparison",
          color: "#6B7280",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Percentile (%)",
          color: "#6B7280",
        },
      },
    },
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg mt-4">
      <h3 className="text-2xl font-bold text-center mb-4">
        Percentile Comparison
      </h3>
      <Line data={data} options={options} />
    </div>
  );
}
