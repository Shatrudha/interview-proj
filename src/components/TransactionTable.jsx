import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import TransactionForm from "./TransactionForm";

const TransactionTable = () => {
  const { transactions, filter, setFilter, role, deleteTransaction } = useContext(AppContext);

  const [showForm, setShowForm] = useState(false);
  const [selected, setSelected] = useState(null);

  const filtered = transactions.filter(t =>
    t.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Search..."
        className="border p-2 mb-3"
        onChange={(e) => setFilter(e.target.value)}
      />

      {role === "admin" && (
        <button onClick={() => { setSelected(null); setShowForm(true); }} className="bg-green-500 text-white px-3 py-1 mb-2">
          + Add
        </button>
      )}

      <table className="w-full border rounded-xl overflow-hidden">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
            {role === "admin" && <th>Action</th>}
          </tr>
        </thead>

        <tbody>
          {filtered.map(t => (
            <tr key={t.id} className="hover:bg-gray-100">
              <td>{t.date}</td>
              <td>₹{t.amount}</td>
              <td>{t.category}</td>
              <td>{t.type}</td>

              {role === "admin" && (
                <td>
                  <button onClick={() => { setSelected(t); setShowForm(true); }} className="text-blue-500 mr-2">Edit</button>
                  <button onClick={() => deleteTransaction(t.id)} className="text-red-500">Delete</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && <TransactionForm selected={selected} onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default TransactionTable;