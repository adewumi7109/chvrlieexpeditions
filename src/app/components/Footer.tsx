import React from 'react'

function Footer() {
  return (
    <footer className='bg-secondaryColor py-[50px]'>
        <div className='w-[90%] mx-auto my-0'>
        <h1>BE IN THE KNOW</h1>
        <div className=' flex justify-between w-[] mt-6 items-center'>
            <div className='w-[55%]'>
                <input type="text" className='bg-transparent w-[100%] border-[1px] border-textColor border-x-0 border-t-0 outline-none py-2 ' placeholder='Email Address*' />
            </div>
            <div>
                <button className=' w-[300px] h-[40px] border-[1px] border-textColor'>Join</button>
            </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer