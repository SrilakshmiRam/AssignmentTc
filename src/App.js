// App.js or similar
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState} from 'react';
import Cart from './components/Cart';
import BookingItem from './components/BookingItem';
import Home from './components/Home';
import CartContext from './ContextCart/cart'; // Adjust path as necessary

const App = () => {
  const [cartList,setCartList]=useState([])

  const updateCartList=(item)=>{
    setCartList((prevcartList=>[...prevcartList,item]))
  }
  
  return <CartContext.Provider value={{
    cartList,
    updateCartList:updateCartList
  }}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/house/:id" element={<BookingItem />} />
      </Routes>
    </BrowserRouter>
  </CartContext.Provider>
};

export default App;


