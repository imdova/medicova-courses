"use client";
import { useForm } from "react-hook-form";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { useState } from "react";
import {
  BookOpen,
  Check,
  ChevronRight,
  Eye,
  FileImage,
  Info,
  Plus,
  Save,
  Settings,
  X,
} from "lucide-react";
import TextEditor from "@/components/UI/form/TextEditor";
import Toggle from "@/components/UI/form/Toggle";
import Image from "next/image";

// Define types for the form
type CourseFormValues = {
  courseName: string;
  mainCategory: string;
  courseType: string;
  courseOverview: string;
  subCategory: string;
  attendees: string[];
  attendDescribe: string;
  learningOutcomes: string[];
  learnDescribe: string;
  requirements: string;
  courseDuration: number;
  numberOfLectures: number;
  fakeStudentsEnrolled: number;
  retakeCourse: number;
  repurchaseAction: string;
  blockContentAfterExpiration: boolean;
  allowRepurchase: boolean;
  disableVPI: boolean;
  instructors: string[];
  selectedinstructors: string[];
  regularPrice: number;
  discountedPrice: number;
  level: string;
  noEnrollmentRequirement: boolean;
  tags: string;
  tagsInput: string[];
  courseImage: FileList | null;
  previewVideo: string;
};

// Type for curriculum items
type CurriculumItem = {
  id: string;
  title: string;
  type: "section" | "lecture" | "quiz";
  duration?: number;
  description?: string;
};

