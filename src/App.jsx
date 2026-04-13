import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1 className="logo">🌾 Farmers Bag</h1>
          <nav className="nav">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h2>Fresh Produce Delivered to Your Door</h2>
          <p>Supporting local farmers with every purchase</p>
          <button className="cta-btn">Shop Now</button>
        </div>
      </section>

      <section className="products">
        <div className="container">
          <h2>Featured Products</h2>
          <div className="product-grid">
            {['Organic Vegetables', 'Fresh Fruits', 'Dairy Products'].map((product, idx) => (
              <div key={idx} className="product-card">
                <div className="product-img">🥕</div>
                <h3>{product}</h3>
                <p>High quality, farm-fresh products</p>
                <button className="product-btn">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Farmers Bag. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
