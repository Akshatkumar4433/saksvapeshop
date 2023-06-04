import React from 'react'
import CloseIcon from '@mui/icons-material/Close'


function CartItem({item,handleRemoveFromCart}) {

  const handleRemoveFromCartButton = (item_id) => {
    return () => {
      handleRemoveFromCart(item_id)
    }

  }
   
  return (
        <div className='flex flex-col border-2 rounded-md w-fit  p-1'>
        <button className = 'border-2 rounded w-fit p-1 ml-auto' onClick = {handleRemoveFromCartButton(item.id)}>
            <CloseIcon/>
        </button>
        
        <img src = {item.image.url} alt = {item.name} className = 'object-contain'/>
        
        <div className = 'border-2 rounded-full w-1/2 text-center mx-auto'>
            <p className='text-lg'>{item.quantity}</p>
        </div>
        
        <h1 className='text-base text-center'>{item.name}</h1>

       
      </div>
  )
}

export default CartItem