import './Products.css'

function Products() {
  return (
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
  )
}

export default Products