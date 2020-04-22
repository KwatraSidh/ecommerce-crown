import {cartActionTypes} from './cart.types'
import {addItemToCart} from './cart.utils'


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
        default :
            return state;

    }
}

export default cartReducer;