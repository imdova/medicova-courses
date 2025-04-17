import { Eye, Download } from "lucide-react";
import Image from "next/image";

interface Transaction {
  studentName: string;
  email: string;
  avatar: string;
  course: string;
  date: string;
  amount: string;
  method: string;
}

const transactions: Transaction[] = [
  {
    studentName: "Abdelrahman Ahmed",
    email: "abdelrahman@gmail.com",
    avatar:
      "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1744721699~exp=1744725299~hmac=d9de6b95feefebc35ea1f97dfc870606c4df00fec3a58467febcb9250333c302&w=1380", // Make sure this image exists in `public/`
    course: "Advanced React",
    date: "April 5, 2025",
    amount: "$89.99",
    method: "Credit Card",
  },
  // Repeating the same 5 times as per design
  {
    studentName: "Abdelrahman Ahmed",
    email: "abdelrahman@gmail.com",
    avatar:
      "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1744721699~exp=1744725299~hmac=d9de6b95feefebc35ea1f97dfc870606c4df00fec3a58467febcb9250333c302&w=1380",
    course: "Advanced React",
    date: "April 5, 2025",
    amount: "$89.99",
    method: "Credit Card",
  },
  {
    studentName: "Abdelrahman Ahmed",
    email: "abdelrahman@gmail.com",
    avatar:
      "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1744721699~exp=1744725299~hmac=d9de6b95feefebc35ea1f97dfc870606c4df00fec3a58467febcb9250333c302&w=1380",
    course: "Advanced React",
    date: "April 5, 2025",
    amount: "$89.99",
    method: "Credit Card",
  },
  {
    studentName: "Abdelrahman Ahmed",
    email: "abdelrahman@gmail.com",
    avatar:
      "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1744721699~exp=1744725299~hmac=d9de6b95feefebc35ea1f97dfc870606c4df00fec3a58467febcb9250333c302&w=1380",
    course: "Advanced React",
    date: "April 5, 2025",
    amount: "$89.99",
    method: "Credit Card",
  },
  {
    studentName: "Abdelrahman Ahmed",
    email: "abdelrahman@gmail.com",
    avatar:
      "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1744721699~exp=1744725299~hmac=d9de6b95feefebc35ea1f97dfc870606c4df00fec3a58467febcb9250333c302&w=1380",
    course: "Advanced React",
    date: "April 5, 2025",
    amount: "$89.99",
    method: "Credit Card",
  },
];

export default function RecentTransactionsTable() {
  return (
    <div className="bg-white border rounded-2xl p-4 shadow-sm w-full">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Recent Transactions
        </h2>
        <p className="text-sm text-gray-500">Your latest 5 transactions</p>
      </div>
      <div className="overflow-x-auto max-h-[400px]">
        <table className="min-w-[800px] overflow-y-auto w-full text-sm text-left">
          <thead>
            <tr className="text-gray-600 bg-gray-100">
              <th className="py-3 px-2 font-medium">Student</th>
              <th className="py-3 px-2 font-medium">Course</th>
              <th className="py-3 px-2 font-medium">Date</th>
              <th className="py-3 px-2 font-medium">Amount</th>
              <th className="py-3 px-2 font-medium">Method</th>
              <th className="py-3 px-2 font-medium text-center">Receipt</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, idx) => (
              <tr
                key={idx}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-2 flex items-center gap-3">
                  <Image
                    src={txn.avatar}
                    alt={txn.studentName}
                    width={40}
                    height={40}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-800">
                      {txn.studentName}
                    </p>
                    <p className="text-xs text-gray-500">{txn.email}</p>
                  </div>
                </td>
                <td className="py-3 px-2 text-gray-700">{txn.course}</td>
                <td className="py-3 px-2 text-gray-700">{txn.date}</td>
                <td className="py-3 px-2 text-gray-700">{txn.amount}</td>
                <td className="py-3 px-2 text-gray-700">{txn.method}</td>
                <td className="py-3 px-2 text-gray-700 flex justify-center gap-3">
                  <Eye className="w-5 h-5 cursor-pointer text-gray-600 hover:text-black" />
                  <Download className="w-5 h-5 cursor-pointer text-gray-600 hover:text-black" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
