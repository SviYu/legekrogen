import React, { useContext } from 'react'
import CartContext from '../context/cart/CartContext'
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import './../pages/cartPage/cart.css'

const Cart = () => {
    
    const { showCart, cartItems, showHideCart } = useContext(CartContext);

  return (
      <>
          {showCart && (
              <div className='cart-wrapper'>
                  <div className="cart-container">
                      <div className="cart-inner-wrapper container">
                        {cartItems.length === 0 ? 
                            (<h4 className='empty-cart-text'>Kurv er tom</h4>) : 
                            (<ul>
                                {cartItems.map((item) => {
                                    return <CartItem key={item._id} item={item} />
                                })}
                                  
                                <div className='cart-bottom'>
                                    <Link className='go-to-cart-btn btn' to="/kurv" onClick={showHideCart}>GÅ TIL KURV</Link>
                                    <p className='cart-total'>I alt {cartItems.reduce((amount, item) => item.price + amount, 0)} kr</p>
                                </div>
                            </ul>)
                        }

                      </div>
                  </div>
              </div>
          )}
      </>
  )
}

export default Cart