export default function AddCoursePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    trigger,
  } = useForm<CourseFormValues>({
    defaultValues: {
      courseType: "Online Recorded",
      fakeStudentsEnrolled: 1500,
      numberOfLectures: 12,
      instructors: ["Mohamed Ahmed", "Sayed Saleh"],
      selectedinstructors: [],
      tagsInput: [],
      attendees: ["QualityProfessionals"],
      learningOutcomes: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting induct",
      ],
    },
    mode: "onBlur",
  });

  // State for curriculum items
  const [curriculumItems, setCurriculumItems] = useState<CurriculumItem[]>([]);
  const [activeTab, setActiveTab] = useState<
    "information" | "curriculum" | "preview"
  >("information");

  const onSubmit = (data: CourseFormValues) => {
    console.log(data);
    // Handle form submission
  };
  const courseOverview = watch("courseOverview");
  const requirements = watch("requirements");

  const addListItem = (field: keyof CourseFormValues, value: string) => {
    const currentValues = (watch(field) as string[]) || [];
    setValue(field, [...currentValues, value]);
  };

  const removeListItem = (field: keyof CourseFormValues, index: number) => {
    const currentValues = (watch(field) as string[]) || [];
    setValue(
      field,
      currentValues.filter((_, i) => i !== index)
    );
  };

  const toggleInstructor = (instructor: string) => {
    const currentInstructors = watch("selectedinstructors") || [];
    if (currentInstructors.includes(instructor)) {
      setValue(
        "selectedinstructors",
        currentInstructors.filter((i) => i !== instructor)
      );
    } else {
      setValue("selectedinstructors", [...currentInstructors, instructor]);
    }
  };

  // Curriculum functions
  const addCurriculumItem = (type: "section" | "lecture" | "quiz") => {
    const newItem: CurriculumItem = {
      id: `item-${Date.now()}`,
      title: `New ${type}`,
      type,
      duration: type === "lecture" ? 0 : undefined,
      description: type === "lecture" ? "" : undefined,
    };
    setCurriculumItems([...curriculumItems, newItem]);
  };

  const updateCurriculumItem = (
    id: string,
    updates: Partial<CurriculumItem>
  ) => {
    setCurriculumItems(
      curriculumItems.map((item) =>
        item.id === id ? { ...item, ...updates } : item
      )
    );
  };

  const removeCurriculumItem = (id: string) => {
    setCurriculumItems(curriculumItems.filter((item) => item.id !== id));
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(curriculumItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setCurriculumItems(items);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
      className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-3 items-center justify-between md:flex-row mb-4">
        <div>
          <h1 className="text-2xl font-bold mb-3">Add a New Course</h1>
          <p className="text-secondary mb-8 text-sm">
            Create, manage, and publish a course on the healthcare platform
          </p>
        </div>
        {/* Form Actions */}
        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <button
            type="button"
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Save size={14} className="text-primary" /> Save Draft
          </button>
          <button
            type="button"
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            onClick={() => setActiveTab("preview")}>
            <Eye size={14} className="text-primary" /> Preview
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">
            Publish Course
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 xl:flex-row">
        <div className="w-full">
          {/* Navigation Tabs */}
          <div className="flex flex-col p-1 bg-gray-200 mb-4 rounded-2xl md:flex-row gap-3">
            <button
              className={`flex justify-center items-center gap-2 px-8 py-2 font-medium rounded-2xl w-full ${
                activeTab === "information"
                  ? "text-primary bg-white"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("information")}>
              <Info size={15} />
              Information
            </button>
            <button
              className={`flex justify-center items-center gap-2 px-8 py-2 font-medium rounded-2xl w-full ${
                activeTab === "curriculum"
                  ? "text-primary bg-white"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("curriculum")}>
              <BookOpen size={15} />
              Curriculum
            </button>
            <button
              className={`flex justify-center items-center gap-2 px-8 py-2 font-medium rounded-2xl w-full ${
                activeTab === "preview"
                  ? "text-primary bg-white"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("preview")}>
              <Eye size={15} />
              Preview
            </button>
          </div>

          <div>
            {activeTab === "information" && (
              <>
                {/* Course Information Section */}
                <div className="bg-white p-4 border rounded-2xl shadow-sm mb-4">
                  {" "}
                  <div className="mb-12">
                    <h2 className="text-xl font-semibold mb-2">
                      Course Information
                    </h2>
                    <p className="text-secondary text-sm mb-6">
                      Enter the basic details about your course
                    </p>

                    {/* Course Name */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Course Name *
                      </label>
                      <input
                        {...register("courseName", {
                          required: "Course name is required",
                        })}
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
                        placeholder="Enter the title of your course"
                        onBlur={() => trigger("courseName")}
                      />
                      {errors.courseName && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.courseName.message}
                        </p>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-6 mb-4">
                      {/* Main Category */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Main Category *
                        </label>
                        <select
                          {...register("mainCategory", {
                            required: "Main category is required",
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
                          onBlur={() => trigger("mainCategory")}>
                          <option value="">Select Categories</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Nursing">Nursing</option>
                          <option value="Medicine">Medicine</option>
                        </select>
                        {errors.mainCategory && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.mainCategory.message}
                          </p>
                        )}
                      </div>
                      {/* Sub Category */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Sub Category
                        </label>
                        <select
                          {...register("subCategory")}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none ">
                          <option value="">Select sub Categories</option>
                          <option value="Anatomy">Anatomy</option>
                          <option value="Physiology">Physiology</option>
                          <option value="Pharmacology">Pharmacology</option>
                        </select>
                      </div>
                      {/* Course Type */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Course Type *
                        </label>
                        <select
                          {...register("courseType", {
                            required: "Course type is required",
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
                          onBlur={() => trigger("courseType")}>
                          <option value="Online Recorded">
                            Online Recorded
                          </option>
                          <option value="Online Live">Online Live</option>
                          <option value="In-Person">In-Person</option>
                        </select>
                        {errors.courseType && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.courseType.message}
                          </p>
                        )}
                      </div>
                    </div>
                    {/* Course Overview */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Course Overview
                      </label>
                      <TextEditor
                        name="courseOverview"
                        value={courseOverview}
                        onChange={(value) => setValue("courseOverview", value)}
                      />
                    </div>
                  </div>
                  {/* Who can Attend this Course */}
                  <div className="mb-12">
                    <h3 className="text-lg font-medium mb-2">
                      Who can Attend this Course ?
                    </h3>
                    <textarea
                      {...register("attendDescribe")}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
                      placeholder="Describe what this Section covers"
                      onBlur={() => trigger("attendDescribe")}></textarea>

                    <div className="flex gap-3 mt-4">
                      <input
                        type="text"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                        placeholder="Add item"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            const value = e.currentTarget.value.trim();
                            if (value) {
                              addListItem("attendees", value);
                              e.currentTarget.value = "";
                            }
                          }
                        }}
                      />
                      <button
                        type="button"
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                        onClick={() => {
                          const input = document.querySelector(
                            'input[placeholder="Add item"]'
                          ) as HTMLInputElement;
                          const value = input.value.trim();
                          if (value) {
                            addListItem("attendees", value);
                            input.value = "";
                          }
                        }}>
                        <Plus size={15} />
                      </button>
                    </div>
                    {errors.attendees && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.attendees.message}
                      </p>
                    )}

                    <div className="mt-6">
                      {watch("attendees")?.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center p-2 bg-gray-100 rounded-md mb-4">
                          <div className="flex items-center">
                            <span className="flex justify-center items-center w-7 h-7 bg-primary rounded-full text-white mr-2">
                              <ChevronRight size={15} />
                            </span>
                            <span className="text-sm">{item}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeListItem("attendees", index)}
                            className="ml-2 text-red-500">
                            <X size={15} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* What will you learn */}
                  <div className="mb-12">
                    <h3 className="text-lg font-medium mb-2">
                      What will you learn ?
                    </h3>
                    <textarea
                      {...register("learnDescribe")}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
                      placeholder="Describe what this Section covers"
                      onBlur={() => trigger("learnDescribe")}></textarea>

                    <div className="flex gap-3 mt-4">
                      <input
                        type="text"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
                        placeholder="Add item"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            const value = e.currentTarget.value.trim();
                            if (value) {
                              addListItem("learningOutcomes", value);
                              e.currentTarget.value = "";
                            }
                          }
                        }}
                      />
                      <button
                        type="button"
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                        onClick={() => {
                          const input = document.querySelector(
                            'input[placeholder="Add item"]'
                          ) as HTMLInputElement;
                          const value = input.value.trim();
                          if (value) {
                            addListItem("learningOutcomes", value);
                            input.value = "";
                          }
                        }}>
                        <Plus size={15} />
                      </button>
                    </div>
                    <div className="mt-6">
                      {watch("learningOutcomes")?.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center p-2 bg-gray-100 rounded-md mb-4">
                          <div className="flex items-center">
                            <span className="flex justify-center items-center w-7 h-7 bg-primary rounded-full text-white mr-2">
                              <Check size={15} />
                            </span>
                            <span className="text-sm">{item}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              removeListItem("learningOutcomes", index)
                            }
                            className="ml-2 text-red-500">
                            <X size={15} />
                          </button>
                        </div>
                      ))}
                    </div>
                    {errors.learningOutcomes && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.learningOutcomes.message}
                      </p>
                    )}
                  </div>
                  {/* Course Requirements */}
                  <div className="mb-12">
                    <h3 className="text-lg font-medium mb-2">
                      Course Requirements
                    </h3>
                    <TextEditor
                      name="requirements"
                      value={requirements}
                      onChange={(value) => setValue("requirements", value)}
                    />
                  </div>
                </div>
                <div className="bg-white p-4 border rounded-2xl shadow-sm">
                  {/* Course general settings */}
                  <div className="mb-12">
                    <h3 className="text-lg font-medium mb-2">
                      Course general settings
                    </h3>
                    <p className="text-secondary text-sm mb-4">
                      Configure general settings for your course
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Course Duration */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Course Duration (weeks) *
                        </label>
                        <input
                          {...register("courseDuration", {
                            required: "Course duration is required",
                            valueAsNumber: true,
                            min: {
                              value: 0,
                              message: "Duration must be 0 or more",
                            },
                          })}
                          type="number"
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none "
                          placeholder="0 for lifetime access"
                          onBlur={() => trigger("courseDuration")}
                        />
                        {errors.courseDuration && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.courseDuration.message}
                          </p>
                        )}
                      </div>

                      {/* Number of Lectures */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Number of Lectures *
                        </label>
                        <input
                          {...register("numberOfLectures", {
                            required: "Number of lectures is required",
                            valueAsNumber: true,
                            min: { value: 0, message: "Must be 0 or more" },
                          })}
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
                          value={watch("numberOfLectures")}
                          onChange={(e) =>
                            setValue(
                              "numberOfLectures",
                              parseInt(e.target.value) || 0
                            )
                          }
                          onBlur={() => trigger("numberOfLectures")}
                        />
                        {errors.numberOfLectures && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.numberOfLectures.message}
                          </p>
                        )}
                      </div>

                      {/* Fake Students Enrolled */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Fake Students Enrolled *
                        </label>
                        <input
                          {...register("fakeStudentsEnrolled", {
                            required: "This field is required",
                            valueAsNumber: true,
                            min: { value: 0, message: "Must be 0 or more" },
                          })}
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
                          value={watch("fakeStudentsEnrolled")}
                          onChange={(e) =>
                            setValue(
                              "fakeStudentsEnrolled",
                              parseInt(e.target.value) || 0
                            )
                          }
                          onBlur={() => trigger("fakeStudentsEnrolled")}
                        />
                        {errors.fakeStudentsEnrolled && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.fakeStudentsEnrolled.message}
                          </p>
                        )}
                      </div>

                      {/* Re-take Course */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Re-take Course (times) *
                        </label>
                        <input
                          {...register("retakeCourse", {
                            required: "This field is required",
                            valueAsNumber: true,
                            min: { value: 0, message: "Must be 0 or more" },
                          })}
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-sm "
                          placeholder="Introduction to Healthcare
"
                          onBlur={() => trigger("retakeCourse")}
                        />
                        {errors.retakeCourse && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.retakeCourse.message}
                          </p>
                        )}
                      </div>

                      {/* Repurchase Action */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Repurchase Action
                        </label>
                        <select
                          {...register("repurchaseAction")}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-sm text-secondary">
                          <option value="">Select Repurchase Action</option>
                          <option value="Introduction to Healthcare">
                            Introduction to Healthcare
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-6 space-y-4 ">
                      <Toggle
                        id="blockContentAfterExpiration"
                        label="Block Content After Expiration"
                        description="Restrict access after course expiration date"
                        {...register("blockContentAfterExpiration")}
                      />

                      <Toggle
                        id="allowRepurchase"
                        label="Allow Repurchase"
                        description="Let users repurchase expired courses"
                        {...register("allowRepurchase")}
                      />

                      <Toggle
                        id="disableVPI"
                        label="Disable VPI"
                        description="Turn off virtual progress indicators"
                        {...register("disableVPI")}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === "curriculum" && (
              <div className="mb-12">
                <h2 className="text-xl font-semibold mb-6">
                  Course Curriculum
                </h2>
                <p className="text-gray-600 mb-6">
                  Organize your course content into sections, lectures, and
                  quizzes
                </p>

                {/* Add Curriculum Items */}
                <div className="flex space-x-4 mb-6">
                  <button
                    type="button"
                    onClick={() => addCurriculumItem("section")}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Add Section
                  </button>
                  <button
                    type="button"
                    onClick={() => addCurriculumItem("lecture")}
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                    Add Lecture
                  </button>
                  <button
                    type="button"
                    onClick={() => addCurriculumItem("quiz")}
                    className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600">
                    Add Quiz
                  </button>
                </div>

                {/* Drag and Drop Curriculum */}
                <DragDropContext onDragEnd={onDragEnd}>
                  <Droppable droppableId="curriculum">
                    {(provided) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="space-y-4">
                        {curriculumItems.map((item, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                                <div className="flex justify-between items-start">
                                  <div className="flex-1">
                                    <input
                                      type="text"
                                      value={item.title}
                                      onChange={(e) =>
                                        updateCurriculumItem(item.id, {
                                          title: e.target.value,
                                        })
                                      }
                                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  font-medium"
                                    />
                                    {item.type === "lecture" && (
                                      <>
                                        <div className="mt-2">
                                          <label className="block text-sm text-gray-700 mb-1">
                                            Duration (minutes)
                                          </label>
                                          <input
                                            type="number"
                                            value={item.duration || 0}
                                            onChange={(e) =>
                                              updateCurriculumItem(item.id, {
                                                duration:
                                                  parseInt(e.target.value) || 0,
                                              })
                                            }
                                            className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
                                          />
                                        </div>
                                        <div className="mt-2">
                                          <label className="block text-sm text-gray-700 mb-1">
                                            Description
                                          </label>
                                          <textarea
                                            value={item.description || ""}
                                            onChange={(e) =>
                                              updateCurriculumItem(item.id, {
                                                description: e.target.value,
                                              })
                                            }
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
                                            rows={3}
                                          />
                                        </div>
                                      </>
                                    )}
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      removeCurriculumItem(item.id)
                                    }
                                    className="ml-4 text-red-500 hover:text-red-700">
                                    Delete
                                  </button>
                                </div>
                                <div className="mt-2 text-xs text-gray-500">
                                  Type: {item.type} | ID: {item.id}
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              </div>
            )}

            {activeTab === "preview" && (
              <div className="mb-12">
                <h2 className="text-xl font-semibold mb-6">Course Preview</h2>
                <p className="text-gray-600 mb-6">
                  Preview how your course will appear to students
                </p>

                <div className="border p-6 rounded-lg bg-gray-50">
                  <h3 className="text-lg font-medium mb-4">
                    Course Preview Content
                  </h3>
                  <p className="text-gray-600">
                    This is where the course preview would be displayed. In a
                    real implementation, you would render the course content as
                    it would appear to students.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="xl:w-[500px]">
          <div className="bg-white p-4 rounded-2xl border mb-8">
            {/* Author Details */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                <Settings size={20} /> Course Settings
              </h3>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Author Details
                </label>
                <div className="flex flex-wrap gap-2 mb-4 w-full">
                  <div className="space-y-2 w-full">
                    {/* Multi-select dropdown */}
                    <select
                      className="w-full text-sm text-secondary px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value="" // Always reset after selection
                      onChange={(e) => {
                        if (e.target.value) {
                          toggleInstructor(e.target.value);
                          e.target.value = ""; // Reset the select
                        }
                      }}>
                      <option value="">Select Instructor</option>
                      {watch("instructors")
                        .filter(
                          (instructor) =>
                            !watch("selectedinstructors")?.includes(instructor)
                        )
                        .map((instructor) => (
                          <option key={instructor} value={instructor}>
                            {instructor}
                          </option>
                        ))}
                    </select>
                    {/* Selected instructor chips */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {watch("selectedinstructors")?.map((instructor) => (
                        <div
                          key={instructor}
                          className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-green-100 text-green-800 cursor-pointer hover:bg-green-200 transition-colors"
                          onClick={() => toggleInstructor(instructor)}>
                          {instructor}
                          <X size={15} className="text-green-600" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {errors.selectedinstructors && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.selectedinstructors.message}
                  </p>
                )}
              </div>
            </div>
            {/* Pricing */}
            <div className="mb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Regular Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Regular Price
                  </label>
                  <input
                    {...register("regularPrice", { valueAsNumber: true })}
                    type="number"
                    className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
                    placeholder="$ Leave blank for free e.g., Starting from"
                  />
                </div>

                {/* Price after discount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price after discount
                  </label>
                  <input
                    {...register("discountedPrice", {
                      valueAsNumber: true,
                    })}
                    type="number"
                    className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
                    placeholder="e.g., Starting from"
                  />
                </div>
              </div>
              {/* Level */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Level
                </label>
                <select
                  {...register("level")}
                  className="w-full text-sm text-secondary px-3 py-2 border border-gray-300 rounded-md focus:outline-none ">
                  <option value="">Select level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              {/* No Enrollment Requirement */}
              <div className="mt-4">
                <Toggle
                  id="noEnrollmentRequirement"
                  label=" No Enrollment Requirement"
                  description="Let users repurchase expired courses"
                  {...register("noEnrollmentRequirement")}
                />
              </div>
            </div>
            {/* Tags */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Tags
              </label>

              <div className="relative">
                <input
                  {...register("tagsInput")} // Register a separate field for input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                  placeholder="Type tag and press Enter"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === ",") {
                      e.preventDefault();
                      const value = e.currentTarget.value.trim();
                      if (value) {
                        const currentTags =
                          watch("tags")
                            ?.split(",")
                            .filter((tag) => tag.trim()) || [];
                        if (!currentTags.includes(value)) {
                          setValue("tags", [...currentTags, value].join(","));
                        }
                        setValue("tagsInput", []); // Clear input
                      }
                    }
                  }}
                />
              </div>

              {/* Tags display */}
              <div className="flex flex-wrap gap-2 mt-2">
                {watch("tags")
                  ?.split(",")
                  .filter((tag) => tag.trim())
                  .map((tag, index) => (
                    <div
                      key={`${tag}-${index}`}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                      {tag.trim()}
                      <button
                        type="button"
                        onClick={() => {
                          const currentTags = watch("tags")?.split(",") || [];
                          setValue(
                            "tags",
                            currentTags.filter((t, i) => i !== index).join(",")
                          );
                        }}
                        className="ml-1.5 text-green-600 hover:text-green-800 focus:outline-none"
                        aria-label={`Remove tag ${tag}`}>
                        <X size={15} />
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl border mb-8">
            {/* Course Image */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Course Image
              </label>
              <div className="relative">
                {(() => {
                  const courseImage = watch("courseImage");

                  // Handle string URL case
                  if (typeof courseImage === "string" && courseImage) {
                    return (
                      <>
                        <Image
                          src={courseImage}
                          width={300}
                          height={300}
                          alt="Course image"
                          className="rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => setValue("courseImage", null)}
                          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition"
                          aria-label="Remove image">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </>
                    );
                  }

                  // Handle file upload case
                  if (
                    typeof FileList !== "undefined" &&
                    courseImage instanceof FileList &&
                    courseImage.length > 0
                  ) {
                    const imageUrl = URL.createObjectURL(courseImage[0]);
                    return (
                      <>
                        <Image
                          src={imageUrl}
                          width={300}
                          height={300}
                          alt="Uploaded course preview"
                          className="rounded-lg"
                          onLoad={() => URL.revokeObjectURL(imageUrl)}
                        />
                        <button
                          type="button"
                          onClick={() => setValue("courseImage", null)}
                          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition"
                          aria-label="Remove image">
                          <X size={15} />
                        </button>
                      </>
                    );
                  }

                  return null;
                })()}
              </div>
              <div className="h-full">
                <label
                  htmlFor="course-image"
                  className="flex h-[200px] w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white p-2  hover:border-primary hover:text-primary">
                  <div className="flex flex-col gap-3 items-center justify-center">
                    <FileImage size={25} />
                    <span className="text-sm  text-center">
                      Upload your course thumbnail image
                    </span>
                    <p className="text-xs text-center text-gray-500">
                      Drag & drop or click to browse Accepted
                      formats:image/jpeg, image/png, image/webpMaximum size:1MB
                    </p>
                  </div>
                  <input
                    {...register("courseImage")}
                    id="course-image"
                    type="file"
                    className="sr-only"
                  />
                </label>
              </div>
            </div>
            {/* Preview Video */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preview Video
              </label>
              <input
                {...register("previewVideo")}
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
                placeholder="Enter Video url or upload"
              />
            </div>
          </div>

          {/* Publishing Section */}
          <div className="bg-white p-4 rounded-2xl border mb-8">
            <h3 className="text-lg font-medium mb-4">Publishing</h3>

            <div className="space-y-2 mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="reqFields"
                  checked={true}
                  readOnly
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="reqFields"
                  className="ml-2 block text-sm text-gray-700">
                  All required fields are complete
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="courseStructure"
                  checked={true}
                  readOnly
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="courseStructure"
                  className="ml-2 block text-sm text-gray-700">
                  Course structure is organized
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="pricingSet"
                  checked={true}
                  readOnly
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="pricingSet"
                  className="ml-2 block text-sm text-gray-700">
                  Pricing and enrollment options are set
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="instructorInfo"
                  checked={true}
                  readOnly
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="instructorInfo"
                  className="ml-2 block text-sm text-gray-700">
                  Instructor information is provided
                </label>
              </div>
            </div>
            {/* Form Actions */}
            <div className="flex flex-col gap-2 pt-6">
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">
                Publish Course
              </button>
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                Save Draft
              </button>
              {/* <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                onClick={() => setActiveTab("preview")}>
                Preview
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
