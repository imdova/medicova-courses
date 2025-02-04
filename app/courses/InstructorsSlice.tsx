import Image from "next/image";
import avatar from "@/assets/images/image-1.jpg";
import { FileVideo, SquareChartGantt, Star, UsersRound } from "lucide-react";

const InstructorsSlice: React.FC = () => {
  return (
    <div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">DR/ Mohamed Farag</h2>
        <span className="text-secondary">micrographic surgery</span>
      </div>
      <div className="flex gap-5 mb-5">
        <div className="w-24 h-24 overflow-hidden rounded-full">
          <Image src={avatar} alt="Avater" />
        </div>
        <ul>
          <li className="flex items-center gap-2 font-semibold mb-2">
            <Star size={16} />
            <span className="text-sm">4.6 Instructor Rating</span>
          </li>
          <li className="flex items-center gap-2 font-semibold mb-2">
            <SquareChartGantt size={16} />
            <span className="text-sm">1,883 Reviews</span>
          </li>
          <li className="flex items-center gap-2 font-semibold mb-2">
            <UsersRound size={16} />
            <span className="text-sm">15,552 Students</span>
          </li>
          <li className="flex items-center gap-2 font-semibold mb-2">
            <FileVideo size={16} />
            <span className="text-sm">10 Course</span>
          </li>
        </ul>
      </div>
      <p className="text-secondary mb-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.
      </p>
    </div>
  );
};
export default InstructorsSlice;
