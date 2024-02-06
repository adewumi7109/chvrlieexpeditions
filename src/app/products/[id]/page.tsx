"use client"
import React from 'react'
import ProductDetails from '../../components/ProductDetails'
import { useRouter } from 'next/router';
import { products } from '@/app/data/product';


function page() {

  return (
    <div>
        <ProductDetails/>
    </div>
  )
}

export default page