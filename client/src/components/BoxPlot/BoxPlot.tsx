import * as React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart as ChartJSComponent } from 'react-chartjs-2';
import boxPlotData from './shared-ch-box-plot-data.json';
import { BoxPlotData } from './types';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Tooltip, Legend);

const processData = (data: BoxPlotData[]) => {
  return data.map((item) => ({
    x: item.year,
    y: [
      item.lower,
      item.q1,
      item.median,
      item.q3,
      item.upper,
    ],
  }));
};

const data = boxPlotData as BoxPlotData[];

const chartData = {
  labels: data.map((item) => item.year),
  datasets: [
    {
      label: 'Monthly Mean Temperatures (°F)',
      data: processData(data),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const chartOptions = {
  plugins: {
    legend: {
      display: true,
    },
    tooltip: {
      mode: 'index' as const,
      intersect: false,
    },
  },
  responsive: true,
  scales: {
    x: {
      title: {
        display: true,
        text: 'Year',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Temperature (°F)',
      },
    },
  },
};

const BoxPlot: React.FC = () => (
  <div>
    <h2>Monthly Mean Temperatures (°F)</h2>
    <ChartJSComponent type="bar" data={chartData} options={chartOptions} />
  </div>
);

export default BoxPlot;
