import { useState, useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const TransactionForm = ({ selected, onClose }) => {
  const { addTransaction, updateTransaction } = useContext(AppContext);

  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  useEffect(() => {
    if (selected) setForm(selected);
  }, [selected]);

  const handleSubmit = () => {
    if (!form.date || !form.amount || !form.category) return;

    selected ? updateTransaction(form) : addTransaction(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="font-bold mb-3">{selected ? "Edit" : "Add"} Transaction</h2>

        <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="border p-2 mb-2 w-full" />
        <input type="number" value={form.amount} onChange={(e) => setForm({ ...form, amount: +e.target.value })} className="border p-2 mb-2 w-full" />
        <input placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="border p-2 mb-2 w-full" />

        <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="border p-2 mb-2 w-full">
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2">Save</button>
        <button onClick={onClose} className="ml-2">Cancel</button>
      </div>
    </div>
  );
};

export default TransactionForm;