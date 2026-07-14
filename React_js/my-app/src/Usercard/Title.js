import React from 'react'
// import Usescard from './usescard'

const Title = (card) => {
  return (
    <div>
        <h1>Name: {card.name} </h1>
        <h2>Age: {card.Age}</h2>
        <h3>City: {card.city}</h3>
      </div>
  )
}

export default Title
