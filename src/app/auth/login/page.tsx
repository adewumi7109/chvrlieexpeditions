"use client"
import { useUser } from '@/app/context/user'
import { supabase } from '@/app/libs/supabase'
import { redirect, useRouter } from 'next/navigation'
import React, { useState } from 'react'

function Page() {
  const router = useRouter()
  const user = useUser()
 if(user.email !== null){
  router.back()
 }
  const [data, setData] = useState<{
    email: string,
    password: string
}>({
    email: '',
    password: ''
})
const handleSubmit = async (e:any) => {
  e.preventDefault();
    try {
        let { data: dataUser, error } = await supabase
            .auth
            .signInWithPassword({
                email: data.email,
                password: data.password
            })
          
            
       if(dataUser){
      
        router.back()
      
       }
    } catch (error) {
        console.log(error)
    }
}
const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev: any) => ({
        ...prev,
        [name]: value,

    }))
}
  return (
    <div className="flex items-center justify-center min-h-[80vh] md:min-h-screen">
      <div className="bg-primaryColor  border-solid border border-textColor p-8 shadow-md rounded-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={data?.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full bg-transparent border-solid border border-textColor  outline-0 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={data?.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full bg-transparent border-solid border border-textColor  outline-0 rounded-md"
              required
            />
          </div>
          {/* <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Login
          </button> */}
          <button className='w-full  h-12 hover:bg-textColor hover:text-primaryColor text-primaryColor bg-textColor rounded-md '>Login</button>

        </form>
      </div>
    </div>
  )
}

export default Page