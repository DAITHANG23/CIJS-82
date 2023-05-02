import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import AboutUs from './pages/AboutUs/AboutUs';
import Admin from './pages/Admin/Admin';
import Cart from './pages/Cart/Cart'
import Header from './layouts/Header/Header';
import NotFound from './pages/NotFound/NotFound'
import { useState } from 'react';
import AppContext from './contexts/AppContext';
import { v4 as uuidv4 } from "uuid";

const App = () => {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState("");

  const onAddNewProduct = (product) => {
    const newProduct = {
      ...product,
      id: uuidv4()
    }
    const newProductList = [...products, newProduct];
    setProducts(newProductList);

  }

  const onAddToCart = (productId) => {
    const existingProduct = products.find((product) => {
      product.id === productId;
    })

    const cartIndexProduct = cart.findIndex((cartItem) => {
      cartItem.id === productId;
    })

    if (cartIndexProduct === -1) {
      const newCartProduct = {
        ...existingProduct,
        quantity: 1
      }
      setCart([...cart, newCartProduct])
    } else {
      const cloneCart = [...cart];
      cloneCart[cartIndexProduct].quantity += 1;
      setCart(cloneCart);
    }
  }

  const onIncreaseQuantity = (productId) => {

  }

  const onDecreaseQuantity = (productId) => {

  }

  const onDeleteProductCart = (productId) => {

  }


  return <div className='container'>
    <AppContext.Provider
      value={{
        products: products,
        onAddToCart: onAddToCart,
        onAddNewProduct: onAddNewProduct,
      }}
    >
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>

  </div>
}

export default App;
