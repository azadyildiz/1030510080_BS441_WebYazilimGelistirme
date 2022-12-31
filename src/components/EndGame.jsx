import React from 'react'

var endContent = {text:'',color:''};
function EndGame({end,gameResetFunc,restartAppFunc}) {
  // Gets end props and configures endContent
  if(end==='draw'){
    endContent.text = 'DRAW'
    endContent.color = 'gray'
  }
  else if(end==='won'){
    endContent.text = 'VICTORY'
    endContent.color = 'deepskyblue'
  }
  else if(end==='lost'){
    endContent.text = 'DEFEAT'
    endContent.color = 'red'
  }
  else{
    console.log('ERROR: Unknown game end on EndGame component.')
  }

  return (
    <div className='popup-container'>
      <div className='popup flex-cen-col'>
        <h1 style={{color:`${endContent.color}`}}>{endContent.text}!</h1>
        <div className='flex-cen-col'>
          <button style={{width:'330px',border: '1px solid black'}} onClick={()=>gameResetFunc()}>Play Again</button>
          <button style={{width:'330px',border: '1px solid black'}} onClick={()=>{restartAppFunc();gameResetFunc();}}>Return Lobby</button>
        </div>
      </div>
    </div>
  )
}

export default EndGame