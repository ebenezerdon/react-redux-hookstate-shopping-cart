import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Cart, Navbar, ProductCatalogue, Checkout } from './components'
import './index.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={ProductCatalogue} exact />
          <Route path="/cart" component={Cart} />
      </div>
    </BrowserRouter>
  )
}

export default App
