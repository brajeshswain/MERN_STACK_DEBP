import React, { useState } from 'react'

const VirtualDom = () => {
    const[count,setCount]=useState(0);

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <button onClick={()=>setCount(count-1)}>decrement</button>
        <button onClick={()=>setCount(count*count)}>multiply</button>
        <button onClick={()=>setCount(count**2)}>squre</button>
      
    </div>
  )
}

export default VirtualDom
