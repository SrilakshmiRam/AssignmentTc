import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookingItem from './components/BookingItem';
import Home from './components/Home';
import Cart from './components/Cart';
import CartContext from './ContextCart/cart'; // Adjust path as necessary


const App = () => {
  const [cartList, setCartList] = useState([]);
  const [isClickRemoveAll, setRemoveAll] = useState(false);

  const updateCartList = (item) => {
    setCartList((prevCartList) => [...prevCartList, item]);
  };

  const removeCartItem = (id) => {
    const filteredCartList = cartList.filter(cartItem => cartItem.id !== id);
    setCartList(filteredCartList);
  };

  const removeAllCartItems = () => {
    setCartList([]);
    setRemoveAll(true); // Correctly setting state
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        isClickRemoveAll,
        updateCartList,
        removeCartItem,
        removeAllCartItems,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/house/:id" element={<BookingItem />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
};

export default App;



