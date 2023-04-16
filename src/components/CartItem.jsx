import React, { useContext } from 'react'
import CartContext from '../context/cart/CartContext'
import {FaTrash} from 'react-icons/fa'

const CartItem = ({ item }) => {
    const {removeItem} = useContext(CartContext)

  return (
      <li className='cart-item'>
          <div className="cart-item-left">
              <img src={item.image} alt={item.description} />
              
              <div className="cart-item-left-text">
                  <p className="cart-item-left-text-title">{item.title}</p>
                  <p className="cart-item-left-text-description">{item.description}</p>
              </div>
          </div>

          {/* <div className="quantity">
                <p>{item.qty} stk</p>
          </div> */}

          <div className='cart-item-right'>
                <p className='cart-item-right-price'>{item.price*item.qty} kr</p>
              <button className='cart-item-right-btn btn'
                  onClick={() => removeItem(item._id)}><FaTrash /></button>
                
        </div>
          
    </li>
  )
}

export default CartItem