import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
