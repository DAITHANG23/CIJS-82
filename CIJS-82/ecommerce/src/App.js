import { Route, Routes } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import AboutUs from './pages/AboutUs/AboutUs';
import Admin from './pages/Admin/Admin';
import Cart from './pages/Cart/Cart'
import Header from './layouts/Header/Header';
import NotFound from './pages/NotFound/NotFound'
import ProductDetail from './pages/ProductDetail/ProductDetail';
import { useState } from 'react';
import AppContext from './contexts/AppContext';
import { v4 as uuidv4 } from "uuid";
import {initialProducts} from './utils/mockData'

const App = () => {

  const [products, setProducts] = useState(initialProducts)
  const [cart, setCart] = useState([]);

  const onAddNewProduct = (product) => {
    const newProduct = {
      ...product,
      id: uuidv4()
    }
    const newProductList = [...products, newProduct];
    setProducts(newProductList);

  }


  const onAddToCart = (productId) => {
    const existingProduct = products.find(
      (product) => product.id === productId
    );

    const indexOfAddingProductInCart = cart.findIndex(
      (cartItem) => cartItem.id === productId
    );

    if (indexOfAddingProductInCart === -1) {
      const newCartItem = {
        ...existingProduct,
        quantity: 1,
      };

      setCart([...cart, newCartItem]);
    } else {
      const clonedCart = [...cart];
      clonedCart[indexOfAddingProductInCart].quantity += 1;
      setCart(clonedCart);
    }
  }

  const onIncreaseQuantity = (productId) => {
    const cartIndexProduct = cart.findIndex((cartItem) => {
      return cartItem.id === productId;
    })

    const updatingCart = [...cart];
    updatingCart[cartIndexProduct].quantity += 1;
    setCart(updatingCart);
  }

  const onDecreaseQuantity = (productId) => {
    const cartIndexProduct = cart.findIndex((cartItem) => {
      return cartItem.id === productId;
    })

    const updatingCart = [...cart];
    const currentCartProductQuantity = updatingCart[cartIndexProduct].quantity;

    if (currentCartProductQuantity === 1) {
      onDeleteProductCart();

    } else {
      updatingCart[cartIndexProduct].quantity -= 1;
      setCart(updatingCart);
    }

  }

  const onDeleteProductCart = (productId) => {
    const removeProductItem = cart.filter((cartItem) => {
      return cartItem.id !== productId;
    })

    setCart(removeProductItem);
  }


  return <div className='App'>
    <AppContext.Provider
      value={{
        products: products,
        onAddToCart: onAddToCart,
        onAddNewProduct: onAddNewProduct,
      }}
    >

      <div className='App'>
        <Header cart={cart} />
        <main className="container py-3">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/cart'
              element=
              {<Cart
                cart={cart}
                onIncreaseQuantity={onIncreaseQuantity}
                onDecreaseQuantity={onDecreaseQuantity}
                onDeleteProductCart={onDeleteProductCart}
              />}
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </AppContext.Provider>

  </div>
}

export default App;
