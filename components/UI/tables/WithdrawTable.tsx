import { Withdrawal } from "@/types/Payment";
import { Ellipsis } from "lucide-react";

type WithdrawTableProps = {
  WithdrawData: Withdrawal[];
};

const WithdrawTable: React.FC<WithdrawTableProps> = ({ WithdrawData }) => {
  return (
    <div className="h-full">
      <h2 className="text-lg font-semibold">Withdraw History</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-[650px] h-full border-collapse ">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 text-sm text-secondary">DATE</th>
              <th className="p-2 text-sm text-secondary">METHOD</th>
              <th className="p-2 text-sm text-secondary">AMOUNT</th>
              <th className="p-2 text-sm text-secondary">STATUS</th>
              <th className="p-2 text-sm text-secondary"></th>
            </tr>
          </thead>
          <tbody>
            {WithdrawData.map((withdrawal) => (
              <tr key={withdrawal.id}>
                <td className="p-4">{withdrawal.date}</td>
                <td className="p-4">{withdrawal.method}</td>
                <td className="p-4">{withdrawal.amount}</td>
                <td
                  className={`p-4 ${
                    withdrawal.status === "Pending"
                      ? "text-yellow-500"
                      : withdrawal.status === "Completed"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}>
                  {withdrawal.status}
                </td>
                <td>
                  <button>
                    <Ellipsis className="text-secondary" size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default WithdrawTable;
