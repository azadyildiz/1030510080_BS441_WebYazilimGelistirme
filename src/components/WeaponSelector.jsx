import React from 'react'

function WeaponSelector({weaponFunc}) {
  function handleWeaponSelect(weapon){
    document.querySelector('#root').style.opacity = 0; // For fade effect
    setTimeout(()=>weaponFunc(weapon),600) // set player weapon of parent component
  }
  return (
    <div className='popup-container'>
      <div className='popup flex-cen-col'>
        <h3>Select Your Weapon</h3>
        <div className='flex-cen-row'>
          <div onClick={()=>{handleWeaponSelect('rock')}} className='popup-weapons flex-cen-col'>
            <div style={{width:'50px',height:'50px'}} id='rock'></div>
            <span>Rock</span>
          </div>
          <div onClick={()=>{handleWeaponSelect('paper')}} className='popup-weapons flex-cen-col'>
            <div style={{width:'50px',height:'50px'}} id='paper'></div>
            <span>Paper</span>
          </div>
          <div onClick={()=>{handleWeaponSelect('scissors')}} className='popup-weapons flex-cen-col'>
            <div style={{width:'50px',height:'50px'}} id='scissors'></div>
            <span>Scissors</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeaponSelector