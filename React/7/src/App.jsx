import React, { useState } from 'react'
import Navbar from './components/Navbar'
import UserForm from './components/UserForm';
import UserCard from './components/UserCard';

const App = () => {
  const [formOpen,setFormOpen]=useState(false);
  return (
    <div className='p-4'>
      <Navbar setFormOpen={setFormOpen}/>
      <UserForm/>
      <UserCard/>
    </div>
  )
}

export default App
