import React from 'react'

function Confirmation({cart ,placeOrder}) {
  console.log(cart)
  const items = cart.line_items.map((item) => (
       <ItemConfirm
          key = {item.id}
          item = {item}
       />
  ))
  return (
    <div>
        <div className='text-center  my-2'>
          Confirmation
         </div>
         <div className='border-2 text-center flex flex-col gap-1 w-fit mx-auto p-2'>
              {items}
              <div>
                 subtotal:  {cart.subtotal.formatted_with_symbol}
              </div>
              <button className='border-2' onClick = {placeOrder}>
                Place Order
              </button>
         </div>
        
    </div>
  )
}

const ItemConfirm = ({item}) => {
    return (
      <div>
        {item.product_name} <span>X</span> {item.quantity}
      </div>
    )
}

export default Confirmation