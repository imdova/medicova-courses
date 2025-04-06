"use client";
"use client";
import { useState, useCallback, useEffect, useRef } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import {
  ChevronDown,
  ChevronUp,
  GripVertical,
  Trash2,
  Plus,
  Minus,
  Image as ImageIcon,
  Eye,
  Save,
  ArrowLeft,
  Settings,
  Timer,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CustomAlert from "@/components/UI/CustomAlert";

type QuestionOption = {
  id: string;
  text: string;
  imageUrl?: string;
  isCorrect: boolean;
};

type QuestionType =
  | "multiple-choice"
  | "true-false"
  | "short-answer"
  | "fill-in-the-blank";

type Question = {
  id: string;
  type: QuestionType;
  text: string;
  points: number;
  imageUrl?: string;
  options?: QuestionOption[];
  explanation?: string;
  isExpanded: boolean;
};

type QuizFormValues = {
  title: string;
  instructions: string;
  randomizeQuestions: boolean;
  immediateFeedback: boolean;
  feedbackByEmail: boolean;
  startDate: string;
  endDate: string;
  timeLimit: number;
  retakeNumbers: number;
  passingScore: number;
  questions: Question[];
};

export default function CreateQuiz() {
  const [activeTab, setActiveTab] = useState<"editor" | "preview">("editor");
  const [isClient, setIsClient] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const optionFileInputRef = useRef<HTMLInputElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quizTimeLeft, setQuizTimeLeft] = useState<number | null>(null);
  const [alert, setAlert] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    getValues,
    trigger,
  } = useForm<QuizFormValues>({
    defaultValues: {
      title: "",
      instructions: "",
      randomizeQuestions: false,
      immediateFeedback: true,
      feedbackByEmail: false,
      startDate: "",
      endDate: "",
      timeLimit: 0,
      passingScore: 70,
      retakeNumbers: 3,
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          text: "What is the Output of Tuned?",
          points: 5,
          options: [
            { id: "q1-o1", text: "Option 1", isCorrect: false },
            { id: "q1-o2", text: "Option 2", isCorrect: true },
            { id: "q1-o3", text: "Option 3", isCorrect: false },
            { id: "q1-o4", text: "Option 4", isCorrect: false },
          ],
          isExpanded: true,
        },
      ],
    },
    mode: "onBlur",
  });
  const timeLimit = watch("timeLimit"); // Get the total quiz time limit from form

  useEffect(() => {
    if (timeLimit === 0) return; // No limit mode

    setQuizTimeLeft(timeLimit); // Initialize quiz timer

    const timer = setInterval(() => {
      setQuizTimeLeft((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(timer);
          showAlert("Quiz End!", "error");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLimit]);

  const { fields, append, remove, move } = useFieldArray({
    control,
    name: "questions",
  });

  const toggleQuestion = (index: number) => {
    const currentValue = getValues(`questions.${index}.isExpanded`);
    setValue(`questions.${index}.isExpanded`, !currentValue);
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(fields);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // Update your fields array with the new order
    // This depends on how you're managing state (useFieldArray, etc.)
    move(result.source.index, result.destination.index);
  };

  const addQuestion = () => {
    const newId = `q${Date.now()}`;
    append({
      id: newId,
      type: "multiple-choice",
      text: "",
      points: 1,
      options: [
        { id: `${newId}-o1`, text: "", isCorrect: false },
        { id: `${newId}-o2`, text: "", isCorrect: false },
      ],
      isExpanded: true,
    });
  };

  const handleQuestionTypeChange = (index: number, newType: QuestionType) => {
    const questionId = getValues(`questions.${index}.id`);

    if (newType === "true-false") {
      setValue(`questions.${index}.options`, [
        { id: `${questionId}-true`, text: "True", isCorrect: false },
        { id: `${questionId}-false`, text: "False", isCorrect: false },
      ]);
    } else if (newType === "multiple-choice") {
      setValue(`questions.${index}.options`, [
        { id: `${questionId}-o1`, text: "", isCorrect: false },
        { id: `${questionId}-o2`, text: "", isCorrect: false },
      ]);
    } else {
      setValue(`questions.${index}.options`, undefined);
    }

    setValue(`questions.${index}.type`, newType);
  };

  const addOption = (questionIndex: number) => {
    const questionId = getValues(`questions.${questionIndex}.id`);
    const newOptionId = `${questionId}-o${Date.now()}`;

    const currentOptions =
      getValues(`questions.${questionIndex}.options`) || [];
    setValue(`questions.${questionIndex}.options`, [
      ...currentOptions,
      { id: newOptionId, text: "", isCorrect: false },
    ]);
  };

  const removeOption = (questionIndex: number, optionIndex: number) => {
    const currentOptions =
      getValues(`questions.${questionIndex}.options`) || [];
    const newOptions = currentOptions.filter((_, i) => i !== optionIndex);
    setValue(`questions.${questionIndex}.options`, newOptions);
  };

  const handleQuestionImageUpload = (
    questionIndex: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, upload to server and store URL
      const imageUrl = URL.createObjectURL(file);
      setValue(`questions.${questionIndex}.imageUrl`, imageUrl);
    }
  };

  const handleOptionImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const questionIndex = parseInt(e.target.dataset.questionIndex || "0");
    const optionIndex = parseInt(e.target.dataset.optionIndex || "0");

    const imageUrl = URL.createObjectURL(file);
    const currentOptions = [
      ...(getValues(`questions.${questionIndex}.options`) || []),
    ];

    currentOptions[optionIndex] = {
      ...currentOptions[optionIndex],
      imageUrl,
      text: currentOptions[optionIndex].text || "Image Option",
    };
    setValue(`questions.${questionIndex}.options`, currentOptions);
  };

  const triggerQuestionImageUpload = (questionIndex: number) => {
    if (fileInputRef.current) {
      fileInputRef.current.dataset.questionIndex = questionIndex.toString();
      fileInputRef.current.click();
    }
  };

  const triggerOptionImageUpload = (
    questionIndex: number,
    optionIndex: number
  ) => {
    if (optionFileInputRef.current) {
      optionFileInputRef.current.dataset.questionIndex =
        questionIndex.toString();
      optionFileInputRef.current.dataset.optionIndex = optionIndex.toString();
      optionFileInputRef.current.click();
    }
  };

  const calculateTotalPoints = useCallback(() => {
    return watch("questions").reduce((sum, q) => sum + q.points, 0);
  }, [watch]);

  if (!isClient) {
    return <div className="min-h-screen bg-gray-50 py-8 px-4">Loading...</div>;
  }
  // Show Alert Function
  const showAlert = (message: string, type: "success" | "error") => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 3000); // Hide after 3 seconds
  };
  // handel review qustion navigation
  const questions = watch("questions") || [];
  const currentQuestion = questions[currentIndex];
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  //handel submit
  const onSubmit = (data: QuizFormValues) => {
    console.log("Quiz submitted:", data);
    showAlert("Quiz saved successfully!", "success");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-h-screen text-main relative py-8 px-4">
      {/* Global Alert Display */}
      {alert && (
        <CustomAlert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}
      {/* Hidden file inputs */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={(e) => {
          const questionIndex = parseInt(e.target.dataset.questionIndex || "0");
          handleQuestionImageUpload(questionIndex, e);
          e.target.value = ""; // Reset input
        }}
        accept="image/*"
        className="hidden"
      />

      <input
        type="file"
        ref={optionFileInputRef}
        onChange={handleOptionImageUpload}
        accept="image/*"
        className="hidden"
      />

      <div className="flex flex-col xl:flex-row gap-4">
        <div className="flex-1">
          {/* Header */}
          <div className="flex flex-col justify-between sm:items-center py-4 gap-4 border-b border-gray-200 sm:flex-row">
            <div className="flex gap-6 items-center">
              <Link
                className="p-2 border text-secondary rounded-md"
                href={"/admin"}>
                <ArrowLeft size={15} />
              </Link>
              <h1 className="text-2xl font-bold text-gray-800">Create Quiz</h1>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="flex items-center gap-2 px-5 py-2 bg-white border rounded-md text-sm text-primary"
                onClick={() => setActiveTab("preview")}>
                <Eye size={15} />
                Preview
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2 bg-primary border rounded-md text-sm text-white">
                <Save size={15} />
                Save Quiz
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex p-1 bg-[#E4E4E7] rounded-lg mb-4">
            <button
              type="button"
              className={`p-2 w-full rounded-md font-medium ${
                activeTab === "editor" ? "bg-white" : ""
              }`}
              onClick={() => setActiveTab("editor")}>
              Editor
            </button>
            <button
              type="button"
              className={`p-2 w-full font-medium rounded-md ${
                activeTab === "preview" ? "bg-white" : ""
              }`}
              onClick={() => setActiveTab("preview")}>
              Preview
            </button>
          </div>
          <div className="overflow-hidden">
            {/* Content */}
            <div className="p-0 sm:p-3">
              {activeTab === "editor" ? (
                <div className="box-content space-y-6">
                  {/* Quiz Details */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="p-4 ">
                      <h2 className="font-semibold text-lg">Quiz Details</h2>
                      <p className="text-secondary text-sm">
                        Enter the basic information about your quiz
                      </p>
                    </div>

                    <div className="p-4 space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Quiz Title *
                        </label>
                        <input
                          type="text"
                          className={`w-full px-3 py-2 border ${
                            errors.title ? "border-red-500" : "border-gray-300"
                          } rounded-md focus:outline-none `}
                          {...register("title", {
                            required: "Title is required",
                          })}
                          placeholder="Enter quiz title"
                        />
                        {errors.title && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.title.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Instructions
                        </label>
                        <textarea
                          className="w-full px-3 py-2 border min-h-[200px] resize-none border-gray-300 rounded-md focus:outline-none "
                          rows={3}
                          {...register("instructions")}
                          placeholder="Write Quiz Instructions"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Questions */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="flex flex-col justify-between  p-4 bg-gray-50 cursor-pointer sm:flex-row sm:items-center">
                      <h2 className="font-semibold text-lg">Questions</h2>
                      <button
                        type="button"
                        onClick={addQuestion}
                        className="mt-4 px-4 py-2 w-fit bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none  focus:ring-offset-2 flex items-center">
                        <Plus className="w-5 h-5 mr-1" />
                        Add Question
                      </button>
                    </div>
                    <div className="p-4">
                      <DragDropContext onDragEnd={handleDragEnd}>
                        <Droppable droppableId="questions">
                          {(provided) => (
                            <div
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                              className="space-y-4">
                              {fields.map((question, index) => (
                                <Draggable
                                  key={question.id}
                                  draggableId={question.id}
                                  index={index}>
                                  {(provided, snapshot) => (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      className={`border border-gray-200 rounded-lg overflow-hidden bg-white ${
                                        snapshot.isDragging ? "shadow-lg" : ""
                                      }`}>
                                      <div
                                        {...provided.dragHandleProps}
                                        className="flex justify-between items-center p-4 cursor-pointer bg-gray-50">
                                        <div className="flex items-center space-x-2">
                                          <div className="cursor-grab">
                                            <GripVertical className="w-5 h-5 text-gray-400" />
                                          </div>
                                          <span className="text-sm sm:text-lg">
                                            Question {index + 1} (
                                            {question.type}) - {question.points}{" "}
                                            points
                                          </span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                          <button
                                            type="button"
                                            onClick={() =>
                                              toggleQuestion(index)
                                            }
                                            className="text-gray-500 hover:text-gray-700">
                                            {watch(
                                              `questions.${index}.isExpanded`
                                            ) ? (
                                              <ChevronUp className="w-5 h-5" />
                                            ) : (
                                              <ChevronDown className="w-5 h-5" />
                                            )}
                                          </button>
                                          <button
                                            type="button"
                                            onClick={() => remove(index)}
                                            className="text-red-500 hover:text-red-700">
                                            <Trash2 className="w-5 h-5" />
                                          </button>
                                        </div>
                                      </div>

                                      {errors.questions?.[index]?.points && (
                                        <p className="px-4 text-sm text-red-600">
                                          {
                                            errors.questions[index]?.points
                                              ?.message
                                          }
                                        </p>
                                      )}

                                      {watch(
                                        `questions.${index}.isExpanded`
                                      ) && (
                                        <div className="p-4 space-y-3">
                                          <div className="flex gap-4 flex-col sm:flex-row">
                                            <div className="w-full">
                                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Question Type
                                              </label>
                                              <Controller
                                                name={`questions.${index}.type`}
                                                control={control}
                                                render={({ field }) => (
                                                  <select
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                                                    {...field}
                                                    onChange={(e) => {
                                                      field.onChange(e);
                                                      handleQuestionTypeChange(
                                                        index,
                                                        e.target
                                                          .value as QuestionType
                                                      );
                                                    }}>
                                                    <option value="multiple-choice">
                                                      Multiple Choice
                                                    </option>
                                                    <option value="true-false">
                                                      True/False
                                                    </option>
                                                    <option value="short-answer">
                                                      Short Answer
                                                    </option>
                                                    <option value="fill-in-the-blank">
                                                      Fill in the Blank
                                                    </option>
                                                  </select>
                                                )}
                                              />
                                            </div>
                                            <span className="font-medium w-1/4">
                                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Points
                                              </label>
                                              <Controller
                                                name={`questions.${index}.points`}
                                                control={control}
                                                rules={{
                                                  required:
                                                    "Points are required",
                                                  min: {
                                                    value: 1,
                                                    message:
                                                      "Must be at least 1",
                                                  },
                                                }}
                                                render={({ field }) => (
                                                  <input
                                                    type="number"
                                                    min="1"
                                                    className={`w-full px-3 py-2 border ${
                                                      errors.questions?.[index]
                                                        ?.points
                                                        ? "border-red-500"
                                                        : "border-gray-300"
                                                    } rounded-md focus:outline-none`}
                                                    {...field}
                                                    onChange={(e) => {
                                                      field.onChange(
                                                        parseInt(
                                                          e.target.value
                                                        ) || 1
                                                      );
                                                      trigger(
                                                        `questions.${index}.points`
                                                      );
                                                    }}
                                                  />
                                                )}
                                              />
                                            </span>
                                          </div>
                                          <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                              Question Text *
                                            </label>
                                            <div className="flex items-center space-x-2">
                                              <input
                                                type="text"
                                                className={`flex-1 px-3 py-2 border ${
                                                  errors.questions?.[index]
                                                    ?.text
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                                } rounded-md focus:outline-none`}
                                                {...register(
                                                  `questions.${index}.text`,
                                                  {
                                                    required:
                                                      "Question text is required",
                                                  }
                                                )}
                                                placeholder="Enter your question"
                                              />
                                              <button
                                                type="button"
                                                onClick={() =>
                                                  triggerQuestionImageUpload(
                                                    index
                                                  )
                                                }
                                                className="p-2 text-gray-500 hover:text-green-500 hover:border-green-500 rounded-md border border-gray-300"
                                                title="Add image to question">
                                                <ImageIcon className="w-5 h-5" />
                                              </button>
                                            </div>
                                            {watch(
                                              `questions.${index}.imageUrl`
                                            ) && (
                                              <div className="mt-2 relative">
                                                <Image
                                                  src={
                                                    watch(
                                                      `questions.${index}.imageUrl`
                                                    ) ||
                                                    "/placeholder-image.jpg"
                                                  }
                                                  alt="Question"
                                                  className="max-h-40 rounded-md"
                                                  width={300}
                                                  height={200}
                                                  objectFit="cover"
                                                />
                                                <button
                                                  type="button"
                                                  onClick={() =>
                                                    setValue(
                                                      `questions.${index}.imageUrl`,
                                                      undefined
                                                    )
                                                  }
                                                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600">
                                                  <Minus className="w-3 h-3" />
                                                </button>
                                              </div>
                                            )}
                                            {errors.questions?.[index]
                                              ?.text && (
                                              <p className="mt-1 text-sm text-red-600">
                                                {
                                                  errors.questions[index]?.text
                                                    ?.message
                                                }
                                              </p>
                                            )}
                                          </div>

                                          {(watch(`questions.${index}.type`) ===
                                            "multiple-choice" ||
                                            watch(`questions.${index}.type`) ===
                                              "true-false") && (
                                            <div>
                                              <div className="flex flex-col justify-between sm:items-center gap-3 mb-3 sm:flex-row sm:mb-2">
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                  Options *
                                                </label>
                                                {watch(
                                                  `questions.${index}.type`
                                                ) === "multiple-choice" && (
                                                  <button
                                                    type="button"
                                                    onClick={() =>
                                                      addOption(index)
                                                    }
                                                    className="flex items-center p-2 gap-3 bg-white rounded-md border shadow-sm text-xs w-fit font-semibold">
                                                    <Plus className="w-4 h-4 mr-1" />
                                                    Add Option
                                                  </button>
                                                )}
                                              </div>
                                              <div className="space-y-3">
                                                {watch(
                                                  `questions.${index}.options`
                                                )?.map(
                                                  (option, optionIndex) => (
                                                    <div
                                                      key={option.id}
                                                      className="space-y-2">
                                                      <div className="flex items-center space-x-2">
                                                        <input
                                                          type={
                                                            watch(
                                                              `questions.${index}.type`
                                                            ) === "true-false"
                                                              ? "radio"
                                                              : "checkbox"
                                                          }
                                                          name={`correct-option-${question.id}`}
                                                          checked={
                                                            option.isCorrect
                                                          }
                                                          onChange={() => {
                                                            const updatedOptions =
                                                              watch(
                                                                `questions.${index}.options`
                                                              )?.map(
                                                                (opt, i) => ({
                                                                  ...opt,
                                                                  isCorrect:
                                                                    i ===
                                                                    optionIndex,
                                                                })
                                                              );
                                                            setValue(
                                                              `questions.${index}.options`,
                                                              updatedOptions ||
                                                                []
                                                            );
                                                          }}
                                                          className={`h-4 w-4 text-green-600 accent-primary ${
                                                            watch(
                                                              `questions.${index}.type`
                                                            ) === "true-false"
                                                              ? "rounded-full"
                                                              : "rounded"
                                                          }`}
                                                        />
                                                        {watch(
                                                          `questions.${index}.type`
                                                        ) === "true-false" ? (
                                                          <span className="text-sm text-gray-700">
                                                            {option.text}
                                                          </span>
                                                        ) : (
                                                          <div className="flex-1 flex items-center space-x-2">
                                                            <input
                                                              type="text"
                                                              className={`flex-1 px-3 py-2 border ${
                                                                errors
                                                                  .questions?.[
                                                                  index
                                                                ]?.options?.[
                                                                  optionIndex
                                                                ]?.text
                                                                  ? "border-red-500"
                                                                  : "border-gray-300"
                                                              } rounded-md focus:outline-none`}
                                                              {...register(
                                                                `questions.${index}.options.${optionIndex}.text`,
                                                                {
                                                                  required:
                                                                    "Option text or image is required",
                                                                  validate: (
                                                                    value
                                                                  ) =>
                                                                    !!value ||
                                                                    !!watch(
                                                                      `questions.${index}.options.${optionIndex}.imageUrl`
                                                                    ) ||
                                                                    "Either text or image is required",
                                                                }
                                                              )}
                                                              placeholder="Enter option text"
                                                            />
                                                            <button
                                                              type="button"
                                                              onClick={() =>
                                                                triggerOptionImageUpload(
                                                                  index,
                                                                  optionIndex
                                                                )
                                                              }
                                                              className="p-2 text-gray-500 hover:text-green-500 rounded-md border border-gray-300 hover:border-green-500 transition-colors"
                                                              title="Add image to option">
                                                              <ImageIcon className="w-5 h-5" />
                                                            </button>
                                                          </div>
                                                        )}
                                                        {(
                                                          watch(
                                                            `questions.${index}.options`
                                                          ) ?? []
                                                        ).length > 2 && (
                                                          <button
                                                            type="button"
                                                            onClick={() =>
                                                              removeOption(
                                                                index,
                                                                optionIndex
                                                              )
                                                            }
                                                            className="text-red-500 hover:text-red-700">
                                                            <Minus className="w-5 h-5" />
                                                          </button>
                                                        )}
                                                      </div>
                                                      {option.imageUrl && (
                                                        <div className="ml-6 relative">
                                                          <Image
                                                            src={
                                                              option.imageUrl
                                                            }
                                                            alt="Option"
                                                            width={300}
                                                            height={300}
                                                            className="max-h-32 rounded-md"
                                                          />
                                                          <button
                                                            type="button"
                                                            onClick={() => {
                                                              const currentOptions =
                                                                [
                                                                  ...(getValues(
                                                                    `questions.${index}.options`
                                                                  ) || []),
                                                                ];
                                                              currentOptions[
                                                                optionIndex
                                                              ] = {
                                                                ...currentOptions[
                                                                  optionIndex
                                                                ],
                                                                imageUrl:
                                                                  undefined,
                                                              };
                                                              setValue(
                                                                `questions.${index}.options`,
                                                                currentOptions
                                                              );
                                                            }}
                                                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600">
                                                            <Minus className="w-3 h-3" />
                                                          </button>
                                                        </div>
                                                      )}
                                                      {errors.questions?.[index]
                                                        ?.options?.[optionIndex]
                                                        ?.text && (
                                                        <p className="ml-6 text-sm text-red-600">
                                                          {
                                                            errors.questions[
                                                              index
                                                            ]?.options?.[
                                                              optionIndex
                                                            ]?.text?.message
                                                          }
                                                        </p>
                                                      )}
                                                    </div>
                                                  )
                                                )}
                                              </div>
                                            </div>
                                          )}

                                          <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                              Explanation (Optional)
                                            </label>
                                            <textarea
                                              className="w-full px-3 py-2 min-h-[200px] resize-none border border-gray-300 rounded-md focus:outline-none"
                                              rows={2}
                                              {...register(
                                                `questions.${index}.explanation`
                                              )}
                                              placeholder="Add explanation for the correct answer"
                                            />
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

                      {fields.length === 0 && (
                        <p className="mt-2 text-sm text-red-600">
                          At least one question is required
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="box-content space-y-3">
                  <div className="flex justify-between">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                      {watch("title") || "Untitled Quiz"}
                    </h2>
                    {/* Timer Display */}
                    {timeLimit !== 0 && quizTimeLeft !== null && (
                      <span className="flex items-center justify-center gap-2 px-2 bg-gray-200 rounded-md font-semibold ">
                        <Timer size={18} />
                        <span className="block text-xs h-fit font-semibold">
                          {Math.floor(quizTimeLeft / 60)}:
                          {String(quizTimeLeft % 60).padStart(2, "0")}
                        </span>
                      </span>
                    )}
                  </div>
                  {watch("instructions") && (
                    <div className="prose max-w-none mt-2">
                      <p className="text-secondary text-xs">
                        {watch("instructions")}
                      </p>
                    </div>
                  )}
                  <div>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs sm:text-sm font-medium">
                          Question {currentIndex + 1} of {questions.length}
                        </span>
                        {/* Progress Percentage */}
                        <span className="text-xs sm:text-sm font-medium">
                          {Math.round(
                            ((currentIndex + 1) / questions.length) * 100
                          )}
                          % Complete
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{
                            width: `${
                              ((currentIndex + 1) / questions.length) * 100
                            }%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 sm:p-6">
                    {currentQuestion && (
                      <div className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                        <div className="flex flex-col gap-2 justify-between items-center sm:flex-row">
                          <p className="text-lg font-semibold">
                            {currentQuestion.text}
                          </p>
                          <span className="text-sm text-secondary">
                            {currentQuestion.points} points
                          </span>
                        </div>
                        {currentQuestion.imageUrl && (
                          <div className="mt-2 ">
                            <Image
                              src={currentQuestion.imageUrl}
                              alt="Question"
                              width={300}
                              height={300}
                              className="max-h-40 rounded-md"
                            />
                          </div>
                        )}

                        {currentQuestion.type === "multiple-choice" &&
                          currentQuestion.options && (
                            <div className="mt-3 space-y-2">
                              {currentQuestion.options.map((option, index) => (
                                <div
                                  key={option.id}
                                  className="flex items-start space-x-2 p-3 border rounded-md">
                                  <input
                                    type="radio"
                                    name={`preview-${currentQuestion.id}`}
                                    className="h-4 w-4 text-green-600 border-gray-300 rounded mt-1"
                                    disabled
                                  />
                                  <div>
                                    <label className="block text-sm text-gray-700">
                                      {option?.text?.trim()
                                        ? option.text
                                        : `Option ${index + 1}`}
                                    </label>
                                    {option.imageUrl && (
                                      <Image
                                        src={option.imageUrl}
                                        width={300}
                                        height={300}
                                        alt="Option"
                                        className="max-h-32 rounded-md mt-1"
                                      />
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                        {currentQuestion.type === "true-false" &&
                          currentQuestion.options && (
                            <div className="mt-3 space-y-2">
                              {currentQuestion.options.map((option) => (
                                <div
                                  key={option.id}
                                  className="flex items-center p-3 border rounded-md ">
                                  <input
                                    type="radio"
                                    name={`preview-${currentQuestion.id}`}
                                    className="h-4 w-4 text-green-600 border-gray-300 rounded-full"
                                    disabled
                                  />
                                  <label className="ml-2 block text-sm text-gray-700">
                                    {option.text}
                                  </label>
                                </div>
                              ))}
                            </div>
                          )}

                        {currentQuestion.type === "fill-in-the-blank" && (
                          <div className="mt-3">
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                              placeholder="Your answer"
                              disabled
                            />
                          </div>
                        )}

                        {currentQuestion.type === "short-answer" && (
                          <div className="mt-3">
                            <textarea
                              className="w-full px-3 py-2 min-h-[200px] resize-none border border-gray-300 rounded-md focus:outline-none"
                              rows={3}
                              placeholder="Your answer"
                              disabled
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between">
                    <button
                      type="button"
                      className={`px-6 py-2 border text-sm rounded-md shadow-sm transition focus:outline-none ${
                        currentIndex === 0
                          ? "text-secondary cursor-not-allowed"
                          : "bg-green-600 text-white hover:bg-green-700"
                      }`}
                      onClick={handlePrevious}
                      disabled={currentIndex === 0}>
                      Previous
                    </button>

                    <button
                      type="button"
                      className={`px-6 py-2 border text-sm rounded-md shadow-sm transition focus:outline-none ${
                        currentIndex === questions.length - 1
                          ? "text-secondary cursor-not-allowed"
                          : "bg-green-600 text-white hover:bg-green-700"
                      }`}
                      onClick={handleNext}
                      disabled={currentIndex === questions.length - 1}>
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="xl:w-[350px]">
          {/* Quiz Settings */}
          <div className="box-content overflow-hidden mb-4">
            <h2 className="flex items-center gap-2 font-semibold text-lg mb-4">
              <Settings size={20} /> Quiz Settings
            </h2>
            <div className="p-4 space-y-4">
              <div>
                <label
                  htmlFor="randomizeQuestions"
                  className="flex justify-between items-center cursor-pointer">
                  <div>
                    <h2 className="text-sm font-bold">Randomize Questions</h2>
                    <span className="text-xs font-medium text-secondary">
                      Shuffle questions for each participant
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="randomizeQuestions"
                      {...register("randomizeQuestions")}
                      className="sr-only peer"
                    />
                    <div className="w-12 h-6 bg-gray-300 peer-checked:bg-primary rounded-full"></div>
                    <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:transform peer-checked:translate-x-6"></div>
                  </div>
                </label>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="immediateFeedback"
                  className="flex justify-between items-center cursor-pointer">
                  <div>
                    <h2 className="text-sm font-bold">Immediate Feedback</h2>
                    <span className="text-xs font-medium text-secondary">
                      Show correct answers after the quiz finish
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="immediateFeedback"
                      {...register("immediateFeedback")}
                      className="sr-only peer"
                    />
                    <div className="w-12 h-6 bg-gray-300 peer-checked:bg-primary rounded-full"></div>
                    <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:transform peer-checked:translate-x-6"></div>
                  </div>
                </label>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="feedbackByEmail"
                  className="flex justify-between items-center cursor-pointer">
                  <div>
                    <h2 className="text-sm font-bold">Feedback By Email</h2>
                    <span className="text-xs font-medium text-secondary">
                      Send feadback to my email
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="feedbackByEmail"
                      {...register("feedbackByEmail")}
                      className="sr-only peer"
                    />
                    <div className="w-12 h-6 bg-gray-300 peer-checked:bg-primary rounded-full"></div>
                    <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:transform peer-checked:translate-x-6"></div>
                  </div>
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
                    {...register("startDate")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    End Date
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
                    {...register("endDate")}
                  />
                </div>
              </div>
              <div className="flex gap-3 w-full">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Time Limit (minutes)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="0"
                      className={`w-full px-3 py-2 pl-8 border ${
                        errors.timeLimit ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none `}
                      {...register("timeLimit", {
                        valueAsNumber: true,
                        validate: (value) =>
                          value === 0 ||
                          value > 0 ||
                          "Must be 0 (no limit) or a positive number",
                      })}
                    />
                    <Timer
                      size={15}
                      className="absolute top-1/2 left-2 -translate-y-1/2 text-secondary"
                    />
                  </div>
                  {errors.timeLimit && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.timeLimit.message}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">
                    Set to 0 for no limit
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Retake numbers
                  </label>
                  <input
                    type="number"
                    min="0"
                    className={`w-full px-3 py-2 border ${
                      errors.retakeNumbers
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-md focus:outline-none `}
                    {...register("retakeNumbers", {
                      valueAsNumber: true,
                    })}
                  />
                  {errors.retakeNumbers && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.retakeNumbers.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block w-full text-sm font-medium text-gray-700 mb-1">
                  Passing Score (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  className={`px-3 w-full py-2 border ${
                    errors.passingScore ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none `}
                  {...register("passingScore", {
                    valueAsNumber: true,
                    min: { value: 0, message: "Must be positive" },
                    max: { value: 100, message: "Cannot exceed 100" },
                  })}
                />
                {errors.passingScore && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.passingScore.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          {/* Quiz Summary */}
          <div className="box-content">
            <h3 className="font-semibold text-lg mb-4">Quiz Summary</h3>
            <div className="text-sm">
              <div>
                <p className="flex items-center justify-between mb-4 text-sm ">
                  <span className="text-secondary text-sm">Questions:</span>{" "}
                  {watch("questions").length}
                </p>
                {watch("startDate") && watch("endDate") && (
                  <p className="flex flex-col gap-2 justify-between mb-4 text-xs">
                    <span className="text-secondary text-sm">Time Range:</span>{" "}
                    {new Date(watch("startDate")).toLocaleString()} -{" "}
                    {new Date(watch("endDate")).toLocaleString()}
                  </p>
                )}
              </div>
              <div>
                <p className="flex items-center justify-between mb-4 text-sm">
                  <span className="text-secondary text-sm">Time Limit:</span>
                  <span className="text-sm">
                    {watch("timeLimit") && watch("timeLimit") > 0
                      ? (() => {
                          const totalSeconds = watch("timeLimit");
                          const hours = Math.floor(totalSeconds / 3600); // Total hours
                          const minutes = Math.floor(
                            (totalSeconds % 3600) / 60
                          ); // Remaining minutes
                          const seconds = totalSeconds % 60; // Remaining seconds
                          return hours > 0
                            ? `${hours} hour${hours > 1 ? "s" : ""} ${
                                minutes > 0
                                  ? `${minutes} minute${minutes > 1 ? "s" : ""}`
                                  : ""
                              } ${
                                seconds > 0
                                  ? `${seconds} second${seconds > 1 ? "s" : ""}`
                                  : ""
                              }`
                            : `${minutes} minute${minutes > 1 ? "s" : ""} ${
                                seconds > 0
                                  ? `${seconds} second${seconds > 1 ? "s" : ""}`
                                  : ""
                              }`;
                        })()
                      : "No limit"}
                  </span>
                </p>

                <p className="flex items-center justify-between mb-4 text-sm">
                  <span className="text-secondary text-sm">Feedback:</span>{" "}
                  {watch("immediateFeedback")
                    ? "Immediate"
                    : "After submission"}
                </p>
                <p className="flex items-center justify-between mb-4 text-sm">
                  <span className="text-secondary text-sm">Total Points:</span>{" "}
                  {calculateTotalPoints()}
                </p>
                <p className="flex items-center justify-between mb-4 text-sm">
                  <span className="text-secondary text-sm">Passing Score:</span>{" "}
                  {watch("passingScore")}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
