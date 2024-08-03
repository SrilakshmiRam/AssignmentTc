
import { Component } from 'react';
import Popup from 'reactjs-popup';
import CartContext from '../../ContextCart/cart';
import './index.css';

class CartSummary extends Component {
  state = {
    isClicked: false,
    name: '',
    contactNumber: '',
    date: '',
    isRequiredDate: false,
    isRequiredName: false,
    isRequiredNumber: false,
  };

  onSubmitForm = (event) => {
    event.preventDefault();

    const { name, date, contactNumber } = this.state;

    let isValid = true;

    if (name.trim() === '') {
      this.setState({ isRequiredName: true });
      isValid = false;
    } else {
      this.setState({ isRequiredName: false });
    }

    if (contactNumber.trim() === '') {
      this.setState({ isRequiredNumber: true });
      isValid = false;
    } else {
      this.setState({ isRequiredNumber: false });
    }

    if (date.trim() === '') {
      this.setState({ isRequiredDate: true });
      isValid = false;
    } else {
      this.setState({ isRequiredDate: false });
    }

    if (isValid) {
      // Proceed with form submission
      this.setState({ isClicked: true });
    }
  };

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  onChangeContactNumber = (event) => {
    this.setState({ contactNumber: event.target.value });
  };

  onChangeDate = (event) => {
    this.setState({ date: event.target.value });
  };

  render() {
    const { isClicked, name, contactNumber, date, isRequiredDate, isRequiredNumber, isRequiredName } = this.state;

    return (
      <CartContext.Consumer>
        {(value) => {
          const { cartList } = value;
          const noOfItemsInTheCart = cartList.length;
          let sumOfCartItemsPrice = 0;
          cartList.forEach((each) => {
            sumOfCartItemsPrice += Math.round((each.price),2);
          });

          return (
            <div className="summary-container">
              <h1 className="total-amountof-cartItems">
                Order Total:
                <span className="amount">{sumOfCartItemsPrice} Crore</span>
              </h1>
              <p className="cartItemNumber">{noOfItemsInTheCart} Items in cart</p>
              <Popup
                modal
                trigger={<button type="button" className="checkout-button">Checkout</button>}
              >
                {(close) => (
                  <>
                    {isClicked ? (
                      <p className='order-msg'>You Booked Successfully</p>
                    ) : (
                      <div className="confirmation-form">
                        <form className="form-container" onSubmit={this.onSubmitForm}>
                          <div className="input-container">
                            <label htmlFor="name" className='label-text'>Name*:</label>
                            <input
                              id="name"
                              type="text"
                              value={name}
                              onChange={this.onChangeName}
                              className='input-text'
                            />
                            {isRequiredName && <p className='error'>Required</p>}
                          </div>
                          <div className="input-container">
                            <label htmlFor="number" className='label-text'>Contact Number*:</label>
                            <input
                              id="number"
                              type="text"
                              value={contactNumber}
                              onChange={this.onChangeContactNumber}
                              className='input-text'
                            />
                            {isRequiredNumber && <p className='error'>Required</p>}
                          </div>
                          <div className="input-container">
                            <label htmlFor="date" className='label-text'>Date*:</label>
                            <input
                              id="date"
                              type="date"
                              value={date}
                              onChange={this.onChangeDate}
                              className='input-text'
                            />
                            {isRequiredDate && <p className='error'>Required</p>}
                          </div>
                          <button type="submit" className='submit-btn'>Submit</button>
                        </form>
                        <button
                          type="button"
                          className="trigger-button"
                          onClick={() => close()}
                        >
                          Close
                        </button>
                      </div>
                    )}
                  </>
                )}
              </Popup>
            </div>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default CartSummary;
