import React, { useContext } from 'react'
import CartHeader from '../../components/CartHeader'
import CartItem from '../../components/CartItem'
import CartContext from '../../context/cart/CartContext'


const CartPage = () => {

  const {cartItems } = useContext(CartContext)

  return (
    <section>
      <CartHeader />
      <ul className='cart-page-list container'>
        {cartItems.length === 0 ? 
          (<h4 className='empty-cart-text'>Du har ingen varer i kurv endnu.</h4>) : (
            <>
              <li className='cart-page-list-item'>
                {cartItems.map((item) => {
                    return <CartItem key={item._id} item={item} />
                })}
              </li>
              <p className='cart-total'>I alt {cartItems.reduce((amount, item) => item.price*item.qty + amount, 0)} kr</p>
            </>
        )}
      </ul>
        </section>
  )
}

export default CartPage