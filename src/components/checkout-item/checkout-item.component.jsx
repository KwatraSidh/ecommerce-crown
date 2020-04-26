import React from 'react'
import './checkout-item.styles.scss'
import {connect} from 'react-redux'
import {clearCartItem, removeCartItem, addItem} from '../../redux/cart/cart.action'



const CheckoutItem =({cartItem,dispatch})=>{
    const {name,imageUrl,quantity,price}=cartItem;

    return (
        <div className='checkout-item'>
        <div className='image-container'>
        <img alt='item' src={imageUrl}/>
        </div>
        <span className='name'>{name}</span>

        <span className='quantity'>
        <div className='arrow' onClick={()=>dispatch(removeCartItem(cartItem))}>&#10094;</div> 
        <span className='value'>{quantity}</span>
        <div className='arrow'onClick={()=>dispatch(addItem(cartItem))}>&#10095;</div>
        </span>
    
        <span className='price'>{price}</span>
        <span className='remove-button' onClick={()=>dispatch(clearCartItem(cartItem))}>&#10005;</span> 
        {/* UTF-8 dingbats from w3c schools fo remove button */}
        </div>
    )
}
// const mapDispatchToProps = dispatch =>({
//     clearItem:(item)=> dispatch(clearCartItem(item))
// })

// used dispatch property which passed by default as second arguement

export default connect(null)(CheckoutItem)
// export default connect(null,mapDispatchToProps)(CheckoutItem)