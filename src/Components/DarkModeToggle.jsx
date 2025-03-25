import { useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#fff" : "#000";
    document.body.style.color = darkMode ? "#000" : "#fff";
  };

  return (
    <button onClick={toggleMode}>
      {darkMode ? "Modo Claro" : "Modo Oscuro"}
    </button>
  );
};

export default DarkModeToggle;
