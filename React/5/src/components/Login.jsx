import React from 'react'

const Login = ({setToogle}) => {
  return (
    <div className='bg-white w-90 p-6 rounded-xl flex flex-col gap-4'>
        <h1>Login</h1>
        <form className='flex flex-col gap-4'>
            <input className='p-2 border border-gray-400 rounded' type="email" placeholder='Email'/>
            <input className='p-2 border border-gray-400 rounded' type="password" placeholder='Password' />
            <button className='p-2 bg-blue-500 text-white rounded'>Login</button>
        </form>
        <p>
            Didn't have an Account?<span onClick={() => setToogle(prev => !prev)} className='text-blue-600 cursor-pointer'>Register Here</span>
        </p>
    </div>
  )
}

export default Login
