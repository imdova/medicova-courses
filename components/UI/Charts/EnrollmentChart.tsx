"use client";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { useState } from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface SeriesData {
  name: string;
  data: number[];
}

// Data for different time ranges
const chartData = {
  "70days": {
    categories: ["Aug 01", "Aug 10", "Aug 20", "Aug 31"],
    series: [1000, 50000, 100000, 500000],
    amount: "$51,749.00",
    date: "7th Aug",
  },
  "14days": {
    categories: ["Aug 01", "Aug 05", "Aug 10", "Aug 15"],
    series: [1000, 25000, 50000, 75000],
    amount: "$32,450.00",
    date: "15th Aug",
  },
  "1month": {
    categories: ["Jul 01", "Jul 15", "Aug 01", "Aug 15"],
    series: [1000, 100000, 300000, 600000],
    amount: "$75,200.00",
    date: "15th Aug",
  },
  "6months": {
    categories: ["Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    series: [1000, 50000, 200000, 400000, 700000, 900000],
    amount: "$112,500.00",
    date: "Aug 31",
  },
  year: {
    categories: ["Jan", "Apr", "Jul", "Oct"],
    series: [1000, 300000, 800000, 1200000],
    amount: "$245,300.00",
    date: "Dec 31",
  },
};

const timeRanges = [
  { label: "70ays", value: "70days" },
  { label: "14Days", value: "14days" },
  { label: "1Mon", value: "1month" },
  { label: "6Mon", value: "6months" },
  { label: "Year", value: "year" },
];

const EnrollmentChart = () => {
  const [activeRange, setActiveRange] = useState("70days");
  const currentData = chartData[activeRange as keyof typeof chartData];

  const series: SeriesData[] = [
    {
      name: "Enrollment",
      data: currentData.series,
    },
  ];

  const options: ApexOptions = {
    chart: {
      id: "enrollment-chart",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      dropShadow: {
        enabled: true,
        top: 5,
        left: 0,
        blur: 7,
        opacity: 0.5,
        color: "#2ba149",
      },
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#2ba149"],
    },
    fill: {
      type: "solid",
      colors: ["#2ba149"],
    },
    grid: {
      show: true,
      borderColor: "#E0E0E0",
      strokeDashArray: 5,
      position: "back",
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      categories: currentData.categories,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        style: {
          colors: "#78909C",
          fontSize: "12px",
          fontFamily: "Inter, sans-serif",
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: "#78909C",
          fontSize: "12px",
          fontFamily: "Inter, sans-serif",
        },
        formatter: (value) => {
          if (value >= 1000000) return `${(value / 1000000).toFixed(0)}m`;
          if (value >= 1000) return `${(value / 1000).toFixed(0)}k`;
          return value.toString();
        },
      },
      min: 0,
      max: Math.max(...currentData.series) * 1.2, // Add 20% padding
      tickAmount: 7,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#2ba149"],
    legend: {
      show: false,
    },
    tooltip: {
      enabled: true,
      style: {
        fontFamily: "Inter, sans-serif",
      },
      y: {
        formatter: (value) => {
          if (value >= 1000000) return `${(value / 1000000).toFixed(1)}m`;
          if (value >= 1000) return `${(value / 1000).toFixed(0)}k`;
          return value.toString();
        },
      },
    },
  };

  const handleRangeChange = (range: string) => {
    setActiveRange(range);
  };

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div className="flex flex-col justify-between items-center gap-3 mb-1 lg:flex-row">
        <h2 className="text-lg font-semibold text-gray-800">
          Enrollment And Views Over Time
        </h2>
        <div className="flex justify-center space-x-1">
          {timeRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => handleRangeChange(range.value)}
              className={`px-3 py-1 text-xs rounded-md ${
                activeRange === range.value
                  ? "bg-[#2ba149] text-white font-medium"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-hidden">
        <Chart
          options={options}
          series={series}
          type="line"
          width="100%"
          height={330}
        />
      </div>
    </div>
  );
};

export default EnrollmentChart;
