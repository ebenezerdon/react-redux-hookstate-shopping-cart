import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Cart, Navbar, ProductCatalogue } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
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
