// ContextCart/cart.js
import React from 'react'

const CartContext=React.createContext({
   cartList:[],
   updateCartList:()=>{}
})

export default CartContext;

