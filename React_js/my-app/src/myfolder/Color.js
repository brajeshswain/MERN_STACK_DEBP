import React, { useState } from 'react'

const Color = () => {
    const [color, setcolor] = useState("red");
    return (
        <div>
            <h1 style={{ color: color }}>It is my fast color</h1> <hr></hr>
            <button onClick={() => { setcolor("green") }} style={{ backgroundColor: "green" }} >green</button> <hr></hr> <br></br>
            <button onClick={() => { setcolor("red") }} style={{ backgroundColor: "red" }}>red</button> 
             <hr></hr> <br></br>
            <button onClick={() => { setcolor("blue") }} style={{ backgroundColor: "blue" }}>blue</button><br></br>  <hr></hr>
            <button onClick={() => { setcolor("pink") }} style={{ backgroundColor: "pink" }}>pink</button>


        </div>
    )
}

export default Color
