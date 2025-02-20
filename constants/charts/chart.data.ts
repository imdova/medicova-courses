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
export const seriesCourses: SeriesData[] = [
  {
    name: "Total Courses",
    data: [30, 20, 88, 50, 1, 60],
  },
];
export const seriesPrepaid: SeriesData[] = [
  {
    name: "Total Prepaid",
    data: [40, 90, 30, 50, 1, 100],
  },
];
export const seriesForEarning: SeriesData[] = [
  {
    name: "Earning",
    data: [30, 40, 45, 50, 49, 60, 87, 55, 62, 50, 40, 64],
  },
];
