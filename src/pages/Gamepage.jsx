import React, {useState,useEffect} from 'react'
import WeaponSelector from '../components/WeaponSelector.jsx'
import Character from '../components/Character.jsx'
import EndGame from '../components/EndGame.jsx'
import {getEnemyWeapon,winnerController} from '../utils.js'

var enemyWeapon = getEnemyWeapon();
var isFirstRender = true;

var lastPlayerHP = 1500;
var lastPcHP = 1500;

function Gamepage({gamemode,restartAppFunc}) {
  const [weapon,setWeapon] = useState(0);
  const [isGameEnd,setIsGameEnd] = useState('');

  const[playerHP,setPlayerHP] = useState(lastPlayerHP);
  const[pcHP,setPcHP] = useState(lastPcHP);

  // For fade effect
  useEffect(() => {
    document.querySelector('#root').style.opacity = 1;
  })
  
  // This function sets the player's weapon
  function handleWeapon(weapon){
    setWeapon(weapon);
  }

  // This func. makes fight animation and set isGameEnd state true for classic gamemode
  function handleClassicGame(status){
    if(status==='draw'){
      setTimeout(()=>{
        document.querySelector('#player .weapon-art').classList.add('player-half-damage');
        document.querySelector('#pc .weapon-art').classList.add('pc-half-damage');
        setTimeout(()=>{
          document.querySelector('#player .weapon-art').classList.remove('player-half-damage');
          document.querySelector('#pc .weapon-art').classList.remove('pc-half-damage');
          setTimeout(()=>{setIsGameEnd('draw')},600);
        },350)
      },600)
    }
    else if(status==='won'){
      setTimeout(()=>{
        document.querySelector('#player .weapon-art').classList.add('player-max-damage');
        setTimeout(()=>{
          document.querySelector('#player .weapon-art').classList.remove('player-max-damage');
          setTimeout(()=>{setIsGameEnd('won')},600);
        },350)
      },600)

    }
    else if(status==='lost'){
      setTimeout(()=>{
        document.querySelector('#pc .weapon-art').classList.add('pc-max-damage');
        setTimeout(()=>{
          document.querySelector('#pc .weapon-art').classList.remove('pc-max-damage');
          setTimeout(()=>{setIsGameEnd('lost')},600);
        },350)
      },600)
    }
    else{
      console.log('ERROR: Unknown status in handleClassicGame func. on ClassicGame comp.')
    }
  }

  // This func. handle war gamemode actions.
  function handleWarGame(){
    if(isFirstRender){
      var result = winnerController(weapon,enemyWeapon); // Checking who choose the correct matchup
      var playerDamage = 0;
      var pcDamage = 0;

      // If who choose the correct matchup (like: player= rock, pc= scissors), it can 2x damage.
      if(result === 'won'){
        playerDamage = 150;
        pcDamage = 75;
      }
      else if(result === 'lost'){
        playerDamage = 75;
        pcDamage = 150;
      }
      else{
        playerDamage = 75;
        pcDamage = 75;
      }

      // This func. is checking player's space push events.
      function handleKeyPress(event){
        if (event.keyCode === 32){ // In the 'keyup' event, it is checked whether the pressed key is 'space'.
          document.querySelector('#player .weapon-art').classList.add('player-half-damage'); // For hit animation
          setTimeout(()=>{
            document.querySelector('#player .weapon-art').classList.remove('player-half-damage'); // For hit animation
            lastPcHP = lastPcHP-playerDamage;
            if(lastPcHP <= 0){ // If pc's hp lower than 0, player will win.
              document.removeEventListener("keyup", handleKeyPress); // Dont need to listen space push events anymore.
              clearInterval(handlePcDamage); // Clear pc's hit loop.
              setIsGameEnd('won'); // Set end game for player.
            }
            else{ // If pc's hp upper than 0, pcHP state will set.
              setPcHP(lastPcHP);
            }
          },100)
        }
      }
      document.addEventListener("keyup", handleKeyPress);

      // This func. is checking pc's space push events.
      let handlePcDamage = setInterval(() => {
        document.querySelector('#pc .weapon-art').classList.add('pc-half-damage'); // For hit animation
        setTimeout(()=>{
          document.querySelector('#pc .weapon-art').classList.remove('pc-half-damage'); // For hit animation
          lastPlayerHP = lastPlayerHP-pcDamage;
          if(lastPlayerHP <= 0){ // If player's hp lower than 0, pc will win.
            document.removeEventListener("keyup", handleKeyPress); // Dont need to listen space push events anymore.
            clearInterval(handlePcDamage); // Clear pc's hit loop.
            setIsGameEnd('lost'); // Set end game for player.
          }
          else{ // If player's hp upper than 0, playerHP state will set.
            setPlayerHP(lastPlayerHP)
          }
        },100)
      }, 300);

      isFirstRender = false; // When hp change, this page re-render. For this reason, this func shouldn't work again. Because everything is set.
    }
  }

  // This func. resets classic game states
  function handleGameReset(){
    document.querySelector('#root').style.opacity = 0;
    setTimeout(()=>{
      isFirstRender = true;
      enemyWeapon= getEnemyWeapon();
      lastPlayerHP = 1500;
      lastPcHP = 1500;
      setWeapon(0);
      setIsGameEnd('');
      setPlayerHP(lastPlayerHP);
      setPcHP(lastPcHP);
    },600)
  }

  if(isGameEnd){ // End Game Screen
    return(
      <div className="gamePage flex-cen-row">
        <EndGame end={isGameEnd} gameResetFunc={handleGameReset} restartAppFunc={restartAppFunc}></EndGame>
      </div>
    )
  }
  else{
    if(weapon === 0){ // Weapon Select Screen
      return (
        <div className="gamePage flex-cen-col">
          <WeaponSelector weaponFunc={handleWeapon}/>
        </div>
      )
    }
    else{ // Fight Screen
      gamemode === 'war' ? handleWarGame() : handleClassicGame(winnerController(weapon,enemyWeapon));
      return(
        <div className="gamePage white-color flex-cen-row">
          <div style={{justifyContent:'space-between',width: '850px'}} className="flex-cen-row">
            <div id='player'>
              <h3>You</h3>
              <Character weapon={weapon} gamemode={gamemode} hp={playerHP}/>
            </div>
            <div id='pc'>
              <h3>Enemy</h3>
              <Character weapon={enemyWeapon} gamemode={gamemode} hp={pcHP}/>
            </div>
          </div>
          {gamemode === 'war' && <div className='spacebar'></div>}
        </div>
      )
    }
  }
}

export default Gamepage