import React from 'react';
import './custom-buton.styles.scss'

const CustomButton =({children,isGoogleSignIn,inverted,...otherBtnAttributes})=>
{
   return <button className={`${inverted ? 'inverted':''} ${isGoogleSignIn ? 'google-sign-in':''} custom-button `} {...otherBtnAttributes}>{children}</button>
}

export default CustomButton;