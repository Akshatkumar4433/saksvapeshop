import React from 'react'



const Product = ({product,handleAddToCart}) => {
    const handleAddToCartButton = (productId, quantity) => {
        return () => {
          handleAddToCart(productId,quantity);
        }

    }
    return (
      <div className='flex flex-col border-2 rounded-md w-fit  p-1 '>
        <img src = {product.image.url} alt = {product.name} className = 'object-contain'/>
        <h1 className='text-lg text-center'>{product.name}</h1>
        <button onClick = {handleAddToCartButton(product.id,1)}>
         <div className='border-2 rounded-xl pl- mb-1 mt-2 mx-8'>
            <p className='text-center'>Add to Cart  {product.price.formatted_with_symbol}</p>
        </div>
        </button>
      </div>
    );
}

export default Product;

