import {cartActionTypes} from './cart.types'
import {addItemToCart,removeItemFromCart} from './cart.utils'



const INITITAL_STATE = {
    hidden : false,
    cartItems : []
}

const cartReducer = (state=INITITAL_STATE,action)=>{
    switch(action.type){
        case cartActionTypes.TOGGLE_HIDDEN_CART:
            return {...state,hidden :!state.hidden}

        case cartActionTypes.ADD_ITEM:
            return {...state,cartItems:addItemToCart(state.cartItems,action.payload)}

        case cartActionTypes.REMOVE_ITEM:
            return {...state,cartItems:removeItemFromCart(state.cartItems,action.payload)}

        case cartActionTypes.CLEAR_CART_ITEM:
            return {...state,cartItems: state.cartItems.filter(cartItem=> cartItem.id !== action.payload.id)}

        default :
            return state;

    }
}

export default cartReducer;