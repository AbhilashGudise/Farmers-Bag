import React, { createContext, useState, useEffect } from 'react';

// Step 1: Create the context
export const ThemeContext = createContext();

// Step 2: Create a Provider component that will wrap your app
export const ThemeProvider = ({ children }) => {
  // Step 3: Initialize state - check localStorage for saved preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : false;
  });

  // Step 4: Save preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Step 5: Create a toggle function
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Step 6: Define the value object that will be shared with all consumers
  const value = {
    isDarkMode,
    toggleDarkMode,
  };

  // Step 7: Return the provider with children
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Step 8: Create a custom hook for easy access to the context
export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
