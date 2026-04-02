import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import SummaryCard from "../components/SummaryCard";
import TransactionTable from "../components/TransactionTable";
import RoleSwitcher from "../components/RoleSwitcher";
import Insights from "../components/Insights";
import Charts from "../components/Charts";
import DarkModeToggle from "../components/DarkModeToggle";

const Dashboard = () => {
  const { transactions, darkMode } = useContext(AppContext);

  const income = transactions.filter(t => t.type === "income").reduce((a, b) => a + b.amount, 0);
  const expense = transactions.filter(t => t.type === "expense").reduce((a, b) => a + b.amount, 0);
  const balance = income - expense;

  return (
    <div className={darkMode ? "bg-gray-900 text-white min-h-screen p-6" : "p-6"}>
      <div className="flex gap-4 mb-4">
        <RoleSwitcher />
        <DarkModeToggle />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
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