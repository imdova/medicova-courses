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
  ChevronDown,
  ChevronDownIcon,
  ChevronRight,
  ChevronUp,
  Eye,
  FileImage,
  FileWarning,
  GripVertical,
  Info,
  Lock,
  Pencil,
  Play,
  Plus,
  Save,
  Settings,
  Star,
  Trash,
  UploadIcon,
  Video,
  VideoIcon,
  X,
} from "lucide-react";
import TextEditor from "@/components/UI/form/TextEditor";
import Toggle from "@/components/UI/form/Toggle";
import Image from "next/image";
import Link from "next/link";
import YouTubePlayer from "@/components/UI/YouTubePlayer";
import InfoAlert from "@/components/UI/InfoAlert";
import { quizzes } from "@/constants/quizzes.data";

// Type for curriculum items
type Lecture = {
  isExpanded: boolean;
  id: string;
  title: string;
  videoUri: string;
  materialUris: string[];
  noEnrollmentRequired: boolean;
  quizId: string | null;
  preview?: boolean;
  isLocked?: boolean;
};

type Quiz = {
  isExpanded: boolean;
  id: string;
  title: string;
  isLocked?: boolean;
};

type Section = {
  isExpanded: boolean;
  id: string;
  title: string;
  description: string;
  lectures: Lecture[];
  quizzes: Quiz[];
};

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
  tags: string[];
  tagsInput: string[];
  courseImage: FileList | null;
  previewVideo: string;
  sections: Section[];
};

