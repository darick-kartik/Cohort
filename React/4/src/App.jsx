import React, { useState } from 'react'


const App = () => {
  let [formData,setFormData]=useState({});
  console.log(formData);
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  return (
    <div className='flex flex-col gap-5 w-60'>
      <input onChange={handleChange} className='border-2' type="text" placeholder='Enter your name' name='name'/>
      <input onChange={handleChange} className='border-2' type="email" placeholder='Enter your email' name='email' />
      <input onChange={handleChange} className='border-2' type="password" placeholder='Enter your password' name='password' />
      <button className='border-2'>Submit</button>
    </div>
  )
}

export default App
