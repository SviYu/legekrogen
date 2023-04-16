import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from './../../assets/legekrogen_logo.png'
import { MdOutlineClose } from 'react-icons/md'
import { GoThreeBars } from 'react-icons/go'
import { FaTruck } from 'react-icons/fa'
import './navbar.css'
import './../../index.css'
import { BsCartFill } from 'react-icons/bs'
import CartContext from '../../context/cart/CartContext'

const Navbar = () => {
    const [navShowing, setNavShowing] = useState(false);
    const { cartItems, showHideCart } = useContext(CartContext);
    
    return (
      <>
            
        <nav className="nav">
                
            <div className={`${navShowing ? "promotion-hide" : "promotion"}`}>
                <FaTruck />
                <p>Fri fragt ved køb over 499,-</p>
            </div>

            <div className="container nav-container">
                <Link to="/" className='logo'>
                    <img className="navbar-logo"
                        src={logo}
                        alt='logo'
                        onClick={() => setNavShowing(false)}
                    />      
                </Link>
                    
                <div className="navbar-right">
                        {cartItems.length > 0 ? 
                            <div className='count-active' onClick={showHideCart}>
                                <BsCartFill className='cart-btn active' />
                                <span className='count'>{cartItems.length}</span>
                            </div>
                            : <BsCartFill className='cart-btn' onClick={showHideCart}
                        />
                        
                        }
                        
                        

                        <ul className={`nav-links ${navShowing ? 'show-nav' : 'hide-nav'}`} onClick={() => setNavShowing(false)}>
                        
                        <NavLink className={({isActive}) => isActive ? "active-nav-link" : "nav-link"} to="/produkter">Produkter</NavLink>
                        <NavLink className={({isActive}) => isActive ? "active-nav-link" : "nav-link"} to="/faq">FAQ</NavLink>
                        <NavLink className={({isActive}) => isActive ? "active-nav-link" : "nav-link"} to="/kundeklubben">Kundeklubben</NavLink>
                    </ul>
                
                    <button className='nav-toggle-btn' onClick={() => setNavShowing(prev => !prev)}>
                        {
                            navShowing ? <MdOutlineClose/> : <GoThreeBars />
                        }
                    </button>
                </div>    

            </div>
        </nav>
        </>
  )
}

export default Navbar