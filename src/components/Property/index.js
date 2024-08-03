import {useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../ContextCart/cart'

import './index.css'

const Property=props=>{
    const {propertyDetails}=props
    const {title,imageUrl,price,description,id}=propertyDetails
    const navigate = useNavigate();
    const onClickBook=()=>{
      navigate(`/house/${id}`)
    }

    const {cartList}=useContext(CartContext)
    console.log(cartList)

    return(
        <li className="property-item">
          <img src={imageUrl} alt="property-image" className="image" />
            <h1 className="heading-property">{title}</h1>
            <p className="price">price in Crore: {price}</p>
            <p className='description'>{description}</p>
            <button type="button" className='booknow-btn' onClick={onClickBook}>Book Now</button>
        </li>
    )
}


export default Property