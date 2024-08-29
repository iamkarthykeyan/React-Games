import React from 'react'
import './WhackaMole.css'

function WhackaMole() {
  return (
    <div className="whackamole font-poppins text-center">
        <h1>Whack A Mole</h1>
        <h2 id="score">0</h2>
        <div id="board"></div>
    </div>
  )
}

export default WhackaMole