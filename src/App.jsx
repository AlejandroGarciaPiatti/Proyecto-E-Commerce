import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import "./App.css"
import { CartProvider } from './context/CartContext';
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout';

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <CartProvider>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />}/>
                    <Route path='/category/:categoryId' element={<ItemListContainer />}/>
                    <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
                    <Route path='/cart' element={<Cart />}/>
                    <Route path='/checkout' element={<Checkout />}/>
                    <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
                </Routes>
              </CartProvider>
          </BrowserRouter>
      </div>
  )
}

export default App
