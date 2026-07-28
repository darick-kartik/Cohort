import React, { useState } from 'react'


const App = () => {
  let [count,setCount]=useState(0);
  return (
    <div>
     <h1>Counter:{count}</h1>
     <button onClick={()=>{
      setCount(count+1);
     }}>Increment</button>
    </div>
  )
}

export default App
