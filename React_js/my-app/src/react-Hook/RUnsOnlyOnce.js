import React, { useEffect } from 'react'
import { useState } from 'react'

const RUnsOnlyOnce = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => console.log(data))
    }, [])
    return (
        <div>
            <h1>Hello Users</h1>
            <h2>Count:{count}</h2>
            <button onClick={() => setCount(count + 1)}>Touch mee</button>
            <button onClick={() => setCount(count - 1)}>click mee</button>

        </div>
    )
    //
    // useEffect(() => {
    //     console.log("componet render only once")
    // })
    // return (
    //     <div>
    //         <h1>hello count</h1>
    //         <p>Current Count:{count}</p>
    //         <button onClick={() => setcount(count + 1)}>
    //             Incremennt
    //         </button>
    //         <button onClick={() => setcount(count - 1)}>Decrement</button>
    //     </div>
    // )
}

export default RUnsOnlyOnce
