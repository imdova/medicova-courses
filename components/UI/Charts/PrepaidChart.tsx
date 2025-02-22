"use client";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts"; // Import ApexCharts types
import { SeriesData } from "@/constants/charts/chart.data";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// Define the type for the props
interface PrepaidChartProps {
  series: SeriesData[];
}

const PrepaidChart: React.FC<PrepaidChartProps> = ({ series }) => {
  // Line chart options
  const options: ApexOptions = {
    chart: {
      id: "line-chart",
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 2,
        left: 0,
        blur: 5,
        opacity: 0.5,
        color: "#3269D3",
      },
    },
    stroke: {
      show: true,
      curve: "straight", // Smooth line curve
      width: 3,
    },
    markers: {
      size: 5,
      colors: ["#fff"],
      strokeColors: ["#3269D3"],
      strokeWidth: 2,
    },
    grid: {
      show: false,
      borderColor: "#E0E0E0",
      strokeDashArray: 5,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          colors: "#78909C",
          fontSize: "12px",
        },
      },
    },

    yaxis: {
      labels: {
        show: false,
        style: {
          colors: "#78909C",
          fontSize: "12px",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#3269D3"],
    legend: {
      show: false,
    },
  };

  return (
    <div className="m-2 overflow-hidden">
      <Chart
        options={options}
        series={series}
        type="line"
        width="100%"
        height={150}
      />
    </div>
  );
};

export default PrepaidChart;
