import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM} from './../Types'

const CartReducer = (state, action) => {
    
    switch (action.type) {
        case SHOW_HIDE_CART: {
            return {
                ...state,
                showCart: !state.showCart
            }
        }
            
        case ADD_TO_CART: {
            const cartItemInCart = state.cartItems.filter((item) => item._id === action.payload._id)
            console.log('State', state.cartItems.length)

            if (cartItemInCart.length > 0) {
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, {...action.payload, qty: 1}]
                }
            }
        }
            
        case REMOVE_ITEM: {
        return {
            ...state,
            cartItems: state.cartItems.filter(item => item._id !== action.payload)
        }
        }
    
        default:
            return state;
    }

     
}

export default CartReducer;