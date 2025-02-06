const courseFilter = {
  Category: [
    { label: "Business", count: 12, value: "business" },
    { label: "Technology", count: 15, value: "technology" },
    { label: "Healthcare", count: 8, value: "healthcare" },
    { label: "Design", count: 10, value: "design" },
    { label: "Marketing", count: 7, value: "marketing" },
  ],
  Level: [
    { label: "Beginner", count: 20, value: "beginner" },
    { label: "Intermediate", count: 15, value: "intermediate" },
    { label: "Advanced", count: 10, value: "advanced" },
  ],
  "Course Type": [
    { label: "Online", count: 25, value: "online" },
    { label: "In-person", count: 10, value: "in_person" },
    { label: "Hybrid", count: 5, value: "hybrid" },
  ],
  Duration: [
    { label: "Less than a month", count: 8, value: "less_than_month" },
    { label: "1-3 months", count: 14, value: "one_to_three_months" },
    { label: "3-6 months", count: 12, value: "three_to_six_months" },
    { label: "6+ months", count: 6, value: "six_plus_months" },
  ],
  "Price Range": [
    { label: "Free", count: 10, value: "free" },
    { label: "$1 - $100", count: 12, value: "1_100" },
    { label: "$100 - $500", count: 15, value: "100_500" },
    { label: "$500 or above", count: 6, value: "500_above" },
  ],
  Rating: [
    { label: "1 Star & Up", count: 3, value: "1_star_up" },
    { label: "2 Stars & Up", count: 5, value: "2_star_up" },
    { label: "3 Stars & Up", count: 12, value: "3_star_up" },
    { label: "4 Stars & Up", count: 18, value: "4_star_up" },
    { label: "5 Stars", count: 10, value: "5_stars" },
  ],
};

export default courseFilter;
