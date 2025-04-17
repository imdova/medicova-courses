"use client";
import TransactionsTable from "@/components/UI/Tables/TransactionTable";

export default function TransactionsPage() {
  return (
    <div>
      <h2 className="my-6 text-2xl font-bold">Transactions</h2>
      <div className="box-content">
        <TransactionsTable />
      </div>
    </div>
  );
}
