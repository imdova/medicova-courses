export interface SeriesData {
  name: string;
  data: number[];
  color?: string; // Optional property
}

export const seriesTotalStudent: SeriesData[] = [
  {
    name: "Total Students",
    data: [30, 40, 45, 50, 49, 60],
    // color: "#3269D3", // Uncomment if needed
  },
];
export const seriesForEarning: SeriesData[] = [
  {
    name: "Total Students",
    data: [30, 40, 45, 50, 49, 60, 87, 55, 62, 50, 40, 64],
    // color: "#3269D3", // Uncomment if needed
  },
];
