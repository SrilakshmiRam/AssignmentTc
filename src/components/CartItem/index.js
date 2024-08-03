import { AiFillCloseCircle } from 'react-icons/ai';

import CartContext from '../../ContextCart/cart';

import './index.css';

const CartItem = (props) => (
  <CartContext.Consumer>
    {value => {
      const { removeCartItem } = value;
      const { cartItemDetails } = props;
      const { id, title, price, imageUrl,location } = cartItemDetails;

      const onRemoveCartItem = () => {
        removeCartItem(id);
      };

      // TODO: Implement the functionality to increment and decrement the quantity

      return (
        <li className="cart-item">
          <img className="cart-product-image" src={imageUrl} alt={title} />
          <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{title}</p>
              <p className="cart-product-brand">{location}</p>
            </div>
            <div className="total-price-remove-container">
              <p className="cart-total-price">Rs {price} Crore</p>
              <button
                className="remove-button"
                type="button"
                onClick={onRemoveCartItem}
                data-testid="remove"
              >
                Remove
              </button>
            </div>
          </div>
          <button
            className="delete-button"
            type="button"
            onClick={onRemoveCartItem}
            data-testid="remove"
          >
            <AiFillCloseCircle color="#616E7C" size={20} aria-label="close" />
          </button>
        </li>
      );
    }}
  </CartContext.Consumer>
);

export default CartItem;
