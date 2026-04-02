import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Insights = () => {
  const { transactions } = useContext(AppContext);

  const expenses = transactions.filter(t => t.type === "expense");

  if (expenses.length === 0) return <p>No data</p>;

  const totals = {};
  expenses.forEach(t => {
    totals[t.category] = (totals[t.category] || 0) + t.amount;
  });

  const highest = Object.keys(totals).reduce((a, b) =>
    totals[a] > totals[b] ? a : b
  );

  return (
    <div className="p-4 bg-gray-100 rounded">
      <h2 className="font-bold">Insights</h2>
      <p>Highest Spending: {highest}</p>
    </div>
  );
};

export default Insights;