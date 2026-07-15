import React from 'react'

const Register = () => {

    function WriteInside(e) {
        e.preventDefault() // it handles the data auto reload case
        console.log("HelloWorld")
    }
    let age = 19
    const email = "bikubrajesh@gmail.com"
    return (

        <form>
            {age > 18 && email === "bikubrajesh@gmail.com" ?(
                <div>
                    <input type="email" placeholder='Enter Email'></input>
                    <button onClick={WriteInside}>Submit</button>
                </div>
            ) : (
            <p>you are a small kit</p>
            )}

        </form>
    )
}

export default Register
