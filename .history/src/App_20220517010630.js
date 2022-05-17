import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Cart, Navbar, ProductCatalogue, Checkout } from './components'
import './index.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<ProductCatalogue />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
