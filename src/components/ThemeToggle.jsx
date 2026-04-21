import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  const styles = {
    button: {
      padding: '10px 16px',
      backgroundColor: isDarkMode ? '#444' : '#ddd',
      color: isDarkMode ? '#fff' : '#000',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 'bold',
      transition: 'background-color 0.3s',
    }
  };

  return (
    <button 
      onClick={toggleDarkMode}
      style={styles.button}
      title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
