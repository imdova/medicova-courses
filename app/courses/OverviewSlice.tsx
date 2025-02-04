import Accordion from "@/components/UI/Accordion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const OverviewSlice: React.FC = () => {
  const accordionData = [
    {
      title: "Introduction",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Medical Terminology",
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "Medical Neuroscience",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Become an EMT",
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-3">Course Description</h2>
      <p className="text-secondary mb-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. 
      </p>
      <h2 className="text-2xl font-semibold mb-3">
        What you'll learn in this course?
      </h2>
      <p className="text-secondary mb-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.
      </p>
      <div className="mb-4">
        <Accordion items={accordionData} />
      </div>
      <p className="text-secondary mb-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.
      </p>
    </div>
  );
};
export default OverviewSlice;
