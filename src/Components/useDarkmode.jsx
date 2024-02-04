import  { useState, useEffect } from "react";

const useDarkmode = () => {
  const [theme, setTheme] = useState(() => {
    // Retrieve the theme preference from local storage, defaulting to 'dark' if not present
    return localStorage.getItem("theme") || "dark";
  });

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    // Save the new theme preference to local storage
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return [theme, toggleTheme];
};

export default useDarkmode;
