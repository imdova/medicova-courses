// app/settings/components/ProfileSettings.tsx
"use client";

import { ImageUp, RotateCcw, Save, UserRound } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

type ProfileFormData = {
  firstName: string;
  lastName: string;
  username: string;
  bio: string;
  website: string;
  userAvatar: FileList;
};

const ProfileSettings = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProfileFormData>();
  const [preview, setPreview] = useState<string | null>(null);

  const onSubmit = (data: ProfileFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Profile Information
      </h1>
      <p className="text-sm text-secondary mb-12">
        Update your personal information and how you appear to students.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex gap-6">
          <div className="flex flex-col items-center max-w-[250px]">
            <div className="relative w-40 h-40 mb-6 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
              {preview ? (
                <Image
                  width={300}
                  height={300}
                  src={preview}
                  alt="Profile preview"
                  className="object-cover w-full h-full"
                />
              ) : (
                <UserRound className="text-white" size={180} />
              )}
            </div>
            <Controller
              name="userAvatar"
              control={control}
              render={({ field: { onChange, onBlur, name, ref } }) => (
                <>
                  <label className="cursor-pointer w-fit px-4 py-2 mb-3 border rounded-md shadow-sm bg-white hover:bg-gray-50 text-sm font-medium text-gray-700 flex items-center gap-2">
                    <ImageUp size={15} />
                    Upload Photo
                    <input
                      type="file"
                      accept="image/png, image/jpeg"
                      className="hidden"
                      name={name}
                      ref={ref}
                      onBlur={onBlur}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setPreview(URL.createObjectURL(file));
                        }
                        onChange(e.target.files);
                      }}
                    />
                  </label>
                  <p className="text-xs text-gray-500 mt-1 text-center">
                    Recommended: Square JPG or PNG, at least 300x300px
                  </p>
                </>
              )}
            />
          </div>
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="username"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Username / Display Name
              </label>
              <input
                id="username"
                type="text"
                {...register("username", { required: "Username is required" })}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${
                  errors.username ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your Username / Display Name"
              />
              {errors.username && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="mb-3">
              <label
                htmlFor="bio"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Short Bio
              </label>
              <p className="text-sm text-gray-500 mb-2">
                A brief description that appears on course and instructor pages.
              </p>
              <textarea
                id="bio"
                rows={4}
                {...register("bio")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                placeholder="This description will appear on your instructor profile and course pages."
              />
            </div>
            <div>
              <label
                htmlFor="website"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Website / Portfolio
              </label>
              <input
                id="website"
                type="url"
                {...register("website", {
                  pattern: {
                    value:
                      /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
                    message: "Please enter a valid URL",
                  },
                })}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${
                  errors.website ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="e.g. https://myWebsite.com"
              />
              {errors.website && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.website.message}
                </p>
              )}
            </div>
            <div className="flex justify-end space-x-4 pt-4">
              <button
                type="button"
                className="flex items-center gap-2 px-4 py-2 text-primary border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <RotateCcw size={12} />
                Reset
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Save size={12} />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileSettings;
