// ContextCart/cart.js
import React from 'react'

const CartContext=React.createContext({
   cartList:[],
   updateCartList:()=>{},
   removeCartItem: () => {},
   removeAllCartItems: () => {},
})

export default CartContext;

