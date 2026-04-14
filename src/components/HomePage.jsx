import Header from './Header'
import Hero from './Hero'
import Products from './Products'
import Footer from './Footer'
import './HomePage.css'

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <Hero />
      <Products />
      <Footer />
    </div>
  )
}

export default HomePage