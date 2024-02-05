import Image from 'next/image'
import React from 'react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'

function Product({ product }: { product: any }) {
    return (
        <div className='w-[100%]  border-solid border border-textColor '>
          
          <img src="/banner.jpg" className="w-full" alt="" />
          <div className='flex p-4 justify-between items-center'>
               
                    <span>
                        {product?.name}
                    </span>
              
                <span>
                $ {product?.price}
                </span>
          </div>
          <div className='flex p-4 py-2 border-solid border border-textColor justify-between items-center'>
            <span><FaHeart size={22} /></span>
            <span><FaShoppingCart size={22} /></span>
          </div>
        </div>
    )
}

export default Product