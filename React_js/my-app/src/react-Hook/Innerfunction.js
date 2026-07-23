import React from 'react'
import { useEffect } from 'react'

const Innerfunction = () => {
    useEffect(()=>{
        const timer=setInterval(()=>{
            console.log("Running.....")

        },6000)
        return()=>{
            clearInterval(timer)
        }
    },[])

  return (
    <div>
      <h1>hello </h1>
    </div>
  )
}

export default Innerfunction
