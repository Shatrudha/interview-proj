import SummaryCard from "../components/SummaryCard";
import TransactionTable from "../components/TransactionTable";
import RoleSwitcher from "../components/RoleSwitcher";
import Insights from "../components/Insights";
import Charts from "../components/Charts";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Dashboard = () => {
  const { transactions } = useContext(AppContext);

  const income = transactions.filter(t => t.type === "income").reduce((a, b) => a + b.amount, 0);
  const expense = transactions.filter(t => t.type === "expense").reduce((a, b) => a + b.amount, 0);
  const balance = income - expense;

  return (
    <div className="p-6 space-y-6">
      <RoleSwitcher />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard title="Balance" value={balance} />
        <SummaryCard title="Income" value={income} />
        <SummaryCard title="Expenses" value={expense} />
      </div>

      <Charts data={transactions} />

      <TransactionTable />

      <Insights />
    </div>
  );
};

export default Dashboard;