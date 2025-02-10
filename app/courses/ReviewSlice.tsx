import Image from "next/image";
import avatar from "@/assets/images/image-1.jpg";
import Rating from "@/components/UI/Rating";

const ReviewSlice: React.FC = () => {
  return (
    <ul className="box-content !p-6">
      <li className="py-5 border-b">
        <span className="block mb-3 text-secondary">Nov 7, 2023</span>
        <Rating rating={4} size={10} />
        <div className="flex gap-3 items-center my-4">
          <div className="w-12 h-12 overflow-hidden rounded-full">
            <Image src={avatar} alt="Avater" />
          </div>
          <h2 className="font-semibold">Michael T.</h2>
        </div>
        <div>
          <span className="block mb-2 text-secondary">Marketing Director</span>
          <p>
            Sam.AI truly values its employees and their well-being. From
            flexible work hours to regular team-building activities, the company
            goes above and beyond to create a supportive and inclusive
            environment.
          </p>
        </div>
      </li>
      <li className="py-5 border-b">
        <span className="block mb-3 text-secondary">Nov 7, 2023</span>
        <Rating rating={4} size={10} />
        <div className="flex gap-3 items-center my-4">
          <div className="w-12 h-12 overflow-hidden rounded-full">
            <Image src={avatar} alt="Avater" />
          </div>
          <h2 className="font-semibold">Michael T.</h2>
        </div>
        <div>
          <span className="block mb-2 text-secondary">Marketing Director</span>
          <p>
            Sam.AI truly values its employees and their well-being. From
            flexible work hours to regular team-building activities, the company
            goes above and beyond to create a supportive and inclusive
            environment.
          </p>
        </div>
      </li>
      <li className="py-5">
        <span className="block mb-3 text-secondary">Nov 7, 2023</span>
        <Rating rating={3} size={10} />
        <div className="flex gap-3 items-center my-4">
          <div className="w-12 h-12 overflow-hidden rounded-full">
            <Image src={avatar} alt="Avater" />
          </div>
          <h2 className="font-semibold">Michael T.</h2>
        </div>
        <div>
          <span className="block mb-2 text-secondary">Marketing Director</span>
          <p>
            Sam.AI truly values its employees and their well-being. From
            flexible work hours to regular team-building activities, the company
            goes above and beyond to create a supportive and inclusive
            environment.
          </p>
        </div>
      </li>
    </ul>
  );
};
export default ReviewSlice;
