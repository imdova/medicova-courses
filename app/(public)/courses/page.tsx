import { Suspense } from "react";
import CoursesList from "./CourseList";

const CoursesPage: React.FC = () => {
  return (
    <Suspense>
      <CoursesList />
    </Suspense>
  );
};
export default CoursesPage;
