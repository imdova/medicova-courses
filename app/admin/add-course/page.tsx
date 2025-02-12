"use client";
import React, { useState } from "react";
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
  id: number;
  title: string;
  duration: string;
  details: string;
  quzis: string;
  material?: File;
  lessonImage?: File;
}

const AddCourseForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [lessonTitle, setLessonTitle] = useState("");
  const [couresDuration, setcouresDuration] = useState("");
  const [lessonDetails, setlessonDetails] = useState("");
  const [chooseQuiz, setchooseQuiz] = useState("");
  const [lessonMaterial, setLessonMaterial] = useState<File | null>(null);
  const [lessonImage, setlessonImage] = useState<File | null>(null);

  // Data of lesson List
  const addLesson = () => {
    if (lessonTitle.trim()) {
      setLessons([
        ...lessons,
        {
          id: Date.now(),
          title: lessonTitle,
          duration: couresDuration,
          details: lessonDetails,
          quzis: chooseQuiz,
          material: lessonMaterial || undefined,
          lessonImage: lessonImage || undefined,
        },
      ]);
      setLessonTitle("");
      setcouresDuration("");
      setlessonDetails("");
      setchooseQuiz("");
    }
  };

  const deleteLesson = (id: number) => {
    setLessons(lessons.filter((lesson) => lesson.id !== id));
  };

  const onSubmit = (data: FormValues) => {
    console.log({ ...data, lessons });
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
            {...register("courseName", { required: "Course name is required" })}
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
      <h2 className="text-xl font-bold mb-4">Add Curriculum</h2>
      <div className="flex flex-col md:flex-row gap-2 ">
        <div className="w-full mb-4">
          <label className="block text-gray-700 text-sm text-secondary mb-1">
            Lesson Title
          </label>
          <div className="flex gap-2 ">
            <input
              type="text"
              value={lessonTitle}
              onChange={(e) => setLessonTitle(e.target.value)}
              className="w-full p-3 outline-none border rounded-lg placeholder:text-sm"
              placeholder="Lesson Title"
            />
          </div>
        </div>
        <div className="w-full mb-4">
          <label className="block text-gray-700 text-sm text-secondary mb-1">
            Coures Duration
          </label>
          <div className="flex flex-col md:flex-row gap-2 ">
            <input
              type="text"
              value={couresDuration}
              onChange={(e) => setcouresDuration(e.target.value)}
              className="w-full p-3 outline-none border rounded-lg placeholder:text-sm"
              placeholder="Enter Coures Duration"
            />
          </div>
        </div>
      </div>
      <div className="w-full mb-4">
        <label className="block text-gray-700 text-sm text-secondary mb-1 ">
          Lesson Details
        </label>
        <textarea
          className="w-full h-[200px] p-3 border outline-none rounded-lg resize-none"
          value={lessonDetails}
          onChange={(e) => setlessonDetails(e.target.value)}
          placeholder="Enter Lesson Details"></textarea>
      </div>
      <div className="flex flex-col md:flex-row gap-2 ">
        <div className="w-full mb-4">
          <label className="block text-gray-700 text-sm text-secondary mb-1">
            Upload Material
          </label>
          <input
            className="flex border text-sm text-gray-400 file:p-3 file:border-0 file:bg-[#eee]  file:text-sm file:font-medium w-full outline-none  rounded-lg placeholder:text-sm"
            type="file"
            onChange={(e) =>
              setLessonMaterial(e.target.files ? e.target.files[0] : null)
            }
            id="file"
          />
        </div>
        <div className="w-full mb-4">
          <label className="block text-gray-700 text-sm text-secondary mb-1">
            Upload Lesson Image
          </label>
          <input
            className="flex border text-sm text-gray-400 file:p-3 file:border-0 file:bg-[#eee]  file:text-sm file:font-medium w-full outline-none  rounded-lg placeholder:text-sm"
            type="file"
            onChange={(e) =>
              setlessonImage(e.target.files ? e.target.files[0] : null)
            }
            id="file"
          />
        </div>
      </div>
      <div className="flex justify-between items-end gap-2">
        <div className="w-full">
          <label className="block text-gray-700 text-sm text-secondary mb-1">
            Choose Quiz
          </label>
          <select
            onChange={(e) => setchooseQuiz(e.target.value)}
            value={chooseQuiz}
            className="w-full outline-none p-3 border rounded-lg text-sm text-secondary">
            <option value="">Select a Quiz</option>
            <option value="Quiz 1">Quiz 1</option>
            <option value="Quiz 2">Quiz 2</option>
            <option value="Quiz 3">Quiz 3</option>
          </select>
        </div>
        <button
          type="button"
          onClick={addLesson}
          className="p-3 min-w-[150px] bg-primary text-white rounded-lg hover:bg-black link-smooth">
          Add Lesson
        </button>
      </div>
      {/* List of Lessons in This Course  */}
      <div className="my-6">
        {lessons.length > 0 && (
          <>
            <h2 className="text-xl font-bold mb-4">List of Lessons</h2>
            <ul className="mt-2 ">
              {lessons.map((lesson) => (
                <li
                  key={lesson.id}
                  className="p-3 rounded-md bg-[#f7f7f7] flex justify-between items-center mb-2">
                  {lesson.title}
                  <button
                    onClick={() => deleteLesson(lesson.id)}
                    className="text-red-500 text-xs mt-1 hover:underline">
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
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
