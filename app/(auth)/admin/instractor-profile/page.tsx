"use client";
import {
  BusinessCenterOutlined,
  CalendarTodayOutlined,
  LanguageOutlined,
  LocationOnOutlined,
  PermIdentityOutlined,
  SchoolOutlined,
  StickyNote2Outlined,
} from "@mui/icons-material";
import Image from "next/image";
import CurrentStudentTable from "@/components/UI/Tables/CurrentStudentTable";
import MenuCard from "@/components/UI/MenuCard";
import NotficationContent from "@/components/UI/NotficationContent";
import Link from "next/link";
import { dummyCourses, dummyNotifications } from "@/constants/profile.data";

export default function InstractorProfile() {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Instructor Profile</h2>
      {/* Profile section */}
      <div className="mb-4 flex flex-col gap-4 xl:flex-row">
        <div className="w-full">
          <div className="relative mb-16">
            {/* Background image */}
            <div className="h-[500px] overflow-hidden rounded-lg lg:h-[200px]">
              <Image
                className="absolute left-0 top-0 h-full w-full rounded-lg object-cover"
                src={
                  "https://img.freepik.com/free-photo/workers-getting-back-office_23-2149161642.jpg?t=st=1741419147~exp=1741422747~hmac=c962c55238a6360ce1ad0c6022d77ed94ac7416367fe5aa1b876ec5499e1ab51&w=1380"
                }
                width={400}
                height={200}
                alt=""
              />
              <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-[#2ba148ea]"></div>
              <Link
                href={"#"}
                className="absolute right-4 top-4 z-10 rounded-full bg-white px-3 py-2 text-sm"
              >
                Edit Profile
              </Link>
              <div className="relative flex h-full flex-col items-center justify-center gap-6 p-6 text-white lg:flex-row lg:items-end lg:justify-between">
                <div className="w-[200px]"></div>
                <div>
                  <h2 className="font-semibold">DR/ Michael P. M. Truong</h2>
                  <span className="text-xs">instructor Title</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border">
                    <StickyNote2Outlined />
                  </div>
                  <div>
                    <h2>10</h2>
                    <span>Courses</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border">
                    <PermIdentityOutlined />
                  </div>
                  <div>
                    <h2>258</h2>
                    <span>Students</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Profile Picture */}
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
          <div className="flex flex-col gap-4 md:flex-row">
            {/* Info and Courses Section */}
            <div className="box-content md:w-[200px]">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Info</h2>
                <MenuCard />
              </div>
              {/* Instructor Info */}
              <ul>
                <li className="flex items-center gap-2 p-4">
                  <PermIdentityOutlined className="text-light-primary" />
                  <h2 className="text-sm font-semibold">
                    Michael P. M. Truong
                  </h2>
                </li>
                <li className="flex items-center gap-2 p-4">
                  <LocationOnOutlined className="text-light-primary" />
                  <h2 className="text-sm font-semibold">2972 Westheimer Rd.</h2>
                </li>
                <li className="flex items-center gap-2 p-4">
                  <BusinessCenterOutlined className="text-light-primary" />
                  <h2 className="text-sm font-semibold">Binford Ltd.</h2>
                </li>
                <li className="flex items-center gap-2 p-4">
                  <CalendarTodayOutlined className="text-light-primary" />
                  <h2 className="text-sm font-semibold">September 24, 2017 </h2>
                </li>
              </ul>
            </div>
            {/* Courses Section */}
            <div className="box-content flex-1">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold">My Courses</h2>
                <MenuCard />
              </div>
              <ul className="max-h-[600px] overflow-y-auto md:max-h-[300px]">
                {dummyCourses.map((course) => {
                  return (
                    <li
                      className="mb-2 rounded-md bg-[#f5f5f5] p-2 transition hover:bg-green-50"
                      key={course.id}
                    >
                      <Link
                        className="flex flex-col items-center gap-3 sm:flex-row"
                        href={"#"}
                      >
                        <Image
                          src={course.image}
                          height={100}
                          width={100}
                          className="rounded-md"
                          alt=""
                        />
                        <div>
                          <div className="mb-4 flex flex-col items-center gap-2 sm:flex-row">
                            <h2>{course.name}</h2>
                            <div className="flex items-center gap-1 rounded-full bg-white px-3 py-2">
                              <LanguageOutlined className="text-[12px]" />
                              <span className="text-[10px]">Online</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <span className="flex items-center gap-2 text-sm text-secondary">
                              <CalendarTodayOutlined className="text-sm" />
                              {course.date}
                            </span>
                            <span className="flex items-center gap-2 text-sm text-secondary">
                              <SchoolOutlined className="text-sm" />
                              {course.students} Students
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        {/* Notification Section */}
        <div className="box-content lg:w-[400px]">
          <NotficationContent notifications={dummyNotifications} />
        </div>
      </div>
      <div className="box-content">
        <CurrentStudentTable />
      </div>
    </div>
  );
}
