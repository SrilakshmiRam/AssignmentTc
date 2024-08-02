

const CartItem=props=>{
    const {cartDetails}=props
    const {imageUrl,title,price}=cartDetails
    return(
        <li className="cart-item">
            <img src={imageUrl} alt={title} className="image-house" />
            <p>price: {price}</p>
        </li>
    )
}

export default CartItem