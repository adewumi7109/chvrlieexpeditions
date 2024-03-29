import Image from 'next/image'
import React from 'react'

import { FaHeart, FaShoppingCart } from 'react-icons/fa'

function Product({ product }: { product: any }) {
    return (
        <div key={product.id} className='w-[100%]  border-solid border border-textColor '>
          
          <img src={product.image_url} className="w-full max-h-[200px] object-cover" alt="" />
          <div className='flex p-4 justify-between items-center'>
               
                    <span>
                        {product?.title}
                    </span>
              
                <span>
                $ {product?.price}
                
                
                </span>
          </div>
          <button className='w-full  h-12 hover:bg-textColor hover:text-primaryColor bg-transparent border-solid border border-textColor '>Add to cart</button>
          {/* <div className='flex p-4 py-2 border-solid border border-textColor justify-between items-center'>
            <span><FaHeart size={22} /></span>
            <span><FaShoppingCart size={22} /></span>
          </div> */}
        </div>
    )
}

export default Product