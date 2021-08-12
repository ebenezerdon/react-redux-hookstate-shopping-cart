import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Cart, Navbar, ProductCatalogue } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path="/">
            <ProductCatalogue/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
