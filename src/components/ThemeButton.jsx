import React from "react";

const ThemeButton = ({ theme, toggleTheme }) => {
  return (
    <button onClick={toggleTheme} className="theme-button">
      {theme === "light" ? "Mode Sombre" : "Mode Clair"}
    </button>
  );
};

export default ThemeButton;