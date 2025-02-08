import { Suspense } from "react";
import CoursesList from "./CourseList";

const CoursesPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading courses...</div>}>
      <CoursesList />
    </Suspense>
  );
};
export default CoursesPage;
