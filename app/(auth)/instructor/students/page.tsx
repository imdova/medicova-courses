import LineTabs from "@/components/UI/LineTabs";
import DynamicTable from "@/components/UI/tables/DynamicTable";
import { LiveStudents, RecourdedStudents } from "@/constants/students.data";

const headTitle = [
  "Name",
  "Student ID",
  "Course Name",
  "Category",
  "Join Date",
  "Prepaid balance",
];

export default function Students() {
  // tabs data
  const tabData = [
    {
      label: "Live Course",
      content: <DynamicTable students={LiveStudents} columTitles={headTitle} />,
    },
    {
      label: "Recorded course",
      content: (
        <DynamicTable students={RecourdedStudents} columTitles={headTitle} />
      ),
    },
    {
      label: "Offline course",
      content: (
        <DynamicTable students={RecourdedStudents} columTitles={headTitle} />
      ),
    },
  ];
  return (
    <div className="box-content">
      <LineTabs tabs={tabData} />
    </div>
  );
}
