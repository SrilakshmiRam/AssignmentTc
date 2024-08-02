// Cart.js
import React, { useContext } from 'react';
import CartContext from '../../ContextCart/cart';
import CartItem from '../CartItem';

const Cart = () => {
  const { cartList } = useContext(CartContext);

  console.log('cartList in Cart:', cartList); // Debugging

  return (
    <ul>
      {cartList.length > 0 ? (
        cartList.map((item, index) => (
          <CartItem key={index} item={item} />
        ))
      ) : (
        <li>No items in cart</li>
      )}
    </ul>
  );
};

export default Cart;


