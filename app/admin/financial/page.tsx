import SolidTabs from "@/components/UI/SolidTabs";
import { CircleDollarSign, TextSearch, Wallet } from "lucide-react";
import OverviewPanel from "./panels/OverviewPanel";
import TransactionsPanel from "./panels/TransactionsPanel";
import WalletPanel from "./panels/WalletPanel";
import PayoutPanel from "./panels/PayoutPanel";

const FinancialPage: React.FC = () => {
  // tabs data
  const tabData = [
    {
      label: (
        <div className="flex items-center gap-1">
          <TextSearch size={15} />
          Overview
        </div>
      ),
      content: <OverviewPanel />,
    },
    {
      label: (
        <div className="flex items-center gap-1">
          <CircleDollarSign size={15} />
          Transactions
        </div>
      ),
      content: <TransactionsPanel />,
    },
    {
      label: (
        <div className="flex items-center gap-1">
          <Wallet size={15} />
          Wallet
        </div>
      ),
      content: <WalletPanel />,
    },
    {
      label: (
        <div className="flex items-center gap-1">
          <Wallet size={15} />
          Payout Settings
        </div>
      ),
      content: <PayoutPanel />,
    },
  ];
  return (
    <div>
      <div className="mb-4">
        <SolidTabs tabs={tabData} />
      </div>
    </div>
  );
};
export default FinancialPage;
