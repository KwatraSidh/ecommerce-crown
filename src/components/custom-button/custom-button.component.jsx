import React from 'react';
import './custom-buton.styles.scss'

const CustomButton =({children,isGoogleSignIn,...otherBtnAttributes})=>
{
   return <button className={`${isGoogleSignIn ? 'google-sign-in':''} custom-button `} {...otherBtnAttributes}>{children}</button>
}

export default CustomButton;