"use client";

import CoursesTable from "@/components/UI/tables/CoursesTable";
import { courseData } from "@/constants/VideosData.data";

export default function CoursesPage() {
  return (
    <div>
      <h2 className="my-6 text-2xl font-bold">Courses</h2>
      <div className="box-content">
        <CoursesTable searchTerm={""} courses={courseData} />
      </div>
    </div>
  );
}
