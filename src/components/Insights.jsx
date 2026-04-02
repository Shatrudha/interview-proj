import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Insights = () => {
  const { transactions } = useContext(AppContext);

  const expenses = transactions.filter(t => t.type === "expense");

  const categoryTotals = {};
  expenses.forEach(t => {
    categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
  });

  const highest = Object.keys(categoryTotals).reduce((a, b) =>
    categoryTotals[a] > categoryTotals[b] ? a : b
  );

  return (
    <div className="p-4 bg-gray-100 rounded">
      <h2 className="font-bold">Insights</h2>
      <p>Highest Spending: {highest}</p>
    </div>
  );
};

export default Insights;