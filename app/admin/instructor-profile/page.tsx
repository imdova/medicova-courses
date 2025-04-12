"use client";
import CourseCardInstructor from "@/components/UI/CourseCardInstructor";
import { Courses } from "@/constants/courses.data";
import { Pen, Plus, Share2, Star, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const InstuctorProfile = () => {
  const [filter, setFilter] = useState<
    "All" | "Pharmacy" | "Health Education" | "Clinical Training"
  >("All");
  const filteredCourses =
    filter === "All"
      ? Courses
      : Courses.filter((course) => course.type === filter);
  return (
    <div className="flex gap-3">
      <div>
        <div className="relative mb-12">
          <div className="h-[500px] overflow-hidden rounded-xl border lg:h-[200px]">
            <Image
              className="absolute left-0 top-0 h-full w-full rounded-lg object-cover"
              src={
                "https://img.freepik.com/free-photo/workers-getting-back-office_23-2149161642.jpg?t=st=1741419147~exp=1741422747~hmac=c962c55238a6360ce1ad0c6022d77ed94ac7416367fe5aa1b876ec5499e1ab51&w=1380"
              }
              width={400}
              height={200}
              alt="background"
            />
            <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-[#2ba148ea]"></div>
            <div className="absolute right-5 top-5 flex flex-col gap-6 z-10">
              <button className="text-white">
                <Pen size={23} />
              </button>
              <button className="text-white">
                <Share2 size={23} />
              </button>
            </div>
            <div className="relative flex h-full flex-col items-center justify-center gap-6 p-6 text-white lg:flex-row lg:items-end lg:justify-between">
              <div className="w-[180px]"></div>
              <div>
                <h2 className="font-semibold">DR/ Michael P. M. Truong</h2>
                <span className="text-xs">instructor Title</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border">
                  <Star size={25} />
                </div>
                <div>
                  <h2 className="text-sm">4.7 (63,642)</h2>
                  <span className="text-sm">Reviews</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border">
                  <User size={25} />
                </div>
                <div>
                  <h2 className="text-sm">258</h2>
                  <span className="text-sm">Students</span>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={
              "https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?t=st=1741420991~exp=1741424591~hmac=6236bcd019232be302b130a249de451c0c9e76b439368b4830e64062e4502abe&w=740"
            }
            width={200}
            height={200}
            alt=""
            className="absolute -bottom-8 left-1/2 h-[140px] w-[140px] -translate-x-1/2 rounded-full border-4 border-white object-cover lg:left-6 lg:-translate-x-0"
          />
        </div>
        <div className="border bg-white rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">About me</h1>
            <Link
              className="flex justify-center items-center w-10 h-10 border rounded-md "
              href={"#"}
            >
              <Pen size={15} />
            </Link>
          </div>
          <p className="text-sm text-secondary my-7">
            Dar Al Fouad Hospital is one of the largest and most prominent
            medical centres in Egypt. It was establishing a state-of-the-art in
            the Nasr City and has total land area is 13,000 square meters
            (42,651 square feet), the footprint is 7000 square meters (22,966
            square feet)Dar Al Fouad Hospital is one of the largest and most
            prominent medical centres in Egypt. It was establishing a
            state-of-the-art in the Nasr City and has total land area is 13,000
            square ...
          </p>
          <Link
            className="block text-primary font-semibold text-center"
            href={"#"}
          >
            Show More
          </Link>
        </div>
        {/* Instructor Courses  */}
        <div className="border bg-white rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold">My Courses</h1>
            <Link
              className="flex justify-center items-center w-10 h-10 border rounded-md "
              href={"#"}
            >
              <Plus size={15} />
            </Link>
          </div>
          <div className="flex flex-col w-full lg:w-fit lg:flex-row gap-2 bg-gray-100 p-2 rounded-lg mb-4">
            {[, "All", "Pharmacy", "Health Education", "Clinical Training"].map(
              (category) => (
                <button
                  key={category}
                  onClick={() =>
                    setFilter(
                      category as
                        | "All"
                        | "Pharmacy"
                        | "Health Education"
                        | "Clinical Training"
                    )
                  }
                  className={`p-2 lg:w-[150px] flex-1 text-sm ${
                    filter === category
                      ? "bg-white text-primary"
                      : "bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              )
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filteredCourses.map((course) => {
              return <CourseCardInstructor key={course.id} {...course} />;
            })}
          </div>
        </div>
      </div>
      <div className="w-[800px]"></div>
    </div>
  );
};
export default InstuctorProfile;
