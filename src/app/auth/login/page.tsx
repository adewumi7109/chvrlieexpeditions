"use client"
import React, { useState } from 'react'

function page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e:any) => {
      e.preventDefault();
      // Add your login logic here
      console.log('Login submitted with:', { email, password });
    };
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

export default page