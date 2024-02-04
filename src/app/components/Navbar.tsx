"use client"
import React, { use, useState } from 'react'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
function Navbar() {

    const Links = [

        { name: "Home", link: "/" },
        { name: "Photography", link: "/photography" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },


    ]
    const [toggle, setToggle] = useState(true);
    const toggleMenu = ()=>{
        setToggle(false)
    }
    const removeMenu = ()=>{
        setToggle(true)
    }

    return (
        <div>
           
            <div className=' flex gap-2 p-3 flex-col bg-primaryColor items-center justify-center'>
                <h1 className='text-textColor text-4xl'>STEPHANE</h1>
                <div className=' h-[1px] bg-textColor w-[30%]'>

                </div>
                <h2 className='text-textColor text-2xl'>FINE ART PHOTOGRAPHY</h2>

            </div>
            <div className='bg-secondaryColor'>
                <nav className='w-[100%] md:w-[90%] md:py-4 md:px-0 py-5 px-7 md:relative bg-secondaryColor md:justify-between absolute flex-col md:flex-row  z-20 right-0 left-0 mx-auto my-0  flex  '>
                 
                        <ul className={`${toggle? "hidden md:flex gap-5 text-[1.1rem]": "flex    flex-col  gap-5 justify-around text-[1.1rem]"}`}>
                          {Links.map((link)=>(
                           <a href={link.link}>{link.name}</a>
                          ))}

                        </ul>
                 
                   
                      <div className='flex gap-2 items-center'>
                      <div className={`${toggle? " hidden md:block":" flex  gap-1"}`}>
                            <span><a href="">Sign in</a></span>
                            <span>/</span>
                            <span><a href="">Register</a></span>
                        </div>

                        <FaShoppingCart className={`${toggle? "absolute bottom-5 right-5 md:static":" hidden"}`}  />
                      </div>
             
               <GiHamburgerMenu onClick={toggleMenu} className={`${toggle? " md:hidden":" hidden"}`} />
              
                <FaTimes onClick={removeMenu}  className={`${!toggle? "absolute t-0 right-5 ":" hidden"}`}/>
                
                </nav>
            </div>
          
        </div>
    )
}

export default Navbar