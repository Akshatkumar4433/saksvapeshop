import React from 'react'
import commerce from '../lib/commerce'
import { useState,useEffect } from 'react'
import AddressForm from './AddressForm';
import Confirmation from './Confirmation';
import Success from './Success';

function Checkout({openCart,cart, onCaptureCheckout}) {
  const [checkoutToken, setCheckoutToken] = useState(null)
  const [addressInfo, setAddressInfo] = useState({});
  const [step, setStep] = useState(1);
  const fetchShippingOptions = async (checkoutTokenId, country, region ) => {
       const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {country:country, region:region});
  }

  const collectAddressInformation = (data) => {
      setAddressInfo(data);
      changeStep();
  }
  
  const placeOrder = () => {
      try {
        const orderData = {
          line_items:checkoutToken.line_items,
          customer: {
            firstname: addressInfo.firstName,
            lastname: addressInfo.lastName,
            email: addressInfo.email,
          },
          shipping: {
            name: addressInfo.firstName,
            street: addressInfo.address,
            town_city: addressInfo.city,
            count_state: 'CA-ON',
            postal_zip_code: addressInfo.Zip,
            country: 'CA'
          },
          fulfillment: {
            shipping_method: 'ship_ypbroEaR8o8n4e'
           },
           payment: {
            gateway: 'test_gateway',
            card: {
              number: '4242424242424242',
              expiry_month: '02',
              expiry_year: '24',
              cvc: '123',
              postal_zip_code: '94107',
            },
        }
      }
      console.log(orderData)
      onCaptureCheckout(checkoutToken.id, orderData);
    }
      catch(error) {
        console.log(error)
      }
  
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
  console.log(checkoutToken)
  
  return (
    <div>
      <button className='border-2 p-2' onClick = {openCart}>
        Back to Cart
      </button>
        <div className='border-2 text-center  w-fit p-2 rounded-full mx-auto'>
           {step}
        </div>
      
      {step === 1?<AddressForm collectAddressInformation = {collectAddressInformation}/>:step === 2?<Confirmation cart = {cart} placeOrder = {placeOrder} />:step === 3?<Success/>:false}
    </div>
  )
}

export default Checkout