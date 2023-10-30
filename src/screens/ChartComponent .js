import React, { useRef, useEffect } from "react";
import Chart from "chart.js"; // Import Chart.js

const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Define your chart data and options
    const chartData = {
      labels: ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"],
      datasets: [
        {
          label: "Data",
          data: [65, 59, 80, 81, 56, 55,65, 59, 80, 81, 56, 55],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(75, 192, 192, 0.4)",
          hoverBorderColor: "rgba(75, 192, 192, 1)",
        },
      ],
    };

    const chartOptions = {
      scales: {
        x: {
          type: "category", // Use 'category' scale for the x-axis
          beginAtZero: true,
        },
        y: {
          beginAtZero: true,
        },
      },
    };

    // Check if there's an existing chart and destroy it
    if (window.myChart) {
      window.myChart.destroy();
    }

    // Create a new chart
    window.myChart = new Chart(ctx, {
      type: "bar",
      data: chartData,
      options: chartOptions,
    });

    // Clean up when the component unmounts
    return () => {
      if (window.myChart) {
        window.myChart.destroy();
      }
    };
  }, []);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ChartComponent;
