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

// רשימת כל הרגשות עם ערך ברירת מחדל של 0
const defaultEmotions = {
  happy: 0,
  surprise: 0,
  angry: 0,
  disgust: 0,
  fear: 0,
  sad: 0,
  neutral: 0,
};

const processData = (data: { [key: string]: number }) => {
  return Object.keys(defaultEmotions).map((emotion) => ({
    x: emotion,
    y: data[emotion] || defaultEmotions[emotion],
  }));
};

const BoxPlot: React.FC = () => {
  const emotionPercentages = useEmotionStore(
    (state) => state.emotionPercentages
  );

  const chartData = {
    labels: Object.keys(defaultEmotions), // תמיד נציג את כל הרגשות
    datasets: [
      {
        label: "Emotion ",
        data: processData(emotionPercentages || defaultEmotions), // נשתמש בנתונים אם קיימים
        backgroundColor: "rgba(175, 195, 242, 0.2)",
        borderColor: "rgba(175, 195, 242, 1)",
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
            size: 18,
            weight: "bold",
            family: "'Josefin Sans', sans-serif",
          },
        },
        ticks: {
          font: {
            size: 14,
            family: "'Josefin Sans', sans-serif",
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Percentage (%)",
          font: {
            size: 18,
            weight: "bold",
            family: "'Josefin Sans', sans-serif",
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
            size: 18,
            family: "'Josefin Sans', sans-serif",
          },
        },
      },
    },
  };

  return (
    <div
      style={{
        width: "115%",
        marginTop: "100px",
      }}
    >
      <h2 className="fnt font-bold text-3xl py-1 text-my-Blue dark:text-dark-text">
        Emotion Percentages <br />
      </h2>
      <span className="text-m font-bold text-textBlue fnt dark:text-dark-text">
        showing the percentage distribution of emotions expressed by users while
        viewing images
      </span>
      <span className="text-m font-bold text-textBlue fnt dark:text-dark-text ">
        <ChartJSComponent type="bar" data={chartData} options={chartOptions} />
      </span>
    </div>
  );
};

export default BoxPlot;
