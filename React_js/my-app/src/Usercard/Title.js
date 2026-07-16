import React from 'react'
// import Usescard from './usescard'

const Title = (card) => {
  const styles = {
    demo:{
      backgroundColor:"red"
    }

  }
  return (
    <div style={styles.demo}>
        <h1> hello {card.name} </h1>
        <h2>Age: {card.Age}</h2>
        <h3>City: {card.city}</h3>
      </div>
  )
}

export default Title
