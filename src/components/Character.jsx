import React from 'react'

function Character({weapon,gamemode,hp}) {
  return (
    <div>
      <div id={gamemode} style={{width: '250px'}} className='flex-cen-col'>
        {gamemode === 'war' && <div className='healthbar'><div style={{width:`${hp/10}px`}} className='health'></div></div>}
        <div style={{width:'250px',height:'250px'}} id={weapon} className="weapon-art"></div>
        <span>{weapon.charAt(0).toUpperCase()+weapon.slice(1)}</span>
      </div>  
    </div>
  )
}

export default Character