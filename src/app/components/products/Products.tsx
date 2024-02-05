import React from 'react'
import { products } from '../../data/product'
import Product from './Product'

function Products() {
  return (
 <div className=' my-20 '>
  <h1 className='mb-8 text-2xl font-bold'>NATURE PHOTOS</h1>
     <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-4 gap-5 '>
        {products.map((product)=>(
            <div key={product.id}>
            <Product  product = {product}/>
            </div>
        ))}
    </div>
 </div>
    
  )
}

export default Products