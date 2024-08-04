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

const chartData: RadarData[] = data;

const radarData = {
  labels: chartData.map((item) => item.name),
  datasets: [
    {
      label: 'Market value as of 2007',
      data: chartData.map((item) => item.pre),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
     
  ],
};

 

const Radar: React.FC = () => (
  <div>
    <h2>Market Value of Major Banks  </h2>
    <RadarChart data={radarData}  />
  </div>
);

export default Radar;