import Header from './Header'
import Footer from './Footer'
import './ProductList.css'

function ProductList() {
  const products = [
    'Organic Vegetables', 'Fresh Fruits', 'Dairy Products', 'Grains & Cereals',
    'Herbs & Spices', 'Nuts & Seeds', 'Honey & Jams', 'Eggs & Poultry',
    'Meat Products', 'Bakery Items', 'Beverages', 'Snacks'
  ];

  return (
    <div className="product-list">
      <Header />
      <div className="banner">
        <img src="https://via.placeholder.com/1200x300/2ecc71/ffffff?text=Special+Offer+Banner" alt="Special Offer" className="banner-image" />
      </div>
      <div className="container">
        <h2>All Products</h2>
        <div className="product-grid">
          {products.map((product, idx) => (
            <div key={idx} className="product-card">
              <div className="product-img">🥕</div>
              <h3>{product}</h3>
              <p>High quality, farm-fresh products</p>
              <button className="product-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductList