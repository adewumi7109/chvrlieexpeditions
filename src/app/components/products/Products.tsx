"use client"
import React, { useEffect, useState } from 'react'
import { products } from '../../data/product'
import Product from './Product'
// import Product from './Product'

function Products() {
  const [products, setProducts] = useState([])

  const getProducts = async () => {


    const response = await fetch('/api/products')
    const prods = await response.json()

    setProducts([])
    setProducts(prods)
  
   

  }

  useEffect(() => { getProducts() }, [])

  return (
 <div className=' my-20 '>
  <h1 className='mb-8 text-2xl font-bold'>NATURE PHOTOS</h1>
     <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-4 gap-5 '>
        {products.map((product:any)=>(
          
            <Product key={product.id} product = {product}/>
           
        ))}
    </div>
 </div>
    
  )
}

export default Products