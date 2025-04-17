"use client";
import StudentsTable from "@/components/UI/Tables/StudentsTable";

export default function StudentsPage() {
  return (
    <div>
      <h2 className="my-6 text-2xl font-bold">Students</h2>
      <div className="box-content">
        <StudentsTable />
      </div>
    </div>
  );
}
