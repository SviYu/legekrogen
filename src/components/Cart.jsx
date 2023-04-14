import React, { useState } from 'react'
import { BsCartFill } from 'react-icons/bs'

const Cart = ({cartItems}) => {
    const [openCart, setOpenCart] = useState(false);

    /* Toggling the Cart btn */
    const toggleCart = () => {
        setOpenCart(!openCart)
        console.log('Cart toggle', openCart)
    }
    
  return (
      <>
          <BsCartFill className='cart-btn' onClick={toggleCart} />
          
          {
              openCart ? (
                  <div className='cart-wrapper'>
                      <div className='cart-container'>
                          <div className="cart-container-content container">
                            {cartItems.length === 0 && <div className='empty-cart-text'>Kurv er tom</div>}
                              
                          </div>
                      </div>
                      
                  </div>
              ) : null
          }
      </>
  )
}

export default Cart