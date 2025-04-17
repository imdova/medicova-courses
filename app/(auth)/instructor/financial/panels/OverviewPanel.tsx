"use client";
import RevenueGrowthChart from "@/components/UI/Charts/RevenueGrowthChart";
import RecentTransactionsTable from "@/components/UI/tables/RecentTransactionsTable";
import TopCoursesTable from "@/components/UI/tables/TopCoursesTable";
import { ArrowDown, ArrowUp, DollarSign } from "lucide-react";

export default function OverviewPanel() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mb-4">
        <div className="flex items-center gap-4 p-4 border rounded-lg bg-white shadow-sm">
          <div className="flex justify-center items-center rounded-md w-16 h-16 bg-[#DCFCE7] text-[#008236]">
            <DollarSign size={20} />
          </div>
          <div>
            <span className="block text-sm">Total Earnings</span>
            <h1 className="font-bold">$24,563.00</h1>
            <span className="block text-xs text-primary">
              Lifetime earnings
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 border rounded-lg bg-white shadow-sm">
          <div className="flex justify-center items-center rounded-md w-16 h-16 bg-[#FEF3C6] text-[#FD9A00]">
            <DollarSign size={20} />
          </div>
          <div>
            <span className="block text-sm">Pending Earnings</span>
            <h1 className="font-bold">$1,250.00</h1>
            <span className="block text-xs text-primary">
              Available in 30 days
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 border rounded-lg bg-white shadow-sm">
          <div className="flex justify-center items-center rounded-md w-16 h-16 bg-[#DBEAFE] text-[#2B7FFF]">
            <ArrowDown size={20} />
          </div>
          <div>
            <span className="block text-sm">Available Balance</span>
            <h1 className="font-bold">$3,428.50</h1>
            <span className="block text-xs text-primary">
              Ready to withdraw
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 border rounded-lg bg-white shadow-sm">
          <div className="flex justify-center items-center rounded-md w-16 h-16 bg-[#DCFCE7] text-[#008236]">
            <ArrowUp size={20} />
          </div>
          <div>
            <span className="block text-sm">This Month</span>
            <h1 className="font-bold">$2,845.00</h1>
            <span className="block text-xs text-primary">
              +18.2% from last month
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 xl:flex-row mb-4">
        <div className="flex-1 p-4 rounded-lg border bg-white shadow-sm">
          {/* Revenue Growth Chart */}
          <RevenueGrowthChart />
        </div>
        <div className="xl:w-[400px] p-4 rounded-lg border bg-white shadow-sm">
          {/* Top Courses Table  */}
          <TopCoursesTable />
        </div>
      </div>
      <div>
        {/* Recent Transactions Table */}
        <RecentTransactionsTable />
      </div>
    </div>
  );
}
