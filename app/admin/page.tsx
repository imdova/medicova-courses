import BarChart from "@/components/UI/Charts/BarChart";
import CoursesChart from "@/components/UI/Charts/CoursesChart";
import PrepaidChart from "@/components/UI/Charts/PrepaidChart";
import StudentChart from "@/components/UI/Charts/StudentChart";
import StudentTable from "@/components/UI/tables/StudentTable";
import {
  seriesForEarning,
  seriesTotalStudent,
} from "@/constants/charts/chart.data";
import { students } from "@/constants/students.data";
import { CircleArrowUp, MessageSquareMore, Video } from "lucide-react";
import Image from "next/image";

const Dashboard: React.FC = () => {
  return (
    <main className="my-12">
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        <div className="lg:w-[900px]">
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            {/* total student Chart  */}
            <div className="box-content w-full">
              <h2 className="text-xl py-3 font-bold">Total Steudents</h2>
              <StudentChart series={seriesTotalStudent} />
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">12.345</h2>
                <div className="text-xs text-secondary">
                  <span className="text-[#3269D3] text-xs mr-1 font-semibold">
                    5.4%
                  </span>
                  than last year
                </div>
              </div>
            </div>
            {/* Courses Chart  */}
            <div className="box-content w-full">
              <h2 className="text-xl py-3 font-bold">Courses</h2>
              <div className="flex items-center gap-3 justify-between">
                <div className="flex items-center gap-2 mb-3">
                  <CircleArrowUp className="text-[#3269D3]" size={22} />
                  <span className="text-lg font-bold">100</span>
                </div>
                <div className="text-xs text-secondary">
                  <span className="text-[#3269D3] text-xs mr-1 font-semibold">
                    +5.4%
                  </span>
                  than last year
                </div>
              </div>
              <CoursesChart series={seriesTotalStudent} />
            </div>
            {/* Prepaid Chart  */}
            <div className="box-content w-full">
              <h2 className="text-xl py-3 font-bold">Prepaid</h2>
              <PrepaidChart series={seriesTotalStudent} />
              <div>
                <h2 className="text-xl font-bold mb-2">$45,741</h2>
                <span className="flex gap-2 items-center">
                  <span className="text-xs text-secondary">+15%</span>
                  <CircleArrowUp className="text-[#3269D3]" size={22} />
                </span>
              </div>
            </div>
          </div>
          {/* Earnings Chart  */}
          <div className="box-content">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="w-[200px]">
                <h2 className="text-2xl font-semibold">Earnings</h2>
                <span className="block text-secondary mb-4">
                  Dec 1 - Dec 31, 2021
                </span>
                <span className="block m-2">This Month</span>
                <h1 className="text-3xl font-bold mb-3">$53.678</h1>
                <span className="flex gap-2 items-center">
                  <CircleArrowUp className="text-[#3269D3]" size={22} />
                  <span className="text-xs text-secondary">+15%</span>
                </span>
              </div>
              <BarChart series={seriesForEarning} />
            </div>
          </div>
        </div>
        <div className="lg:w-[600px] h-full">
          {/* Today student List   */}
          <div className="box-content ">
            <h1 className="text-2xl font-bold mb-4">Today Student List</h1>
            <div className="h-full">
              <div className="flex justify-between items-center p-3">
                <div className="flex items-center mb-3 gap-3">
                  <div className="w-14 h-14 overflow-hidden rounded-2xl">
                    <Image
                      className="object-cover"
                      src="https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740"
                      width={90}
                      height={90}
                      alt="blog image"
                    />
                  </div>
                  <span>Heba Ahmed</span>
                </div>
                <div className="flex gap-4 items-center">
                  <button>
                    <Video size={18} />
                  </button>
                  <button>
                    <MessageSquareMore size={18} />
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center p-3">
                <div className="flex items-center mb-3 gap-3">
                  <div className="w-14 h-14 overflow-hidden rounded-2xl">
                    <Image
                      className="object-cover"
                      src="https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740"
                      width={90}
                      height={90}
                      alt="image"
                    />
                  </div>
                  <span>Heba Ahmed</span>
                </div>
                <div className="flex gap-4 items-center">
                  <button>
                    <Video size={18} />
                  </button>
                  <button>
                    <MessageSquareMore size={18} />
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center p-3">
                <div className="flex items-center mb-3 gap-3">
                  <div className="w-14 h-14 overflow-hidden rounded-2xl">
                    <Image
                      className="object-cover"
                      src="https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740"
                      width={90}
                      height={90}
                      alt="blog image"
                    />
                  </div>
                  <span>Heba Ahmed</span>
                </div>
                <div className="flex gap-4 items-center">
                  <button>
                    <Video size={18} />
                  </button>
                  <button>
                    <MessageSquareMore size={18} />
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center p-3">
                <div className="flex items-center mb-3 gap-3">
                  <div className="w-14 h-14 overflow-hidden rounded-2xl">
                    <Image
                      className="object-cover"
                      src="https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740"
                      width={90}
                      height={90}
                      alt="blog image"
                    />
                  </div>
                  <span>Heba Ahmed</span>
                </div>
                <div className="flex gap-4 items-center">
                  <button>
                    <Video size={18} />
                  </button>
                  <button>
                    <MessageSquareMore size={18} />
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center p-3">
                <div className="flex items-center mb-3 gap-3">
                  <div className="w-14 h-14 overflow-hidden rounded-2xl">
                    <Image
                      className="object-cover"
                      src="https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740"
                      width={90}
                      height={90}
                      alt="blog image"
                    />
                  </div>
                  <span>Heba Ahmed</span>
                </div>
                <div className="flex gap-4 items-center">
                  <button>
                    <Video size={18} />
                  </button>
                  <button>
                    <MessageSquareMore size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Students Table Content */}
      <div className="box-content">
        <StudentTable students={students} />
      </div>
    </main>
  );
};
export default Dashboard;