export default function AddCoursePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    trigger,
    getValues,
  } = useForm<CourseFormValues>({
    mode: "onBlur",
    defaultValues: {
      courseType: "Online Recorded",
      fakeStudentsEnrolled: 1500,
      numberOfLectures: 12,
      instructors: ["Mohamed Ahmed", "Sayed Saleh"],
      selectedinstructors: [],
      tagsInput: [],
      attendees: ["Medical and Nursing Directors"],
      learningOutcomes: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting induct",
      ],
      sections: [
        {
          id: "section-1",
          title: "Introduction to Healthcare",
          description: "Describe what this Section covers",
          lectures: [
            {
              id: "lecture-1",
              title: "Title of the lecture",
              videoUri: "",
              materialUris: [],
              noEnrollmentRequired: false,
              quizId: null,
              preview: true,
            },
          ],
          quizzes: [{ id: "quiz-1", title: "Quiz 1", isLocked: true }],
        },
      ],
    },
  });

  const [isSaving, setIsSaving] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [activeTab, setActiveTab] = useState<
    "information" | "curriculum" | "preview"
  >("information");
  const [categories, setCategories] = useState([
    "Healthcare",
    "Nursing",
    "Medicine",
  ]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});

  const courseOverview = watch("courseOverview");
  const requirements = watch("requirements");
  const sections = watch("sections");

  // handdle form submit
  const onSubmit = async (data: CourseFormValues) => {
    try {
      setIsSubmitting(true);
      setSubmitStatus("idle");

      const response = await fetch("/api/courses/publish", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to publish course");
      }

      setSubmitStatus("success");
    } catch (error) {
      console.error("Publish error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // handdle save Draft
  const handleSaveDraft = () => {
    setIsSaving(true);
    setSaveStatus("idle");

    try {
      // Get all form values without validation
      const formData = getValues();

      // Save to localStorage (or your preferred storage)
      localStorage.setItem(
        "courseDraft",
        JSON.stringify({
          ...formData,
          lastSaved: new Date().toISOString(),
        })
      );

      setSaveStatus("success");

      // Optional: Auto-clear success message after delay
      setTimeout(() => setSaveStatus("idle"), 3000);
    } catch (error) {
      console.error("Error saving draft:", error);
      setSaveStatus("error");
    } finally {
      setIsSaving(false);
    }
  };

  // collapse section preview
  const toggleSectionPreview = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  // handel categories
  const filteredCategories = categories.filter((cat) =>
    cat.toLowerCase().includes(watch("mainCategory")?.toLowerCase())
  );

  const handleSelect = (value: string) => {
    setValue("mainCategory", value);
    trigger("mainCategory");
    setShowDropdown(false);
  };

  const handleAddNew = () => {
    const newCategory = watch("mainCategory")?.trim();
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setShowDropdown(false);
    }
  };

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
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const { source, destination, type } = result;

    const newSections = [...sections];

    if (type === "lectures") {
      const sectionId = source.droppableId;
      const sectionIndex = newSections.findIndex((s) => s.id === sectionId);
      if (sectionIndex === -1) return;

      const newLectures = [...newSections[sectionIndex].lectures];
      const [movedLecture] = newLectures.splice(source.index, 1);
      newLectures.splice(destination.index, 0, movedLecture);

      newSections[sectionIndex] = {
        ...newSections[sectionIndex],
        lectures: newLectures,
      };

      setValue("sections", newSections);
    } else if (type === "sections") {
      const [movedSection] = newSections.splice(source.index, 1);
      newSections.splice(destination.index, 0, movedSection);
      setValue("sections", newSections);
    } else if (type === "quizzes") {
      const sectionId = source.droppableId.split("-")[1]; // e.g., "quizzes-sectionId"
      const sectionIndex = newSections.findIndex((s) => s.id === sectionId);
      if (sectionIndex === -1) return;

      const newQuizzes = [...newSections[sectionIndex].quizzes];
      const [movedQuiz] = newQuizzes.splice(source.index, 1);
      newQuizzes.splice(destination.index, 0, movedQuiz);

      newSections[sectionIndex] = {
        ...newSections[sectionIndex],
        quizzes: newQuizzes,
      };

      setValue("sections", newSections);
    }
  };
  // handdle up and down for Lectures
  const moveLectureUp = (sectionId: string, lectureId: string) => {
    const newSections = [...sections];
    const sectionIndex = newSections.findIndex((s) => s.id === sectionId);
    if (sectionIndex === -1) return;

    const lectureIndex = newSections[sectionIndex].lectures.findIndex(
      (l) => l.id === lectureId
    );
    if (lectureIndex <= 0) return; // Can't move first lecture up

    const newLectures = [...newSections[sectionIndex].lectures];
    [newLectures[lectureIndex - 1], newLectures[lectureIndex]] = [
      newLectures[lectureIndex],
      newLectures[lectureIndex - 1],
    ];

    newSections[sectionIndex] = {
      ...newSections[sectionIndex],
      lectures: newLectures,
    };

    setValue("sections", newSections);
  };

  const moveLectureDown = (sectionId: string, lectureId: string) => {
    const newSections = [...sections];
    const sectionIndex = newSections.findIndex((s) => s.id === sectionId);
    if (sectionIndex === -1) return;

    const lectureIndex = newSections[sectionIndex].lectures.findIndex(
      (l) => l.id === lectureId
    );
    if (lectureIndex >= newSections[sectionIndex].lectures.length - 1) return; // Can't move last lecture down

    const newLectures = [...newSections[sectionIndex].lectures];
    [newLectures[lectureIndex], newLectures[lectureIndex + 1]] = [
      newLectures[lectureIndex + 1],
      newLectures[lectureIndex],
    ];

    newSections[sectionIndex] = {
      ...newSections[sectionIndex],
      lectures: newLectures,
    };

    setValue("sections", newSections);
  };

  // handdle up and down Quizzes
  const moveQuizUp = (sectionId: string, quizId: string) => {
    const newSections = [...sections];
    const sectionIndex = newSections.findIndex((s) => s.id === sectionId);
    if (sectionIndex === -1) return;

    const quizIndex = newSections[sectionIndex].quizzes.findIndex(
      (q) => q.id === quizId
    );
    if (quizIndex <= 0) return; // Can't move first quiz up

    const newQuizzes = [...newSections[sectionIndex].quizzes];
    [newQuizzes[quizIndex - 1], newQuizzes[quizIndex]] = [
      newQuizzes[quizIndex],
      newQuizzes[quizIndex - 1],
    ];

    newSections[sectionIndex] = {
      ...newSections[sectionIndex],
      quizzes: newQuizzes,
    };

    setValue("sections", newSections);
  };

  const moveQuizDown = (sectionId: string, quizId: string) => {
    const newSections = [...sections];
    const sectionIndex = newSections.findIndex((s) => s.id === sectionId);
    if (sectionIndex === -1) return;

    const quizIndex = newSections[sectionIndex].quizzes.findIndex(
      (q) => q.id === quizId
    );
    if (quizIndex >= newSections[sectionIndex].quizzes.length - 1) return; // Can't move last quiz down

    const newQuizzes = [...newSections[sectionIndex].quizzes];
    [newQuizzes[quizIndex], newQuizzes[quizIndex + 1]] = [
      newQuizzes[quizIndex + 1],
      newQuizzes[quizIndex],
    ];

    newSections[sectionIndex] = {
      ...newSections[sectionIndex],
      quizzes: newQuizzes,
    };

    setValue("sections", newSections);
  };

  const toggleSection = (sectionId: string) => {
    setValue(
      "sections",
      sections.map((section) =>
        section.id === sectionId
          ? { ...section, isExpanded: !section.isExpanded }
          : section
      )
    );
  };

  const toggleLecture = (sectionId: string, lectureId: string) => {
    setValue(
      "sections",
      sections.map((section) => {
        if (section.id !== sectionId) return section;

        return {
          ...section,
          lectures: section.lectures.map((lecture) =>
            lecture.id === lectureId
              ? { ...lecture, isExpanded: !lecture.isExpanded }
              : lecture
          ),
        };
      })
    );
  };

  const toggleQuiz = (sectionId: string, quizId: string) => {
    setValue(
      "sections",
      sections.map((section) => {
        if (section.id !== sectionId) return section;

        return {
          ...section,
          quizzes: section.quizzes.map((quiz) =>
            quiz.id === quizId
              ? { ...quiz, isExpanded: !quiz.isExpanded }
              : quiz
          ),
        };
      })
    );
  };

  const addSection = () => {
    const newSection: Section = {
      id: `section-${Date.now()}`,
      title: "New Section",
      description: "",
      isExpanded: true,
      lectures: [
        {
          id: "lecture-1",
          title: "Title of the lecture",
          videoUri: "",
          materialUris: [],
          noEnrollmentRequired: false,
          quizId: null,
          preview: true,
          isExpanded: false,
        },
      ],
      quizzes: [
        {
          id: "quiz-1",
          title: "Quiz 1",
          isLocked: true,
          isExpanded: false,
        },
      ],
    };
    setValue("sections", [...sections, newSection]);
  };

  const addLecture = (sectionId: string) => {
    const newLecture: Lecture = {
      id: `lecture-${Date.now()}`,
      title: "New Lecture",
      videoUri: "",
      materialUris: [],
      noEnrollmentRequired: false,
      quizId: null,
      isExpanded: true,
    };

    setValue(
      "sections",
      sections.map((section) =>
        section.id === sectionId
          ? { ...section, lectures: [...section.lectures, newLecture] }
          : section
      )
    );
  };

  const addQuiz = (sectionId: string) => {
    const newQuiz: Quiz = {
      id: `quiz-${Date.now()}`,
      title: `Quiz ${
        (sections.find((s) => s.id === sectionId)?.quizzes?.length ?? 0) + 1
      }`,
      isExpanded: false,
    };

    setValue(
      "sections",
      sections.map((section) =>
        section.id === sectionId
          ? { ...section, quizzes: [...section.quizzes, newQuiz] }
          : section
      )
    );
  };

  const updateSection = (sectionId: string, updates: Partial<Section>) => {
    setValue(
      "sections",
      sections.map((section) =>
        section.id === sectionId ? { ...section, ...updates } : section
      )
    );
  };

  const updateLecture = (
    sectionId: string,
    lectureId: string,
    updates: Partial<Lecture>
  ) => {
    setValue(
      "sections",
      sections.map((section) => {
        if (section.id !== sectionId) return section;

        return {
          ...section,
          lectures: section.lectures.map((lecture) =>
            lecture.id === lectureId ? { ...lecture, ...updates } : lecture
          ),
        };
      })
    );
  };

  const deleteSection = (sectionId: string) => {
    setValue(
      "sections",
      sections.filter((section) => section.id !== sectionId)
    );
  };

  const deleteLecture = (sectionId: string, lectureId: string) => {
    setValue(
      "sections",
      sections.map((section) => {
        if (section.id !== sectionId) return section;
        return {
          ...section,
          lectures: section.lectures.filter(
            (lecture) => lecture.id !== lectureId
          ),
        };
      })
    );
  };

  const deleteQuiz = (sectionId: string, quizId: string) => {
    setValue(
      "sections",
      sections.map((section) => {
        if (section.id !== sectionId) return section;

        // Remove this quiz from any lectures that reference it
        const lectures = section.lectures.map((lecture) => {
          if (lecture.quizId === quizId) {
            return { ...lecture, quizId: null };
          }
          return lecture;
        });

        return {
          ...section,
          quizzes: section.quizzes.filter((quiz) => quiz.id !== quizId),
          lectures,
        };
      })
    );
  };

  // Validation checks publishing
  const isFormValid = Boolean(
    watch("courseName") &&
      watch("mainCategory") &&
      watch("courseType") &&
      watch("courseOverview") &&
      watch("courseDuration")
  );

  const isCurriculumValid = watch("sections")?.length > 0;
  const isPricingValid = Boolean(
    watch("regularPrice") || watch("discountedPrice")
  );
  const isInstructorValid = watch("selectedinstructors")?.length > 0;
  const isSubmitDisabled = !(
    isFormValid &&
    isCurriculumValid &&
    isPricingValid &&
    isInstructorValid
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
      className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-3 items-center justify-between xl:flex-row mb-4">
        <div className="text-center xl:text-start">
          <h1 className="text-2xl font-bold mb-3">Add a New Course</h1>
          <p className="text-secondary mb-8 text-sm">
            Create, manage, and publish a course on the healthcare platform
          </p>
        </div>
        {/* Form Actions */}
        <div className="flex justify-center items-center gap-2  flex-wrap sm:justify-start">
          <button
            type="button"
            onClick={handleSaveDraft}
            disabled={isSaving}
            className={`px-4 py-2 border rounded-md text-sm font-medium transition ${
              isSaving
                ? "border-gray-300 text-gray-500 bg-gray-100 cursor-not-allowed"
                : "border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
            }`}>
            {isSaving ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-600 inline"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Saving...
              </>
            ) : (
              <div className="flex items-center gap-1 text-sm">
                <Save size={15} className="text-primary" />
                Save Draft
              </div>
            )}
          </button>
          <button
            type="button"
            className="flex items-center gap-2 px-4 py-2 border  rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            onClick={() => setActiveTab("preview")}>
            <Eye size={14} className="text-primary" /> Preview
          </button>
          <button
            type="submit"
            disabled={isSubmitDisabled}
            className={`px-4 py-2 border rounded-md shadow-sm text-sm font-medium text-white ${
              !isSubmitDisabled
                ? "bg-green-600 hover:bg-green-700"
                : "bg-green-600 opacity-65 cursor-not-allowed"
            }`}>
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Submitting...
              </>
            ) : (
              "Publish Course"
            )}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 xl:flex-row">
        <div className="w-full max-w-[750px]">
          {/* Navigation Tabs */}
          <div className="flex flex-col p-1 bg-[#eee] mb-4 rounded-2xl md:flex-row gap-3">
            <button
              type="button"
              className={`flex justify-center items-center gap-2 px-8 py-3 font-medium rounded-2xl w-full ${
                activeTab === "information"
                  ? "text-primary bg-white"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("information")}>
              <Info size={15} />
              Information
            </button>
            <button
              type="button"
              className={`flex justify-center items-center gap-2 px-8 py-3 font-medium rounded-2xl w-full ${
                activeTab === "curriculum"
                  ? "text-primary bg-white"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("curriculum")}>
              <BookOpen size={15} />
              Curriculum
            </button>
            <button
              type="button"
              className={`flex justify-center items-center gap-2 px-8 py-3 font-medium rounded-2xl w-full ${
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
                        className="w-full px-3 py-2 border placeholder:text-sm rounded-md focus:outline-none "
                        placeholder="Enter the title of your course"
                        onBlur={() => trigger("courseName")}
                      />
                      {errors.courseName && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.courseName.message}
                        </p>
                      )}
                    </div>
                    <div className="grid grid-cols-1 items-center gap-6 mb-4 sm:grid-cols-2 ">
                      {/* Main Category */}
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Main Category *
                        </label>
                        <input
                          {...register("mainCategory", {
                            required: "Main category is required",
                          })}
                          type="text"
                          placeholder="Add or select a category"
                          onFocus={() => setShowDropdown(true)}
                          onBlur={() =>
                            setTimeout(() => setShowDropdown(false), 150)
                          }
                          className="w-full px-3 py-2 border placeholder:text-sm rounded-md focus:outline-none"
                        />
                        {errors.mainCategory && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.mainCategory.message}
                          </p>
                        )}

                        {showDropdown && (
                          <div className="absolute z-10 w-full mt-1 bg-white border  rounded-md shadow-md max-h-40 overflow-y-auto">
                            {filteredCategories.length > 0 ? (
                              filteredCategories.map((cat, index) => (
                                <div
                                  key={index}
                                  onMouseDown={() => handleSelect(cat)}
                                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                                  {cat}
                                </div>
                              ))
                            ) : (
                              <div
                                onMouseDown={handleAddNew}
                                className="px-3 py-2 hover:bg-green-100 cursor-pointer text-sm text-green-700">
                                + Add &quot;{watch("mainCategory")}&quot;
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Sub Category */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Sub Category
                        </label>
                        <select
                          {...register("subCategory")}
                          className="w-full px-3 py-2 border text-sm rounded-md focus:outline-none ">
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
                          className="w-full px-3 py-2 border text-sm rounded-md focus:outline-none "
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
                    <div className="xl:max-w-[600px] 2xl:max-w-[750px] mb-6">
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
                      className="w-full px-3 py-2 border resize-none min-h-[150px] rounded-md focus:outline-none "
                      placeholder="Describe what this Section covers"
                      onBlur={() => trigger("attendDescribe")}></textarea>

                    <div className="flex gap-3 mt-4">
                      <input
                        id="attendees-input"
                        type="text"
                        className="flex-1 px-3 py-2 border  rounded-md focus:outline-none "
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
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                        onClick={() => {
                          const input = document.getElementById(
                            "attendees-input"
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
                          className="flex justify-between items-center p-2 bg-[#eeeeee8e] rounded-md mb-4">
                          <div className="flex gap-2 items-center">
                            <div className="w-7">
                              <span className="flex justify-center items-center w-7 h-7 bg-primary rounded-full text-white mr-2">
                                <ChevronRight size={15} />
                              </span>
                            </div>
                            <span className="text-sm">{item}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeListItem("attendees", index)}
                            className="ml-2 text-secondary hover:text-red-500 transition">
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
                      className="w-full px-3 py-2 border resize-none min-h-[150px] rounded-md focus:outline-none "
                      placeholder="Describe what this Section covers"
                      onBlur={() => trigger("learnDescribe")}></textarea>

                    <div className="flex gap-3 mt-4">
                      <input
                        id="learning-outcome-input"
                        type="text"
                        className="flex-1 px-3 py-2 border  rounded-md focus:outline-none "
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
                          const input = document.getElementById(
                            "learning-outcome-input"
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
                          className="flex justify-between items-center p-2 bg-[#eeeeee8e] rounded-md mb-4">
                          <div className="flex gap-2 items-center">
                            <div className="w-7">
                              <span className="flex justify-center items-center w-7 h-7 bg-primary rounded-full text-white mr-2">
                                <Check size={15} />
                              </span>
                            </div>
                            <span className="text-sm">{item}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              removeListItem("learningOutcomes", index)
                            }
                            className="ml-2 text-secondary hover:text-red-500 transition">
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
                  <div className="xl:max-w-[600px] 2xl:max-w-[750px] mb-6">
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
                          className="w-full px-3 py-2 text-sm border placeholder:text-sm rounded-md focus:outline-none "
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
                          className="w-full px-3 py-2 border placeholder:text-sm rounded-md focus:outline-none "
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
                          className="w-full px-3 py-2 border placeholder:text-sm rounded-md focus:outline-none "
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
                          className="w-full px-3 py-2 border placeholder:text-sm rounded-md focus:outline-none text-sm "
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
                        <div className="flex items-center gap-2 mb-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Repurchase Action
                          </label>
                          <InfoAlert
                            title=" Repurchase Action"
                            description="Please fill in the author details to create your quiz."
                            variant="secondary"
                          />
                        </div>

                        <select
                          {...register("repurchaseAction")}
                          className="w-full px-3 py-2 border  rounded-md focus:outline-none text-sm text-secondary">
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
              <div className="bg-white border rounded-2xl p-6">
                <div className="flex flex-col items-center justify-between md:flex-row mb-4">
                  <div className="text-center md:text-start">
                    <h1 className="text-xl font-bold mb-2">
                      Course Curriculum & Structure
                    </h1>
                    <p className="text-sm text-gray-600 mb-6">
                      Build your course structure with modules, lectures, and
                      resources
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={addSection}
                    className="px-4 py-2 text-sm bg-green-500 text-white rounded-md hover:bg-green-600">
                    + Add Section
                  </button>
                </div>
                <div>
                  <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="sections" type="sections">
                      {(provided) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          className="space-y-4">
                          {sections.map((section, sectionIndex) => (
                            <Draggable
                              key={section.id}
                              draggableId={section.id}
                              index={sectionIndex}>
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  className="border border-gray-200 rounded-lg overflow-hidden">
                                  <div className="bg-gray-50 px-4 py-3 border-b flex  justify-between items-center ">
                                    <div className="flex w-full md:w-fit items-center">
                                      <span
                                        {...provided.dragHandleProps}
                                        className="mr-2 cursor-move">
                                        <GripVertical
                                          size={16}
                                          className="text-secondary"
                                        />
                                      </span>
                                      <div>
                                        <h2 className="text-sm font-bold">
                                          Section {sectionIndex + 1}:{" "}
                                          {section.title}
                                        </h2>
                                        <span className="text-xs text-gray-500">
                                          {section.lectures.length} lectures
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex space-x-2">
                                      <button
                                        type="button"
                                        onClick={() =>
                                          toggleSection(section.id)
                                        }
                                        className="text-main hover:text-green-700 text-xs">
                                        {section.isExpanded ? (
                                          <span className="flex items-center gap-1 text-xs">
                                            <ChevronUp size={18} />
                                          </span>
                                        ) : (
                                          <span className="flex items-center gap-1 text-xs">
                                            <ChevronDown size={18} />
                                          </span>
                                        )}
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() =>
                                          deleteSection(section.id)
                                        }
                                        className="flex gap-2 items-center p-2  text-main hover:text-red-700 text-xs">
                                        <X size={15} />
                                      </button>
                                    </div>
                                  </div>

                                  {section.isExpanded && (
                                    <div className="p-4">
                                      <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                          Section Title
                                        </label>
                                        <input
                                          type="text"
                                          placeholder={section.title}
                                          onChange={(e) =>
                                            updateSection(section.id, {
                                              title: e.target.value,
                                            })
                                          }
                                          className="w-full px-3 py-2 border placeholder:text-sm rounded-md outline-none"
                                        />
                                      </div>

                                      <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                          Section Description
                                        </label>
                                        <textarea
                                          placeholder={section.description}
                                          onChange={(e) =>
                                            updateSection(section.id, {
                                              description: e.target.value,
                                            })
                                          }
                                          className="w-full px-3 py-2 border resize-none h-[150px] text-sm rounded-md outline-none"
                                          rows={3}
                                        />
                                      </div>

                                      <div className="mb-6">
                                        <div className="flex justify-between items-center mb-3">
                                          <h3 className="font-medium">
                                            Lectures
                                          </h3>
                                          <div className="flex gap-2">
                                            <button
                                              type="button"
                                              onClick={() =>
                                                addLecture(section.id)
                                              }
                                              className="flex items-center gap-1 px-3 py-1 border rounded-md text-sm">
                                              <Plus
                                                className="text-primary"
                                                size={15}
                                              />{" "}
                                              Lecture
                                            </button>
                                            <button
                                              type="button"
                                              onClick={() =>
                                                addQuiz(section.id)
                                              }
                                              className="flex items-center gap-1 px-3 py-1 border rounded-md  text-sm">
                                              <Plus
                                                className="text-primary"
                                                size={15}
                                              />{" "}
                                              Quiz
                                            </button>
                                          </div>
                                        </div>

                                        <Droppable
                                          droppableId={section.id}
                                          type="lectures">
                                          {(provided) => (
                                            <div
                                              ref={provided.innerRef}
                                              {...provided.droppableProps}
                                              className="space-y-2">
                                              {section.lectures.map(
                                                (lecture, lectureIndex) => (
                                                  <Draggable
                                                    key={lecture.id}
                                                    draggableId={lecture.id}
                                                    index={lectureIndex}>
                                                    {(provided) => (
                                                      <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        className="border rounded-lg overflow-hidden">
                                                        <div className="bg-gray-100 px-4 py-3 flex gap-2 justify-between items-start  flex-col md:items-center md:flex-row ">
                                                          <div className="flex w-full md:w-fit items-center">
                                                            <span
                                                              {...provided.dragHandleProps}
                                                              className="mr-2 cursor-move">
                                                              <GripVertical
                                                                size={16}
                                                                className="text-secondary"
                                                              />
                                                            </span>
                                                            <span className="flex justify-center items-center rounded-full w-6 h-6 text-[#4286F7] bg-[#EFF6FF] mr-2">
                                                              <VideoIcon
                                                                size={15}
                                                              />
                                                            </span>
                                                            <span className="text-sm font-bold">
                                                              Lecture{" "}
                                                              {lectureIndex + 1}
                                                              : {lecture.title}
                                                            </span>
                                                          </div>
                                                          <div className="flex space-x-2">
                                                            {/* Up Button - Disabled for first lecture */}
                                                            <button
                                                              type="button"
                                                              onClick={() =>
                                                                moveLectureUp(
                                                                  section.id,
                                                                  lecture.id
                                                                )
                                                              }
                                                              disabled={
                                                                lectureIndex ===
                                                                0
                                                              }
                                                              className={`flex gap-1 items-center p-2 text-xs ${
                                                                lectureIndex ===
                                                                0
                                                                  ? "text-gray-400 cursor-not-allowed"
                                                                  : "text-green-500 hover:text-green-700"
                                                              }`}>
                                                              <span className="text-inherit text-xs">
                                                                Up
                                                              </span>
                                                              <ChevronUp
                                                                size={15}
                                                              />
                                                            </button>

                                                            {/* Down Button - Disabled for last lecture */}
                                                            <button
                                                              type="button"
                                                              onClick={() =>
                                                                moveLectureDown(
                                                                  section.id,
                                                                  lecture.id
                                                                )
                                                              }
                                                              disabled={
                                                                lectureIndex ===
                                                                section.lectures
                                                                  .length -
                                                                  1
                                                              }
                                                              className={`flex gap-1 items-center p-2 text-xs ${
                                                                lectureIndex ===
                                                                section.lectures
                                                                  .length -
                                                                  1
                                                                  ? "text-gray-400 cursor-not-allowed"
                                                                  : "text-green-500 hover:text-green-700"
                                                              }`}>
                                                              <span className="text-inherit text-xs">
                                                                Down
                                                              </span>

                                                              <ChevronDown
                                                                size={15}
                                                              />
                                                            </button>

                                                            <button
                                                              type="button"
                                                              onClick={() =>
                                                                toggleLecture(
                                                                  section.id,
                                                                  lecture.id
                                                                )
                                                              }
                                                              className="text-main hover:text-green-700 text-sm">
                                                              {lecture.isExpanded ? (
                                                                <span className="flex items-center gap-1 text-xs">
                                                                  Collapse
                                                                </span>
                                                              ) : (
                                                                <span className="flex items-center gap-1 text-xs">
                                                                  Edit
                                                                  <Pencil
                                                                    className="hidden sm:block"
                                                                    size={12}
                                                                  />
                                                                </span>
                                                              )}
                                                            </button>

                                                            <button
                                                              type="button"
                                                              onClick={() =>
                                                                deleteLecture(
                                                                  section.id,
                                                                  lecture.id
                                                                )
                                                              }
                                                              className="flex gap-2 items-center p-2  text-red-500 hover:text-red-700 text-xs">
                                                              Delete
                                                              <Trash
                                                                className="hidden sm:block"
                                                                size={15}
                                                              />
                                                            </button>
                                                          </div>
                                                        </div>

                                                        {lecture.isExpanded && (
                                                          <div className="p-4 bg-white">
                                                            <div className="mb-4">
                                                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                                                Lecture Title
                                                              </label>
                                                              <input
                                                                type="text"
                                                                placeholder={
                                                                  lecture.title
                                                                }
                                                                onChange={(e) =>
                                                                  updateLecture(
                                                                    section.id,
                                                                    lecture.id,
                                                                    {
                                                                      title:
                                                                        e.target
                                                                          .value,
                                                                    }
                                                                  )
                                                                }
                                                                className="w-full px-3 py-2 border placeholder:text-sm rounded-md outline-none"
                                                              />
                                                            </div>
                                                            <div className="mb-4">
                                                              <h4 className="font-medium mb-2">
                                                                Video Uri
                                                              </h4>
                                                              <div className="relative flex items-center gap-2">
                                                                <VideoIcon
                                                                  size={15}
                                                                  className="absolute top-1/2 -translate-y-1/2 left-2 text-secondary"
                                                                />
                                                                <input
                                                                  type="text"
                                                                  value={
                                                                    lecture.videoUri
                                                                  }
                                                                  onChange={(
                                                                    e
                                                                  ) =>
                                                                    updateLecture(
                                                                      section.id,
                                                                      lecture.id,
                                                                      {
                                                                        videoUri:
                                                                          e
                                                                            .target
                                                                            .value,
                                                                      }
                                                                    )
                                                                  }
                                                                  placeholder="Enter video URL or upload (mp4)"
                                                                  className="pl-8 w-full px-3 py-2 border placeholder:text-sm rounded-md focus:outline-none"
                                                                />
                                                              </div>
                                                            </div>

                                                            <div className="mb-4">
                                                              <h4 className="font-medium mb-2">
                                                                Material Uri
                                                              </h4>
                                                              <div className="flex relative">
                                                                <UploadIcon
                                                                  size={15}
                                                                  className="absolute top-1/2 -translate-y-1/2 left-2 text-secondary"
                                                                />
                                                                {/* Enter Material URL */}
                                                                <div className="flex items-center gap-2  w-full">
                                                                  <input
                                                                    type="text"
                                                                    value={
                                                                      lecture
                                                                        .materialUris[0] ||
                                                                      ""
                                                                    }
                                                                    onChange={(
                                                                      e
                                                                    ) =>
                                                                      updateLecture(
                                                                        section.id,
                                                                        lecture.id,
                                                                        {
                                                                          materialUris:
                                                                            [
                                                                              e
                                                                                .target
                                                                                .value,
                                                                            ],
                                                                        }
                                                                      )
                                                                    }
                                                                    placeholder="Enter material URL (PDF / PPT)"
                                                                    className="pl-8 w-full px-3 py-2 border placeholder:text-sm rounded-l-lg focus:outline-none"
                                                                  />
                                                                </div>

                                                                {/* Upload File */}
                                                                <div className="flex items-center gap-2">
                                                                  <label
                                                                    className="flex items-center gap-2 border rounded-r-lg p-2 cursor-pointer"
                                                                    htmlFor="material-file">
                                                                    <UploadIcon
                                                                      size={15}
                                                                      className="text-primary"
                                                                    />
                                                                    Upload
                                                                  </label>
                                                                  <input
                                                                    id="material-file"
                                                                    type="file"
                                                                    accept=".pdf,.ppt,.pptx"
                                                                    onChange={(
                                                                      e
                                                                    ) => {
                                                                      const file =
                                                                        e.target
                                                                          .files?.[0];
                                                                      if (
                                                                        file
                                                                      ) {
                                                                        // Replace this with your file upload logic (e.g. to S3 or Firebase)
                                                                        const fakeUploadedUrl =
                                                                          URL.createObjectURL(
                                                                            file
                                                                          );
                                                                        updateLecture(
                                                                          section.id,
                                                                          lecture.id,
                                                                          {
                                                                            materialUris:
                                                                              [
                                                                                fakeUploadedUrl,
                                                                              ],
                                                                          }
                                                                        );
                                                                      }
                                                                    }}
                                                                    className="hidden"
                                                                  />
                                                                </div>
                                                              </div>
                                                            </div>

                                                            <div className="flex justify-between items-center mt-4">
                                                              <div>
                                                                <h1>
                                                                  No Enrollment
                                                                  Requirement
                                                                </h1>
                                                                <span className="text-sm text-secondary">
                                                                  Allow students
                                                                  to view this
                                                                  lecture
                                                                  without
                                                                  enrolling in
                                                                  the course.
                                                                </span>
                                                              </div>
                                                              <label className="flex items-center cursor-pointer">
                                                                <div className="relative">
                                                                  <input
                                                                    type="checkbox"
                                                                    checked={
                                                                      lecture.noEnrollmentRequired
                                                                    }
                                                                    onChange={(
                                                                      e
                                                                    ) =>
                                                                      updateLecture(
                                                                        section.id,
                                                                        lecture.id,
                                                                        {
                                                                          noEnrollmentRequired:
                                                                            e
                                                                              .target
                                                                              .checked,
                                                                        }
                                                                      )
                                                                    }
                                                                    className="sr-only peer"
                                                                  />
                                                                  <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-colors"></div>
                                                                  <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-full"></div>
                                                                </div>
                                                              </label>
                                                            </div>
                                                          </div>
                                                        )}
                                                      </div>
                                                    )}
                                                  </Draggable>
                                                )
                                              )}

                                              {provided.placeholder}
                                            </div>
                                          )}
                                        </Droppable>
                                      </div>

                                      <div className="mb-6">
                                        <div className="flex justify-between items-center mb-3">
                                          <h3 className="font-medium">
                                            Quizzes
                                          </h3>
                                        </div>

                                        <Droppable
                                          droppableId={`quizzes-${section.id}`}
                                          type="quizzes">
                                          {(provided) => (
                                            <div
                                              ref={provided.innerRef}
                                              {...provided.droppableProps}
                                              className="space-y-2">
                                              {section.quizzes.map(
                                                (quiz, quizIndex) => (
                                                  <Draggable
                                                    key={quiz.id}
                                                    draggableId={quiz.id}
                                                    index={quizIndex}>
                                                    {(provided) => (
                                                      <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        className="border rounded-lg overflow-hidden">
                                                        <div className="bg-gray-100 px-4 py-3 flex gap-2 justify-between items-start flex-col md:items-center md:flex-row">
                                                          <div className="flex w-full md:w-fit items-center">
                                                            <span
                                                              {...provided.dragHandleProps}
                                                              className="mr-2 cursor-move">
                                                              <GripVertical
                                                                size={16}
                                                                className="text-secondary"
                                                              />
                                                            </span>
                                                            <span className="flex justify-center items-center rounded-full w-8 h-8 bg-[#FFFBEB] text-[#F6A927] mr-2">
                                                              <FileWarning
                                                                size={15}
                                                              />
                                                            </span>
                                                            <span className="text-sm font-bold">
                                                              Quiz{" "}
                                                              {quizIndex + 1}:{" "}
                                                              {quiz.title}
                                                            </span>
                                                          </div>
                                                          <div className="flex space-x-2">
                                                            {/* Up Button - Disabled for first quiz */}
                                                            <button
                                                              type="button"
                                                              onClick={() =>
                                                                moveQuizUp(
                                                                  section.id,
                                                                  quiz.id
                                                                )
                                                              }
                                                              disabled={
                                                                quizIndex === 0
                                                              }
                                                              className={`flex gap-1 items-center p-2 text-xs ${
                                                                quizIndex === 0
                                                                  ? "text-gray-400 cursor-not-allowed"
                                                                  : "text-green-500 hover:text-green-700"
                                                              }`}>
                                                              <span className="text-inherit text-xs">
                                                                Up
                                                              </span>
                                                              <ChevronUp
                                                                size={15}
                                                              />
                                                            </button>

                                                            {/* Down Button - Disabled for last quiz */}
                                                            <button
                                                              type="button"
                                                              onClick={() =>
                                                                moveQuizDown(
                                                                  section.id,
                                                                  quiz.id
                                                                )
                                                              }
                                                              disabled={
                                                                quizIndex ===
                                                                section.quizzes
                                                                  .length -
                                                                  1
                                                              }
                                                              className={`flex gap-1 items-center p-2 text-xs ${
                                                                quizIndex ===
                                                                section.quizzes
                                                                  .length -
                                                                  1
                                                                  ? "text-gray-400 cursor-not-allowed"
                                                                  : "text-green-500 hover:text-green-700"
                                                              }`}>
                                                              <span className="text-inherit text-xs">
                                                                Down
                                                              </span>
                                                              <ChevronDown
                                                                size={15}
                                                              />
                                                            </button>
                                                            <button
                                                              type="button"
                                                              onClick={() =>
                                                                toggleQuiz(
                                                                  section.id,
                                                                  quiz.id
                                                                )
                                                              }
                                                              className="text-main hover:text-green-700 text-sm">
                                                              {quiz.isExpanded ? (
                                                                <span className="flex items-center gap-1 text-xs">
                                                                  Collapse
                                                                </span>
                                                              ) : (
                                                                <span className="flex items-center gap-1 text-xs">
                                                                  Edit
                                                                  <Pencil
                                                                    className="hidden sm:block"
                                                                    size={12}
                                                                  />
                                                                </span>
                                                              )}
                                                            </button>
                                                            <button
                                                              type="button"
                                                              onClick={() =>
                                                                deleteQuiz(
                                                                  section.id,
                                                                  quiz.id
                                                                )
                                                              }
                                                              className="flex gap-2 items-center p-2  text-red-500 hover:text-red-700 text-xs">
                                                              Delete
                                                              <Trash
                                                                className="hidden sm:block"
                                                                size={15}
                                                              />
                                                            </button>
                                                          </div>
                                                        </div>

                                                        {quiz.isExpanded && (
                                                          <div className="flex items-center flex-col gap-3 p-4 bg-white md:flex-row w-full">
                                                            {/* Quiz Selector */}
                                                            <div className="mb-4 flex-1 w-full md:w-fit">
                                                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                                                Select Quiz
                                                              </label>
                                                              <select
                                                                value={quiz.id}
                                                                onChange={(
                                                                  e
                                                                ) => {
                                                                  const selectedQuiz =
                                                                    quizzes.find(
                                                                      (q) =>
                                                                        q.id ===
                                                                        e.target
                                                                          .value
                                                                    );
                                                                  if (
                                                                    !selectedQuiz
                                                                  )
                                                                    return;

                                                                  const updatedSections =
                                                                    sections.map(
                                                                      (s) => {
                                                                        if (
                                                                          s.id !==
                                                                          section.id
                                                                        )
                                                                          return s;

                                                                        return {
                                                                          ...s,
                                                                          quizzes:
                                                                            s.quizzes.map(
                                                                              (
                                                                                q
                                                                              ) =>
                                                                                q.id ===
                                                                                quiz.id
                                                                                  ? {
                                                                                      ...q,
                                                                                      ...selectedQuiz,
                                                                                    }
                                                                                  : q
                                                                            ),
                                                                        };
                                                                      }
                                                                    );

                                                                  setValue(
                                                                    "sections",
                                                                    updatedSections
                                                                  );
                                                                }}
                                                                className="w-full px-3 py-2 border rounded-md outline-none">
                                                                <option value="">
                                                                  Select a quiz
                                                                </option>
                                                                {quizzes.map(
                                                                  (q) => (
                                                                    <option
                                                                      key={q.id}
                                                                      value={
                                                                        q.id
                                                                      }>
                                                                      {q.title}
                                                                    </option>
                                                                  )
                                                                )}
                                                              </select>
                                                            </div>

                                                            {/* Create New Quiz Link */}
                                                            <Link
                                                              className="h-fit mt-2 py-2 px-8 rounded-lg bg-primary text-white"
                                                              href="/instructor/add-quiz">
                                                              + Create Quiz
                                                            </Link>
                                                          </div>
                                                        )}
                                                      </div>
                                                    )}
                                                  </Draggable>
                                                )
                                              )}

                                              {provided.placeholder}
                                            </div>
                                          )}
                                        </Droppable>
                                      </div>
                                    </div>
                                  )}
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
                {sections.length === 0 && (
                  <p className="text-secondary text-sm text-center">
                    There is sections here
                  </p>
                )}
              </div>
            )}

            {activeTab === "preview" && (
              <div className="bg-white p-4 md:p-6 border rounded-lg mb-16">
                {watch("previewVideo") ? (
                  <YouTubePlayer
                    videoUrl={watch("previewVideo")}
                    height={320}
                  />
                ) : (
                  <div
                    className="flex items-center w-full justify-center bg-gray-100 rounded-lg"
                    style={{ height: "320px" }}>
                    <div className="text-center p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 mx-auto text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="mt-2 text-gray-500">
                        No preview video available
                      </p>
                    </div>
                  </div>
                )}{" "}
                <div className="mt-6">
                  <div className="flex items-center flex-wrap gap-4 mb-12">
                    <h2 className="text-2xl font-semibold  capitalize">
                      {watch("courseName") || "course name here"}
                    </h2>
                    <span className="p-2 rounded-full bg-gray-100 text-secondary text-xs">
                      {watch("courseType")}
                    </span>
                    <div className="flex items-center gap-2">
                      <Star className="text-orange-500" size={15} />
                      <p className="text-xs text-secondary">(4.5 Reviews)</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">
                      Course Overview{" "}
                    </h2>
                    <div className=" overflow-hidden w-full ">
                      <div className="relative">
                        <div className="min-h-[200px] p-4 prose max-w-none w-full">
                          {watch("courseOverview") ? (
                            <p
                              className="text-secondary w-full"
                              dangerouslySetInnerHTML={{
                                __html: watch("courseOverview"),
                              }}
                            />
                          ) : (
                            <p className="text-gray-400 w-full">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industrys standard dummy text ever since the 1500s
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">
                      Who can Attend this Course ?
                    </h2>
                    <p className="text-secondary mb-4">
                      {watch("attendDescribe") ||
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {watch("attendees").map((attend, index) => {
                        return (
                          <li
                            key={index}
                            className="flex items-center gap-2 mb-4 text-sm font-semibold">
                            <div className="w-8">
                              <div className="flex justify-center items-center w-7 h-7 rounded-full bg-primary text-white">
                                <ChevronRight size={15} />
                              </div>{" "}
                            </div>
                            {attend}
                          </li>
                        );
                      })}{" "}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">
                      What will you learn ?
                    </h2>
                    <p className="text-secondary mb-4">
                      {watch("learnDescribe") ||
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
                    </p>
                    <ul>
                      {watch("learningOutcomes").map((outcomes, index) => {
                        return (
                          <li
                            key={index}
                            className="flex items-center gap-2 mb-4 text-sm font-semibold">
                            <div className="w-8">
                              <div className="flex justify-center items-center w-7 h-7 rounded-full bg-primary text-white">
                                <Check size={15} />
                              </div>{" "}
                            </div>

                            {outcomes}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div>
                    {sections.map((section, index) => (
                      <div
                        key={section.id}
                        className="mb-6 border rounded-xl overflow-hidden">
                        {/* Section Header */}
                        <div
                          className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
                          onClick={() => toggleSectionPreview(section.id)}>
                          <div>
                            <h3 className="font-semibold text-sm mb-1">
                              Section {index + 1}: {section.title}
                            </h3>
                            <p className="text-xs text-gray-500">
                              {section.lectures.length} lectures
                              {section.quizzes.length > 0 &&
                                ` • ${section.quizzes.length} quiz`}
                            </p>
                          </div>
                          <ChevronDownIcon
                            className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                              expandedSections[section.id]
                                ? "transform rotate-180"
                                : ""
                            }`}
                          />
                        </div>

                        {/* Collapsible Content */}
                        {expandedSections[section.id] && (
                          <div className="p-4 bg-white">
                            {/* Lectures List */}
                            <div className="space-y-2 mb-4">
                              {section.lectures.length > 0 ? (
                                <ul className="space-y-2 pl-3">
                                  {section.lectures.map((lecture, idx) => (
                                    <li
                                      key={lecture.id}
                                      className="flex items-center gap-3 p-3 text-sm mb-4 rounded-lg hover:bg-gray-100">
                                      {lecture.preview ? (
                                        <span className="flex justify-center items-center w-8 h-8 bg-[#EFF6FF] text-[#4286F7] rounded-full mr-2">
                                          <Play size={15} />
                                        </span>
                                      ) : (
                                        <span className="flex justify-center items-center w-8 h-8 bg-[#EFF6FF] text-[#4286F7] rounded-full mr-2">
                                          <Video size={15} />
                                        </span>
                                      )}
                                      <span className="flex-1 font-semibold text-sm">
                                        Lecture {idx + 1}:{" "}
                                        {lecture.title || "Untitled lecture"}
                                      </span>
                                      {lecture.isLocked && (
                                        <span className="flex justify-center items-center w-7 h-7 rounded-full text-secondary bg-gray-100 text-sm">
                                          <Lock size={15} />
                                        </span>
                                      )}
                                      {lecture.preview && (
                                        <span className="flex gap-2 items-center bg-[#EFF6FF] text-[#4286F7] rounded-full py-1 px-3  text-xs">
                                          <Eye size={15} />
                                          <span className="hidden sm:block text-xs">
                                            preview
                                          </span>
                                        </span>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="text-gray-500 text-sm">
                                  No lectures added yet
                                </p>
                              )}
                            </div>

                            {/* Quizzes List */}
                            <div className="space-y-2">
                              {section.quizzes.length > 0 ? (
                                <ul className="space-y-2 pl-3">
                                  {section.quizzes.map((quiz, idx) => (
                                    <li
                                      key={quiz.id}
                                      className="flex items-center gap-3 p-3 text-sm mb-4 rounded-lg hover:bg-gray-100">
                                      <span className="flex justify-center items-center w-8 h-8 bg-[#FFFBEB] text-[#F6A927] rounded-full mr-2">
                                        <FileWarning size={15} />
                                      </span>
                                      <span className="flex-1 font-semibold text-sm">
                                        Quiz {idx + 1}:{" "}
                                        {quiz.title || "Untitled quiz"}
                                      </span>
                                      {quiz.isLocked && (
                                        <span className="flex justify-center items-center w-7 h-7 rounded-full text-secondary bg-gray-100 text-sm">
                                          <Lock size={15} />
                                        </span>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="text-gray-500 text-sm">
                                  No quizzes added yet
                                </p>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
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
                <div className="flex items-center gap-2 mb-2">
                  <label className="block text-sm font-medium text-gray-700 ">
                    Author Details
                  </label>
                  <InfoAlert
                    title="Author Details"
                    description="Please fill in the author details to create your quiz."
                    variant="secondary"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mb-4 w-full">
                  <div className="space-y-2 w-full">
                    {/* Multi-select dropdown */}
                    <select
                      className="w-full text-sm text-secondary px-3 py-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                    className="w-full text-sm px-3 py-2 border placeholder:text-sm rounded-md focus:outline-none "
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
                    className="w-full text-sm px-3 py-2 border placeholder:text-sm rounded-md focus:outline-none "
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
                  className="w-full text-sm text-secondary px-3 py-2 border  rounded-md focus:outline-none ">
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
                  label="No Enrollment Requirement"
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
                  {...register("tagsInput")}
                  type="text"
                  className="w-full px-3 py-2 border placeholder:text-sm rounded-md focus:outline-none"
                  placeholder="Type tag and press Enter or comma"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === ",") {
                      e.preventDefault();
                      const value = e.currentTarget.value.trim();
                      if (value) {
                        const currentTags: string[] = watch("tags") || [];
                        if (!currentTags.includes(value)) {
                          setValue("tags", [...currentTags, value]);
                        }
                        setValue("tagsInput", []); // clear input
                      }
                    }
                  }}
                />
              </div>

              {/* Tags display */}
              <div className="flex flex-wrap gap-2 mt-2">
                {(watch("tags") || []).map((tag: string, index: number) => (
                  <div
                    key={`${tag}-${index}`}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                    {tag}
                    <button
                      type="button"
                      onClick={() => {
                        const currentTags: string[] = watch("tags") || [];
                        const updated = currentTags.filter(
                          (_, i) => i !== index
                        );
                        setValue("tags", updated);
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
                  className="flex h-[200px] w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed  bg-white p-2  hover:border-primary hover:text-primary">
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
              <div className="flex items-center gap-2 mb-2">
                <label className="block text-sm font-medium text-gray-700 ">
                  Preview Video
                </label>
                <InfoAlert
                  title="Preview Video"
                  description="Please fill in the author details to create your quiz."
                  variant="secondary"
                />
              </div>

              <div className="relative">
                <input
                  {...register("previewVideo")}
                  type="text"
                  className="w-full  px-3 py-2 pl-10 border placeholder:text-sm rounded-md focus:outline-none "
                  placeholder="Enter Video url or upload"
                />
                <Video
                  className="absolute top-1/2 -translate-y-1/2 left-2 text-secondary"
                  size={18}
                />
              </div>
            </div>
          </div>

          {/* Publishing Section */}
          <div className="bg-white p-4 rounded-2xl border mb-8">
            <h3 className="text-lg font-medium mb-4">Publishing</h3>

            <div className="space-y-3">
              {/* Validation fields  */}
              <div className="flex items-start">
                <div
                  className={`flex items-center justify-center h-5 w-5 rounded-full border-2 mr-3 mt-0.5 ${
                    isFormValid
                      ? "border-green-500 bg-green-500 text-white"
                      : "border-gray-300"
                  }`}>
                  {isFormValid && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <span
                  className={`${
                    isFormValid ? "text-primary" : "text-gray-500"
                  }`}>
                  All required fields are complete
                </span>
              </div>

              {/* Validation Course structure */}
              <div className="flex items-start">
                <div
                  className={`flex items-center justify-center h-5 w-5 rounded-full border-2 mr-3 mt-0.5 ${
                    isCurriculumValid
                      ? "border-green-500 bg-green-500 text-white"
                      : "border-gray-300"
                  }`}>
                  {isCurriculumValid && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <span
                  className={`${
                    isCurriculumValid ? "text-primary" : "text-gray-500"
                  }`}>
                  Course structure is organized
                </span>
              </div>

              {/* Validation Pricing and enrollment */}
              <div className="flex items-start">
                <div
                  className={`flex items-center justify-center h-5 w-5 rounded-full border-2 mr-3 mt-0.5 ${
                    isPricingValid
                      ? "border-green-500 bg-green-500 text-white"
                      : "border-gray-300"
                  }`}>
                  {isPricingValid && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <span
                  className={`${
                    isPricingValid ? "text-primary" : "text-gray-500"
                  }`}>
                  Pricing and enrollment options are set
                </span>
              </div>

              {/* Validation Instructor */}
              <div className="flex items-start">
                <div
                  className={`flex items-center justify-center h-5 w-5 rounded-full border-2 mr-3 mt-0.5 ${
                    isInstructorValid
                      ? "border-green-500 bg-green-500 text-white"
                      : "border-gray-300"
                  }`}>
                  {isInstructorValid && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <span
                  className={`${
                    isInstructorValid ? "text-primary" : "text-gray-500"
                  }`}>
                  Instructor information is provided
                </span>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex flex-col gap-2 pt-6">
              <button
                type="submit"
                disabled={isSubmitDisabled}
                className={`px-4 py-2 border rounded-md shadow-sm text-sm font-medium text-white ${
                  !isSubmitDisabled
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-green-600 opacity-65 cursor-not-allowed"
                }`}>
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Publish Course"
                )}
              </button>
              <div className="flex flex-col gap-2 space-x-3">
                <button
                  type="button"
                  onClick={handleSaveDraft}
                  disabled={isSaving}
                  className={`flex justify-center px-4 py-2 border rounded-md text-sm w-full font-medium transition ${
                    isSaving
                      ? "border-gray-300 text-gray-500 bg-gray-100 cursor-not-allowed"
                      : "border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
                  }`}>
                  {isSaving ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-600 inline"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Saving...
                    </>
                  ) : (
                    <div className="flex items-center gap-1 text-sm">
                      <Save size={15} className="text-primary" />
                      Save Draft
                    </div>
                  )}
                </button>
              </div>
            </div>
            <div className="mt-2">
              {saveStatus === "success" && (
                <div className="text-sm text-green-600 flex items-center">
                  <svg
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Draft saved successfully
                </div>
              )}

              {submitStatus === "success" && (
                <div className="text-sm text-green-600 flex items-center">
                  <svg
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Draft saved successfully
                </div>
              )}

              {saveStatus === "error" && (
                <div className="text-sm text-red-600 flex items-center">
                  <svg
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Failed to save draft
                </div>
              )}
              {submitStatus === "error" && (
                <div className="text-sm text-red-600 flex items-center">
                  <svg
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Failed to submit
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
