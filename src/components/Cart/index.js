import CartListView from '../CartListView'

import CartContext from '../../ContextCart/cart'

import EmptyCartView from '../EmptyCartView'


import CartSummary from '../CartSummary'

import './index.css'

const Cart=()=>{
  return <CartContext.Consumer>
    {value=>{
      const {cartList, removeAllCartItems, isClickRemoveAll} = value 
      console.log(cartList.length)
      const showEmptyView = cartList.length === 0
      const onCickRemoveAllItems = () => {
        removeAllCartItems()
      }

      return (
        <>
          {isClickRemoveAll ? (
            <EmptyCartView />
          ) : (
            <div className="cart-container">
              {showEmptyView ? (
                <EmptyCartView />
              ) : (
                <div className="cart-content-container">
                  <h1 className="cart-heading">My Cart</h1>
                  <button
                    type="button"
                    className="remove-all"
                    onClick={onCickRemoveAllItems}
                    data-testid="remove"
                  >
                    Remove All
                  </button>
                  <CartListView />
                  <div className="summary">
                    <CartSummary />
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )
    }}
  </CartContext.Consumer>
}

export default Cart