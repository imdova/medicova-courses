import Accordion from "@/components/UI/Accordion";
import { curriculums } from "@/types/courses";
type Overview = {
  accordionData: curriculums[];
  description: string;
};
const OverviewSlice: React.FC<Overview> = ({ accordionData, description }) => {
  return (
    <div className="box-content !p-6">
      <h2 className="text-2xl font-semibold mb-3">Course Description</h2>
      <p className="text-secondary mb-3">{description}</p>
      <h2 className="text-2xl font-semibold mb-3">
        What youll learn in this course?
      </h2>
      <p className="text-secondary mb-3">
        Lorem Ipsumis simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.
      </p>
      <div className="mb-4">
        <Accordion items={accordionData} />
      </div>
      <p className="text-secondary mb-3">
        Lorem Ipsumis simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.
      </p>
    </div>
  );
};
export default OverviewSlice;
