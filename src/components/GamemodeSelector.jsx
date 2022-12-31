import React from 'react'

function GamemodeSelector({gameStarterFunc}) {
  return (
    <>
        <h3>Choose Your Game Mode</h3>
        <div className="button-container">
            <button id="classicCustomButton" style={{width:'330px'}} onClick={()=>gameStarterFunc('classic')}>Classic Game</button>
            <div className="info-bubble"><span style={{color:'red'}}>Your enemy is AI. </span>The classic rock paper scissors game you know.</div>
        </div>
        <div className="button-container">
            <button id="warCustomButton" style={{width:'330px'}} onClick={()=>gameStarterFunc('war')}>War Game</button>
            <div className="info-bubble"><span style={{color:'red'}}>Your enemy is AI. </span>Pressing the <span style={{color:'deepskyblue'}}>Space</span> key inflicts damage to the enemy. But there is a trick, if you make the right matchup, you will inflict <span style={{color:'red'}}>2x damage.</span></div>
        </div>
    </>
  )
}

export default GamemodeSelector