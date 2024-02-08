import React from 'react'
import Image from 'next/image'
function Banner() {
  return (
    <div className="relative h-80 sm:h-80 bg-cover bg-center text-white flex items-center justify-center">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="text-center z-10">
    <input
        className="rounded-l-md   border-[1px]  border-textColor bg-secondaryColor px-3 py-2 focus:outline-none focus:border-secondaryColor"
        type="text"
        placeholder="Search..."
      />
      <button className="px-4 py-2 bg-secondaryColor border-secondaryColor border-[1px] text-textColor font-semibold rounded-r-md  focus:outline-none">
        Search
      </button>
    </div>
    <Image
      src="/banner.jpg" // Replace with your actual image path
      alt="Banner Image"
      layout="fill"
      objectFit="cover"
      quality={100}
    />
  </div>
  )
}

export default Banner