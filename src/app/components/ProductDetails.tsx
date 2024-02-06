import React from 'react'

function ProductDetails() {
  return (
    <div className="my-[7rem] w-[90%] mx-auto flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <img src='/banner.jpg' className="w-full h-auto mb-4" />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h1 className="text-2xl font-bold mb-4">Horse</h1>
        <p className=" mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, perspiciatis.</p>
        <p className=" font-bold text-lg mb-4">$1000</p>
        <button className='w-full  h-12 hover:bg-textColor hover:text-primaryColor bg-transparent border-solid border border-textColor '>Add to cart</button>
      
      </div>
    </div>
  )
}

export default ProductDetails