import { useEffect, useReducer } from "react";
import CartContext from './CartContext'
import CartReducer from './CartReducer'
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM} from './../Types'

//get cart-items from localStorage or empty array
const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || []

const CartState = ({ children }) => {

    const initialState = {
        showCart: false,
        cartItems: cartFromLocalStorage
    }

    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addToCart = (item) => {
        dispatch({type: ADD_TO_CART, payload:item})
    }

    const showHideCart = () => {
        dispatch({type:SHOW_HIDE_CART})
    }

    const removeItem = (_id) => {
        dispatch({type: REMOVE_ITEM, payload:_id})
    }

    //set cart-items into localStorage
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cartItems))
    }, [state.cartItems])

    return (
        <CartContext.Provider value={{
            showCart: state.showCart,
            cartItems: state.cartItems,
            addToCart,
            showHideCart,
            removeItem,
        }}>{children} </CartContext.Provider>
    )
}

export default CartState;