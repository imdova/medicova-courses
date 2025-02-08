import Accordion from "@/components/UI/Accordion";

const CurriculumSlice: React.FC = () => {
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
      <div className="mb-4">
        <Accordion items={accordionData} />
      </div>
    </div>
  );
};
export default CurriculumSlice;
