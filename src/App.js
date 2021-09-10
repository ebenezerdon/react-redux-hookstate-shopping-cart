import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Cart, Navbar, ProductCatalogue, Toast } from './components'
import './index.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Toast message="Product has been removed from cart" />
      <div className="container">
        <Switch>
          <Route path="/" component={ProductCatalogue} exact />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
