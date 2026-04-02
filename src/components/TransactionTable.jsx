import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const TransactionTable = () => {
  const { transactions, filter, setFilter } = useContext(AppContext);

  const filtered = transactions.filter(t =>
    t.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Search category..."
        className="border p-2 mb-3"
        onChange={(e) => setFilter(e.target.value)}
      />

      <table className="w-full border">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(t => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>₹{t.amount}</td>
              <td>{t.category}</td>
              <td>{t.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;