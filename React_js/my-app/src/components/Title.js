import React from 'react'
// import Button from './Button'
// import About from '../screens/About'

const Title = ({ name, ContactNumber, schoolName, collegeName, rollNumber }) => {
    return (
        <>
            <div>
                <div>
                    <div>
                        <h1 style={{ fontstyle: 50, color: "red" }}>{name}</h1>
                    </div>
                </div>
            </div>
            {/* <h1> Hello {props.name}</h1> */}
            <h1 style={{ fontSize: 50, color: "red" }}>{ContactNumber}</h1>
            <h1 style={{ fontSize: 50, color: "red" }}>{schoolName}</h1>
            <h1 style={{ fontSize: 50, color: "red" }}>{collegeName}</h1>
            <h1 style={{ fontSize: 50, color: "red" }}>{rollNumber}</h1>
        </>)

}

export default Title
