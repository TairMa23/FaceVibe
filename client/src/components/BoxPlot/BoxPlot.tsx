import * as React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Chart as ChartJSComponent } from "react-chartjs-2";
import { useEmotionStore } from "../../store/useEmotionStore";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const processData = (data: { [key: string]: number }) => {
  return Object.keys(data).map((emotion) => ({
    x: emotion,
    y: data[emotion],
  }));
};

const BoxPlot: React.FC = () => {
  const { emotionPercentages, calculateEmotionPercentages } = useEmotionStore();

  React.useEffect(() => {
    calculateEmotionPercentages();
  }, [calculateEmotionPercentages]);

  const chartData = {
    labels: Object.keys(emotionPercentages),
    datasets: [
      {
        label: "Emotion Percentages ",
        data: processData(emotionPercentages),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions: ChartOptions<"bar"> = {
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Emotion",
          font: {
            size: 16,
          },
        },
        ticks: {
          font: {
            size: 14,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Percentage (%)",
          font: {
            size: 16,
          },
        },
        min: 0,
        max: 100,
        ticks: {
          stepSize: 10,
          callback: function (value) {
            return value + "%";
          },
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "700px", height: "700px" }}>
      <h2>Emotion Percentages</h2>
      <ChartJSComponent type="bar" data={chartData} options={chartOptions} />
    </div>
  );
};

export default BoxPlot;
