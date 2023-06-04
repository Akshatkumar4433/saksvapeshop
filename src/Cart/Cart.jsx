import React from 'react'
import CartItem from './CartItem';
import CloseIcon from '@mui/icons-material/Close';

function Cart({openCart,cart,openCheckout, handleRemoveFromCart}) {
  
    const cartItems = cart.line_items.map(item => (
      <CartItem
            key = {item.id}
            item = {item}
            handleRemoveFromCart = {handleRemoveFromCart}
      />
  ))
  return (
    <div>
        <div className='flex justify-between'>
        <button onClick = {openCart} className = 'border-2 p-2'>
            Back
        </button>
        <button onClick = {openCheckout} className = 'border-2 p-2'>
            Checkout
        </button>
        </div>
        <div className='flex flex-wrap justify-center gap-2'>
            {cartItems}
        </div>
    </div>
  )
}

export default Cart