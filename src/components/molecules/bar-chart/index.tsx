import React, {useState, useEffect} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const dataset1Data = [300, 450, 600, 800, 550, 700, 900];
const dataset2Data = [450, 600, 750, 900, 650, 800, 1000];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: dataset1Data,
      backgroundColor: '#545de4',
    },
    {
      label: 'Dataset 2',
      data: dataset2Data,
      backgroundColor: '#929ae1',
    },
  ],
};

export default function BarChart() {
  const [chartWidth, setChartWidth] = useState(550);

  useEffect(() => {
    const handleResize = () => {
      setChartWidth(window.innerWidth * 0.8);
    };

    setChartWidth(window.innerWidth * 0.8);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Bar
      options={options}
      data={data}
      width={chartWidth}
      height={240}
    />
  );
}
