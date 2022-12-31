import React from 'react'
import GamemodeSelector from '../components/GamemodeSelector'

function Homepage({handleGameStart}) {
  return (
    <div className="homepage flex-start-col">
        <h1 className="header">R & P & S : Last Fight</h1>
        <div className="flex-cen-col select-mode-container">
            <h2>Welcome Back, Warrior.</h2>
            <GamemodeSelector gameStarterFunc={handleGameStart}></GamemodeSelector>
        </div>
    </div>
  )
}

export default Homepage