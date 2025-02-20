import BarChart from "@/components/UI/Charts/BarChart";
import CoursesChart from "@/components/UI/Charts/CoursesChart";
import PrepaidChart from "@/components/UI/Charts/PrepaidChart";
import StudentChart from "@/components/UI/Charts/StudentChart";
import StudentTable from "@/components/UI/tables/StudentTable";
import {
  seriesCourses,
  seriesForEarning,
  seriesPrepaid,
  seriesTotalStudent,
} from "@/constants/charts/chart.data";
import { students } from "@/constants/students.data";
import { CircleArrowUp, MessageSquareMore, Video } from "lucide-react";
import Image from "next/image";

const Dashboard: React.FC = () => {
  return (
    <main>
      <div className="mx-auto px-6 lg:max-w-[1170px] ">
        <div className="flex flex-col xl:flex-row gap-6 justify-start mb-6 ">
          <div className="xl:max-w-[650px] ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* total student Chart  */}
              <div className="box-content">
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
              <div className="box-content flex-1 ">
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
                <CoursesChart series={seriesCourses} />
              </div>
              {/* Prepaid Chart  */}
              <div className="box-content flex-1 ">
                <h2 className="text-xl py-3 font-bold">Prepaid</h2>
                <PrepaidChart series={seriesPrepaid} />
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold ">$45,741</h2>
                  <span className="flex gap-2 items-center">
                    <span className="text-xs text-secondary">+15%</span>
                    <CircleArrowUp className="text-[#3269D3]" size={16} />
                  </span>
                </div>
              </div>
            </div>
            {/* Earnings Chart  */}
            <div className="box-content flex-1 ">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="w-[200px] p-4">
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
          {/* Today student List   */}
          <div className="box-content flex-1">
            <h1 className="text-2xl font-bold mb-4 ">Today Student List</h1>
            <div>
              {students && students.length > 0 ? (
                students.map((item) => (
                  <div
                    key={item.studentId}
                    className="flex justify-between items-center p-3">
                    <div className="flex items-center mb-3 gap-3">
                      <div>
                        <Image
                          className="object-cover w-12 h-12  rounded-2xl"
                          src={item.imageUrl}
                          width={90}
                          height={90}
                          alt="student image"
                        />
                      </div>
                      <span className="text-sm">{item.name}</span>
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
                ))
              ) : (
                <div>Not Found Any Student</div>
              )}
            </div>
          </div>
        </div>
        {/* Students Table Content */}
        <div className="box-content">
          <StudentTable students={students} />
        </div>
      </div>
    </main>
  );
};
export default Dashboard;
