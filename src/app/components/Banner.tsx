import React from 'react'
import Image from 'next/image'
function Banner() {
  return (
    <div className="relative h-96 sm:h-96 bg-cover bg-center text-white flex items-center justify-center">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="text-center z-10">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Your Banner Text</h1>
      <p className="text-lg sm:text-xl md:text-2xl">Your subheading or additional text goes here.</p>
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