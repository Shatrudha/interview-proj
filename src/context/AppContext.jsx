import { createContext, useState } from "react";

export const AppContext = createContext();

const initialData = [
  { id: 1, date: "2026-03-01", amount: 5000, category: "Salary", type: "income" },
  { id: 2, date: "2026-03-02", amount: 200, category: "Food", type: "expense" },
  { id: 3, date: "2026-03-03", amount: 1000, category: "Freelance", type: "income" },
  { id: 4, date: "2026-03-04", amount: 300, category: "Shopping", type: "expense" },
];

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(initialData);
  const [role, setRole] = useState("viewer");
  const [filter, setFilter] = useState("");

  return (
    <AppContext.Provider
      value={{ transactions, setTransactions, role, setRole, filter, setFilter }}
    >
      {children}
    </AppContext.Provider>
  );
};