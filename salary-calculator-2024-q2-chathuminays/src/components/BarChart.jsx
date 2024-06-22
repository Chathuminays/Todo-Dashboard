import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const BarChart = () => {
 
 const data = {
    labels: ['High', 'Medium', 'Low'],
    datasets: [
        {
        label: 'Tasks Priorities',
        data: [12, 8, 4], // Example data
        backgroundColor: ['#FF6384', '#FFCE56', '#36A2EB'],
        borderWidth: 1,
        },
    ],
    };

    const options = {
    plugins: {
        legend: {
        display: false,
        },
    },
    scales: {
        y: {
        beginAtZero: true,
        },
    },
  };

  return (

    <>
        <div className="max-w-sm mx-auto mt-10">
        <Bar data={data} options={options} />
        <div className="mt-4 flex justify-around">
            <div className="flex items-center">
            <span className="w-4 h-4 bg-red-500 inline-block rounded-full mr-2"></span>
            High
            </div>
            <div className="flex items-center">
            <span className="w-4 h-4 bg-yellow-500 inline-block rounded-full mr-2"></span>
            Medium
            </div>
            <div className="flex items-center">
            <span className="w-4 h-4 bg-blue-500 inline-block rounded-full mr-2"></span>
            Low
            </div>
        </div>
        </div>
    </>

  )
}

export default BarChart;