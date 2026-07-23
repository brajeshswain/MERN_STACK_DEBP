import React from 'react'
import { useState,useEffect } from 'react'

const RunsDependecyChanges = () => {

 const[count,setCount]=useState(0)
useEffect(()=>{
    console.log(`count changes to ${count}`)
},[count])
  return (
    
    <div>
        <h2>{countl}</h2>
        <button onClick={()=>setCount(count+1)}>count</button>
      
    </div>
  )
}

export default RunsDependecyChanges
