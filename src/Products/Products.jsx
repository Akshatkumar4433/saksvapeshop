import React from 'react'
import Product from './Product'

const Products = ({productList,handleAddToCart}) => {
  
  const products = productList.map((product) => (
        <Product
           key = {product.id}
          product = {product}
          handleAddToCart = {handleAddToCart}
        />
  ))
  return (
    <div className='flex gap-1 flex-wrap justify-center gap-3 mt-4'>
         {products}
    </div>
  )
}

export default Products
