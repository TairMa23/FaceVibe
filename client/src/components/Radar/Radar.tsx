import * as React from 'react';
import { Radar as RadarChart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import data from './shared-ch-radar-data.json';
import { RadarData } from './types';

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
  Bohemian: "Bohemian style is characterized by its artistic and eclectic look.",
  minimalistic: "Minimalistic style focuses on simplicity and functionality.",
  Industrial: "Industrial style embraces raw materials and a factory-inspired look.",
  Rustic: "Rustic style brings a natural and cozy feel with earthy elements.",
  Vintage: "Vintage style adds a sense of nostalgia with retro elements.",
  Classic: "Classic style features timeless designs and elegance.",
  Modern: "Modern style emphasizes clean lines and contemporary aesthetics."
};

const chartData: RadarData[] = data;

const radarData = {
  labels: chartData.map((item) => item.name),
  datasets: [
    {
      label: 'Styles',
      data: chartData.map((item) => item.pre),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
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
          size: 16,  // Adjust the font size as needed
        }
      }
    }
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: (context: any) => {
          const label = context.label || '';
          return customTexts[label] || `No description available for ${label}`;
        }
      }
    }
  }
};

const Radar: React.FC = () => {
  return (
    <div>
      <h2>Design Styles Analysis</h2>
      <RadarChart
        data={radarData}
        options={radarOptions}
      />
    </div>
  );
};

export default Radar;
