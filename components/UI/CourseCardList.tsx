import Image from "next/image";
import Rating from "./Rating";
import { Earth, ShoppingCart, Video } from "lucide-react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addItem } from "@/store/slices/cartSlice";
import { useEffect, useState } from "react";
import CustomAlert from "./CustomAlert";
import { CourseType } from "@/types/courses";

const CourseCardList: React.FC<CourseType> = ({
  id,
  image,
  title,
  rating,
  instructor,
  status,
  price,
  description,
}) => {
  const [cartIsActive, setCartIsActive] = useState("");
  const [alert, setAlert] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const dispatch = useAppDispatch();
  const { courses } = useAppSelector((state) => state.cart);
  // Update when active in Cart
  useEffect(() => {
    const foundCourse = courses.find((item) => item.id === id);
    if (foundCourse) {
      setCartIsActive("active");
    }
  }, [courses, id]);

  // Show Alert Function
  const showAlert = (message: string, type: "success" | "error") => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 3000); // Hide after 3 seconds
  };

  // Add to Cart Function
  const addToCart = () => {
    if (!cartIsActive) {
      dispatch(addItem({ id, title, price, image, description }));
      showAlert("Added to cart!", "success");
    } else {
      showAlert("Already in cart!", "error");
    }
  };

  return (
    <>
      {/* Global Alert Display */}
      {alert && (
        <CustomAlert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}
      <div className="relative p-5 bg-[#f7f7f7] rounded-lg">
        <div className="flex justify-between items-center gap-4  ">
          <Link
            className="flex justify-between items-center gap-8"
            href={`courses/${id}`}>
            <div className="w-[150px] overflow-hidden rounded-md mr-3 h-24">
              <Image
                className="w-full h-full object-cover"
                src={image}
                alt="image-content"
                width={400}
                height={400}
              />
            </div>
            <div className="">
              <h1 className="mb-3 font-semibold">{title}</h1>
              <div className="flex f gap-1">
                <Rating rating={rating} size={10} />
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-2 mb-3">
                <Image
                  className="w-9 h-9 rounded-full"
                  width={90}
                  height={90}
                  src={instructor.image}
                  alt="instructor"
                />
                <span className="text-xs">{instructor.name}</span>
              </div>
            </div>
            {status === "Online" && (
              <span className="flex items-center gap-3 px-3 py-2 rounded-full ">
                <Earth size={15} />
                <span className="text-xs ">Online</span>
              </span>
            )}
            {status === "Recorded" && (
              <span className="flex items-center gap-3 px-3 py-2 rounded-full ">
                <Video size={15} />
                <span className="text-xs ">Recorded</span>
              </span>
            )}
          </Link>
          <div className="flex justify-between items-center gap-8  mb-3">
            <span className="flex items-center gap-1 font-semibold text-prbg-primary ">
              ${price}
            </span>
            <div>
              <button
                onClick={addToCart}
                className={`flex justify-center items-center w-10 h-10 rounded-2xl border text-secondary hover:text-primary hover:border-primary link-smooth ${
                  cartIsActive ? "bg-[#bbf7d0] !text-primary border-none" : ""
                }`}>
                <ShoppingCart size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCardList;
