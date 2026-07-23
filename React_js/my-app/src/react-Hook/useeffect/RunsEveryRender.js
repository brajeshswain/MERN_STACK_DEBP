import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const RunsEveryRender = () => {
    const[count,setcount]=useState(0)
    useEffect (()=>{
        console.log("componet render")
    })
  return (
    <div>
      <h1>hello Benu Your Body count</h1>
      <p>Current Count:{count}</p>
      <button onClick={()=> setcount(count+1)}>
        Incremennt
      </button>
      <button onClick={()=> setcount(count-1)}>Decrement</button>
    </div>
  )
}

export default RunsEveryRender
