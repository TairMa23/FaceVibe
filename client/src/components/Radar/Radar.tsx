import React, { useMemo } from "react";
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
  Bohemian:"style is characterized by its artistic and eclectic look.",
  Minimalistic:"style focuses on simplicity and functionality.",
  Industrial: "style embraces raw materials and a factory-inspired look.",
  Rustic: "style brings a natural and cozy feel with earthy elements.",
  Vintage: "style adds a sense of nostalgia with retro elements.",
  Classic: "style features timeless designs and elegance.",
  Modern: "style emphasizes clean lines and contemporary aesthetics.",
};

const Radar: React.FC = () => {
  const stylePercentages = useEmotionStore((state) => state.styleScores);

  const radarData = useMemo(() => {
    const labels = Object.keys(stylePercentages);
    const data = Object.values(stylePercentages);
    return {
      labels,
      datasets: [
        {
          label: "Styles",
          data,
          backgroundColor: "rgba(213, 150, 181, 0.2)",
          borderColor: "rgba(213, 150, 181, 1)",
          borderWidth: 1,
        },
      ],
    };
  }, [stylePercentages]);

  const radarOptions = useMemo(
    () => ({
      scales: {
        r: {
          min: 0,
          max: 100,
          ticks: {
            stepSize: 10,
            font: {
              size: 10,
              זfamily: "'Josefin Sans', sans-serif",
            },
          },
          pointLabels: {
            font: {
              size: 18,
              family: "'Josefin Sans', sans-serif",
            },
          },
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (context: any) => {
              const label = context.label || "";
              const value = context.raw.toFixed(2);
              return `${label}: ${value}%\n${
                customTexts[label] || `No description available for ${label}`
              }`;
            },
          },
        },
      },
    }),
    []
  );

  if (!stylePercentages || Object.keys(stylePercentages).length === 0) {
    return <div>No style data available.</div>;
  }

  return (
    <div>
      <h2 className="fnt font-bold text-3xl py-1 text-my-Blue dark:text-dark-text">
        Design Styles Analysis <br />
       </h2>
       <span className="text-m font-bold text-my-pink fnt ">
       <p>Based on {Object.keys(stylePercentages).length} different styles</p>
       </span>
      <RadarChart data={radarData} options={radarOptions} />
    </div>
  );
};

export default Radar;
