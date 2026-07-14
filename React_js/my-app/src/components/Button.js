import React from 'react'
// import Title from './Title'

const Button = ({ label = "Click me" }) => {
  return (
    <div>
      <button>{label}</button>

    </div>
  )
}

export default Button
