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
  ChartOptions,
} from 'chart.js';
import { Chart as ChartJSComponent } from 'react-chartjs-2';
import boxPlotData from './shared-ch-box-plot-data.json';
import { BoxPlotData } from './types';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Tooltip, Legend);

const processData = (data: BoxPlotData[]) => {
  return data.map((item) => ({
    x: item.Image,
    y: [
      item.lower,
      item.upper,
    ],
  }));
};

const data = boxPlotData as BoxPlotData[];

const chartData = {
  labels: data.map((item) => item.Image),
  datasets: [
    {
      label: 'Time',
      data: processData(data),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const chartOptions: ChartOptions<'bar'> = {
  plugins: {
    legend: {
      display: true,
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
  responsive: true,
  scales: {
    x: {
      title: {
        display: true,
        text: 'Image',
        font: {
          size: 16, // גודל הכתב של כותרת ציר ה-X
        },
      },
      ticks: {
        font: {
          size: 14, // גודל הכתב של המספרים בציר ה-X
        },
      },
    },
    y: {
      title: {
        display: true,
        text: 'Time (seconds)',
        font: {
          size: 16, // גודל הכתב של כותרת ציר ה-Y
        },
      },
      min: 0,
      max: 120,
      ticks: {
        stepSize: 5,
        callback: function(value) {
          return value;
        },
        font: {
          size: 14, // גודל הכתב של המספרים בציר ה-Y
        },
      },
    },
  },
};

const BoxPlot: React.FC = () => (
  <div style={{ width: '700px', height: '700px' }}> {/* שינוי רוחב וגובה המיכל */}
    <h2>Image dwell time</h2>
    <ChartJSComponent type="bar" data={chartData} options={chartOptions} />
  </div>
);

export default BoxPlot;
