"use client";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { useState } from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface SeriesData {
  name: string;
  data: number[];
}

const chartData = {
  weekly: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    series: [1500, 3200, 2800, 5000, 6200, 7000, 4500],
    amount: "$30,200.00",
    date: "Last 7 Days",
  },
  monthly: {
    categories: [
      "Apr 01",
      "Apr 05",
      "Apr 10",
      "Apr 15",
      "Apr 20",
      "Apr 25",
      "Apr 30",
    ],
    series: [5000, 8000, 12000, 15000, 20000, 25000, 30000],
    amount: "$115,000.00",
    date: "Last 30 Days",
  },
  quartery: {
    categories: ["Feb", "Mar", "Apr"],
    series: [40000, 85000, 120000],
    amount: "$245,000.00",
    date: "Last 3 Months",
  },
};

// Time range buttons
const timeRanges = [
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
  { label: "Quartery", value: "quartery" },
];

// Mapping from button value to chartData key
const rangeToChartKey: Record<string, keyof typeof chartData> = {
  weekly: "weekly",
  monthly: "monthly",
  quartery: "quartery",
};

const RevenueGrowthChart = () => {
  const [activeRange, setActiveRange] = useState("weekly");
  const currentData = chartData[rangeToChartKey[activeRange]];

  const series: SeriesData[] = [
    {
      name: "Revenue",
      data: currentData.series,
    },
  ];

  const options: ApexOptions = {
    chart: {
      id: "revenue-chart",
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
      max: Math.max(...currentData.series) * 1.2, // 20% padding
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
      <div className="flex flex-col justify-between items-center gap-3 mb-1 md:flex-row">
        <div className="text-center md:text-start">
          <h2 className="text-lg font-semibold text-gray-800">
            Revenue GrowthChart
          </h2>
          <p className="text-sm text-secondary">
            Monthly revenue over the last 12 months
          </p>
        </div>
        <div className="flex justify-center space-x-1 p-2 rounded-md bg-gray-100">
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

export default RevenueGrowthChart;
