import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='bg-secondaryColor py-[50px]'>
        <div className='w-[95%] mx-auto my-0'>
        <h1>BE IN THE KNOW</h1>
        <div className=' flex justify-between flex-col gap-6 md:gap-0 md:flex-row mt-6 md:items-center'>
            <div className='md:w-[55%] w-[100%]'>
                <input type="text" className='bg-transparent w-[100%] border-[1px] border-textColor border-x-0 border-t-0 outline-none py-2 ' placeholder='Email Address*' />
            </div>
            <div>
                <button className=' md:w-[300px] md:h-[40px] w-[150px] h-[40px] border-[1px] border-textColor'>Join</button>
            </div>
        </div>
        <div className='flex mt-9 gap-5 items-baseline md:flex-row md:justify-between flex-col'>
          <div className='md:w-[50%]'>
            <p>By giving us your email address you agree to receive (thrilling) email updates, including special offers, new pieces and arty news. If you want you can unsubscribe at any time.</p>
          </div>
          <div className='flex flex-col items-center'>
            <h1 className=' text-lg'>CONNECT WITH</h1>
            <div className='flex mt-5 gap-[20px]'>
            <FaInstagram size={35}/>
            <FaTwitter size={35}/>
            <FaFacebookSquare size={35}/>
            </div>
          </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer