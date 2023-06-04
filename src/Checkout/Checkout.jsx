import React from 'react'
import commerce from '../lib/commerce'
import { useState,useEffect } from 'react'
import AddressForm from './AddressForm';
import Confirmation from './Confirmation';
import Success from './Success';

function Checkout({openCart,cart}) {
  const [checkoutToken, setCheckoutToken] = useState(null)
  const [step, setStep] = useState(1);

  const fetchShippingOptions = async (checkoutTokenId, country, region ) => {
       const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {country:country, region:region});
  }

  const changeStep = () => {
      setStep(step + 1);
  }
  
  useEffect(() => {
    const generateToken = async () => {
          const token = await commerce.checkout.generateToken(cart.id, {type:'cart'});
          setCheckoutToken(token);
          //this contains shipping options
      
    }
    generateToken();
  },[]);

  
  return (
    <div>
      <button className='border-2 p-2' onClick = {openCart}>
        Back to Cart
      </button>
      {step === 1?<AddressForm changeStep = {changeStep}/>:step === 2?<Confirmation changeStep = {changeStep}/>:step === 3?<Success/>:false}
    </div>
  )
}

export default Checkout