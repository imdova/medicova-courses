import { Withdrawal } from "@/types/Payment";
import OptionsDropdown from "../OptionsDropdown";

type WithdrawTableProps = {
  WithdrawData: Withdrawal[];
};

const WithdrawTable: React.FC<WithdrawTableProps> = ({ WithdrawData }) => {
  return (
    <div className="h-full">
      <h2 className="text-lg font-semibold sm:text-start text-center">
        Withdraw History
      </h2>
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
                  <div className="flex justify-center items-center">
                    <OptionsDropdown
                      onView={() => console.log("View clicked")}
                      onEdit={() => console.log("Edit clicked")}
                      onDelete={() => console.log("Delete clicked")}
                    />
                  </div>
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
