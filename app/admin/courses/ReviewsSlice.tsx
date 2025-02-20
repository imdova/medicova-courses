import Rating from "@/components/UI/Rating";
import Image from "next/image";

const ReviewsSlice = () => {
  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center mb-4 gap-3">
          <div>
            <Image
              className="object-cover w-10 h-10 rounded-2xl "
              src="https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740"
              width={90}
              height={90}
              alt="user image"
            />
          </div>
          <div>
            <span>Heba Ahmed</span>
            <div className="flex gap-1">
              <span>5.0</span>
              <Rating rating={5} size={10} />
              <span className="text-secondary text-sm border-l pl-2">
                1 month Ago
              </span>
            </div>
          </div>
        </div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="mb-6">
        <div className="flex items-center mb-4 gap-3">
          <div>
            <Image
              className="object-cover w-10 h-10 rounded-2xl "
              src="https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740"
              width={90}
              height={90}
              alt="user image"
            />
          </div>
          <div>
            <span>Heba Ahmed</span>
            <div className="flex gap-1">
              <span>5.0</span>
              <Rating rating={5} size={10} />
              <span className="text-secondary text-sm border-l pl-2">
                1 month Ago
              </span>
            </div>
          </div>
        </div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};
export default ReviewsSlice;
