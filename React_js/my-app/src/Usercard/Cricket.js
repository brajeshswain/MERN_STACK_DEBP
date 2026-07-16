// Question 6: Cricket Scores
// const scores = [
//  {player:"Virat",runs:85},
//  {player:"Rohit",runs:120},
//  {player:"Gill",runs:45},
//  {player:"Hardik",runs:65},
//  {player:"Rahul",runs:30}
// ];

// Requirements -> 

// Display all players.
// If runs ≥ 50
// Show "Half Century".
// If runs ≥100
// Show "Century".

// Otherwise

// Show "Needs Improvement".

import React from 'react'

const Cricket = () => {
  const scores = [
    { player: "Virat", runs: 85 },
    { player: "Rohit", runs: 120 },
    { player: "Gill", runs: 45 },
    { player: "Hardik", runs: 65 },
    { player: "Rahul", runs: 30 }
  ];
  return (
    <div>
      {scores.map(({player,runs})=>
      <div>
        <h2>player name:{player}</h2>
        <h3>players runs:{runs}</h3>
        <p>
          runs={runs>=100?("century"):(runs>=50?("half century"):("needs improvement"))}
        </p>
        </div>

    )}

    </div>
  )
}

export default Cricket
