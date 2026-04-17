import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import ProductList from './components/ProductList'
import UserDetails from './components/userDetails'
import LoginPage from './components/LoginForm'

function App() {
  

  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/products" element={<ProductList />} />
    //   </Routes>
    // </Router>
    <UserDetails/>
    // <LoginPage/>
  )
}

export default App
