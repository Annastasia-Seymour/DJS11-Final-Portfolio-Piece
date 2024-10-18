import React, { useEffect } from 'react';
import { useTheme } from './ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  // Use useEffect to load the theme from local storage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.className = savedTheme; // Set the body class to the saved theme
    } else {
      document.body.className = theme; // Set to default theme
    }
  }, [theme]);

  const handleToggle = () => {
    toggleTheme(); // Call the toggle function from the context
    const newTheme = theme === 'light' ? 'dark' : 'light'; // Determine new theme
    localStorage.setItem('theme', newTheme); // Persist the new theme
    document.body.className = newTheme; // Update body class
  };

  return (
    <button onClick={handleToggle} className={`theme-button ${theme}`}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
};

export default ThemeToggle;
