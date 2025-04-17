"use client";

import { useForm } from "react-hook-form";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  location?: string;
  joinDate?: string;
  courses?: string;
}

export default function StudentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="w-full">
      <h2 className="mb-4 text-2xl font-semibold">New Student</h2>
      <div className="box-content w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-medium text-secondary">
                First Name
              </label>
              <input
                {...register("firstName", {
                  required: "First Name is required",
                })}
                className="w-full rounded border p-3 outline-none"
                placeholder="Enter your First Name"
              />
              <p className="text-sm text-red-500">
                {errors.firstName?.message}
              </p>
            </div>
            <div>
              <label className="mb-2 block text-xs font-medium text-secondary">
                Last Name
              </label>
              <input
                {...register("lastName", { required: "Last Name is required" })}
                className="w-full rounded border p-3 outline-none"
                placeholder="Enter your Last Name"
              />
              <p className="text-sm text-red-500">{errors.lastName?.message}</p>
            </div>
            <div>
              <label className="mb-2 block text-xs font-medium text-secondary">
                Email
              </label>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                className="w-full rounded border p-3 outline-none"
                placeholder="Enter your Emali"
              />
              <p className="text-sm text-red-500">{errors.email?.message}</p>
            </div>
            <div>
              <label className="mb-2 block text-xs font-medium text-secondary">
                Phone Number
              </label>
              <input
                {...register("phoneNumber", {
                  required: "Phone Number is required",
                })}
                className="w-full rounded border p-3 outline-none"
                placeholder="Enter your Phone"
              />
              <p className="text-sm text-red-500">
                {errors.phoneNumber?.message}
              </p>
            </div>
            <div>
              <label className="mb-2 block text-xs font-medium text-secondary">
                Location
              </label>
              <input
                {...register("location")}
                className="w-full rounded border p-3 outline-none"
                placeholder="Enter your Location"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs font-medium text-secondary">
                Join Date
              </label>
              <input
                {...register("joinDate")}
                type="date"
                className="w-full rounded border p-3 outline-none"
                placeholder="Enter Join"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs font-medium text-secondary">
                Courses
              </label>
              <input
                {...register("courses")}
                className="w-full rounded border p-3 outline-none"
                placeholder="Enter Courses"
              />
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="rounded bg-primary px-4 py-2 text-white"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
