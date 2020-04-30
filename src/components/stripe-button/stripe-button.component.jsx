import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForstripe = price*100;
    const publishableKey = 'pk_test_scjv69YOaMlgevZDWhGoM1lG00EjDa5uyn';
    const onToken=token => {
        console.log(token);
        alert ('Payment Successful')
    }

    return(
        <StripeCheckout 
            label = 'Pay Now'
            name = 'Lifestyle Ltd.'
            billingAddress
            shippingAddress
            image = 'https://sendeyo.com/up/d/f3eb2117da'
            description = {`Your total is $${price} `}
            amount = {priceForstripe}
            panelLabel ='Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    )
     
}

export default StripeCheckoutButton;