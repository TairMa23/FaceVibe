import * as React from "react";
import { Radar as RadarChart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { useEmotionStore } from "../../store/useEmotionStore";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// Define custom text for each label
const customTexts: { [key: string]: string } = {
  Bohemian:
    "Bohemian style is characterized by its artistic and eclectic look.",
  minimalistic: "Minimalistic style focuses on simplicity and functionality.",
  Industrial:
    "Industrial style embraces raw materials and a factory-inspired look.",
  Rustic: "Rustic style brings a natural and cozy feel with earthy elements.",
  Vintage: "Vintage style adds a sense of nostalgia with retro elements.",
  Classic: "Classic style features timeless designs and elegance.",
  Modern: "Modern style emphasizes clean lines and contemporary aesthetics.",
};

const Radar: React.FC = () => {
  const stylePercentages = useEmotionStore((state) => state.stylePercentages);

  const labels = Object.keys(stylePercentages);
  const data = Object.values(stylePercentages);
  const radarData = {
    labels,
    datasets: [
      {
        label: "Styles",
        data,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };
  const radarOptions = {
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 10,
        },
        pointLabels: {
          font: {
            size: 16, // Adjust the font size as needed
          },
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.label || "";
            return (
              customTexts[label] || `No description available for ${label}`
            );
          },
        },
      },
    },
  };
  return (
    <div>
      <h2>Design Styles Analysis</h2>
      <RadarChart data={radarData} options={radarOptions} />
    </div>
  );
};

export default Radar;
