"use client";
import Curriculum from "@/components/UI/Curriculum";
import { useForm } from "react-hook-form";

interface FormValues {
  courseName: string;
  instructorName: string;
  courseType: string;
  numberLessons: number;
  courseDetails: string;
  courseTime: string;
  chooseQuiz: string;
  courseImage: File;
  price: string;
  level: string;
  certifications: string;
  totalDuration: string;
}
interface Lesson {
  id: string;
  title: string;
  url: string;
}
interface Chapter {
  id: string;
  title: string;
  lessons: Lesson[];
}
const Chapters: Chapter[] = [
  {
    id: "1",
    title: "Chapter 1: Medical Terminology I",
    lessons: [
      {
        id: "1",
        title: "Lecture 1: Introduction to Medical Terminology",
        url: "#",
      },
      { id: "2", title: "Lecture 2: Basic Medical Terms", url: "#" },
    ],
  },
  {
    id: "2",
    title: "Chapter 2: Medical Terminology II",
    lessons: [
      { id: "3", title: "Lecture 1: Advanced Medical Terminology", url: "#" },
      { id: "4", title: "Lecture 2: Specialized Terminology", url: "#" },
    ],
  },
];
const AddCourseForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log({ ...data });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 bg-white rounded-lg shadow-md">
      {/* Course content Fileds  */}
      <h2 className="text-xl font-bold mb-4">Add Course</h2>
      <div className="flex flex-col md:flex-row gap-2 ">
        <div className="w-full mb-4">
          <label className="block text-gray-700 text-sm text-secondary mb-1">
            Course Name
          </label>
          <input
            type="text"
            {...register("courseName", {
              required: "Course name is required",
            })}
            className="w-full p-3 outline-none border rounded-lg placeholder:text-sm"
            placeholder="Enter Course Name"
          />
          {errors.courseName && (
            <p className="text-red-500 text-xs mt-1">
              {String(errors.courseName.message)}
            </p>
          )}
        </div>
        <div className="w-full mb-4">
          <label className="block text-gray-700 text-sm text-secondary mb-1">
            Course Type
          </label>
          <select
            {...register("courseType", {
              required: "Please Choose Course type",
            })}
            className="w-full outline-none p-3 border rounded-lg text-sm text-secondary">
            <option value="">Select a course type</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
            <option value="hybrid">Hybrid</option>
          </select>
          {errors.courseType && (
            <p className="text-red-500 text-xs mt-1">
              {String(errors.courseType.message)}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 ">
        <div className="w-full mb-4">
          <label className="block text-gray-700 text-sm text-secondary mb-1">
            Number of lessons
          </label>
          <input
            type="number"
            {...register("numberLessons", {
              required: "Number of lessons is required",
            })}
            className="w-full p-3 outline-none border rounded-lg placeholder:text-sm"
            placeholder="Enter Number of Lessons"
          />
          {errors.numberLessons && (
            <p className="text-red-500 text-xs mt-1">
              {String(errors.numberLessons.message)}
            </p>
          )}
        </div>
        <div className="w-full mb-4">
          <label className="block text-gray-700 text-sm text-secondary mb-1">
            Instructor Name
          </label>
          <input
            type="text"
            {...register("instructorName", {
              required: "Instructor name is required",
            })}
            className="w-full p-3 border outline-none rounded-lg placeholder:text-sm"
            placeholder="Enter Instructor Name "
          />
          {errors.instructorName && (
            <p className="text-red-500 text-xs mt-1">
              {String(errors.instructorName.message)}
            </p>
          )}
        </div>
      </div>
      <div className="w-full mb-4">
        <label className="block text-gray-700 text-sm text-secondary mb-1 ">
          Course Details
        </label>
        <textarea
          className="w-full h-[200px] p-3 border outline-none rounded-lg resize-none"
          placeholder="Enter Course Details "
          {...register("courseDetails", {
            required: "Course Details is required",
          })}></textarea>
        {errors.courseDetails && (
          <p className="text-red-500 text-xs mt-1">
            {String(errors.courseDetails.message)}
          </p>
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-2 ">
        <div className="w-full mb-4">
          <label className="block text-gray-700 text-sm text-secondary mb-1">
            Course Time and Date
          </label>
          <input
            type="number"
            {...register("courseTime", {
              required: "Course Time and Date is required",
            })}
            className="w-full p-3 outline-none border rounded-lg placeholder:text-sm"
            placeholder="Enter Number of Lessons"
          />
          {errors.courseTime && (
            <p className="text-red-500 text-xs mt-1">
              {String(errors.courseTime.message)}
            </p>
          )}
        </div>
        <div className="w-full mb-4">
          <label className="block text-gray-700 text-sm text-secondary mb-1">
            Choose Quiz
          </label>
          <select
            {...register("chooseQuiz", { required: "Please Choose Quiz" })}
            className="w-full outline-none p-3 border rounded-lg text-sm text-secondary">
            <option value="">Select a Quiz</option>
            <option value="Quiz 1">Quiz 1</option>
            <option value="Quiz 2">Quiz 2</option>
            <option value="Quiz 3">Quiz 3</option>
          </select>
          {errors.chooseQuiz && (
            <p className="text-red-500 text-xs mt-1">
              {String(errors.chooseQuiz.message)}
            </p>
          )}
        </div>
      </div>
      <div className="w-full mb-6">
        <label className="block text-gray-700 text-sm text-secondary mb-1">
          Upload Course Image
        </label>
        <input
          className="flex border text-sm text-gray-400 file:p-3 file:border-0 file:bg-[#eee]  file:text-sm file:font-medium w-full outline-none  rounded-lg placeholder:text-sm"
          type="file"
          {...register("courseImage", {
            required: "Please Upload Course Image ",
          })}
          id="file"
        />
        {errors.courseImage && (
          <p className="text-red-500 text-xs mt-1">
            {String(errors.courseImage.message)}
          </p>
        )}
      </div>
      {/* Lesson content Fileds  */}
      <Curriculum Chapter={Chapters} />
      {/* Information content Fileds  */}
      <h2 className="text-xl font-bold mb-4">Information</h2>
      <div className="flex flex-col md:flex-row gap-2 ">
        <div className="w-full mb-4">
          <label className="block text-gray-700 text-sm text-secondary mb-1">
            Price
          </label>
          <input
            type="text"
            {...register("price", { required: "Price is required" })}
            className="w-full p-3 outline-none border rounded-lg placeholder:text-sm"
            placeholder="Enter Price"
          />
          {errors.price && (
            <p className="text-red-500 text-xs mt-1">
              {String(errors.price.message)}
            </p>
          )}
        </div>
        <div className="w-full mb-4">
          <label className="block text-gray-700 text-sm text-secondary mb-1">
            Level
          </label>
          <select
            {...register("level", {
              required: "Please Choose Level",
            })}
            className="w-full outline-none p-3 border rounded-lg text-sm text-secondary">
            <option value="">Select a Level</option>
            <option value="Level 1">Level 1</option>
            <option value="Level 2">Level 2</option>
            <option value="Level 3">Level 3</option>
          </select>
          {errors.level && (
            <p className="text-red-500 text-xs mt-1">
              {String(errors.level.message)}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 ">
        <div className="w-full mb-4">
          <label className="block text-gray-700 text-sm text-secondary mb-1">
            Certifications
          </label>
          <input
            type="text"
            {...register("certifications", {
              required: "Certifications is required",
            })}
            className="w-full p-3 outline-none border rounded-lg placeholder:text-sm"
            placeholder="Enter Certifications"
          />
          {errors.certifications && (
            <p className="text-red-500 text-xs mt-1">
              {String(errors.certifications.message)}
            </p>
          )}
        </div>
        <div className="w-full mb-4">
          <label className="block text-gray-700 text-sm text-secondary mb-1">
            Total Duration
          </label>
          <select
            {...register("totalDuration", {
              required: "Please Choose Total Duration",
            })}
            className="w-full outline-none p-3 border rounded-lg text-sm text-secondary">
            <option value="">Select a Total Duration</option>
            <option value="1 -2 Weeks">1 -7 Weeks</option>
            <option value="1 -2 Month">1 -2 Month</option>
            <option value="4 -9 Month">4 -9 Month</option>
          </select>
          {errors.totalDuration && (
            <p className="text-red-500 text-xs mt-1">
              {String(errors.totalDuration.message)}
            </p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-black link-smooth"
        disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Add Course"}
      </button>
    </form>
  );
};

export default AddCourseForm;
