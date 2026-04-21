import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import ProductList from './components/ProductList'
import UserDetails from './components/userDetails'
import LoginPage from './components/LoginForm'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import ThemeToggle from './components/ThemeToggle'

// Create an inner App component to use the theme context
function AppContent() {
  const { isDarkMode } = useTheme();

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: isDarkMode ? '#1a1a1a' : '#fff',
      color: isDarkMode ? '#fff' : '#000',
      transition: 'background-color 0.3s, color 0.3s',
    }
  };

  return (
    <div style={styles.container}>
      <div style={{ padding: '20px', textAlign: 'right' }}>
        <ThemeToggle />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/user-details" element={<UserDetails />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

// Main App component wrapped with ThemeProvider
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App
