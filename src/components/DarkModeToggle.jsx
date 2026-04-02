import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useContext(AppContext);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="border px-3 py-1">
      {darkMode ? "☀ Light" : "🌙 Dark"}
    </button>
  );
};

export default DarkModeToggle;