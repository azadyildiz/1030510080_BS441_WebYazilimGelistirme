import React, {useState} from "react";
import ReactDOM from "react-dom";

const App = () => {
    const [gamemodeCTRL,setGamemodeCTRL] = useState(false);
    const [gamemode,setGamemode] = useState('');
    function classicGameStart(){
        setGamemodeCTRL(true);
        setGamemode('classic');
        console.log('Classic Game Started!')

    }
    function warGameStart(){
        setGamemodeCTRL(true);
        setGamemode('war');
        console.log('War Game Started!')
    }
    if(gamemodeCTRL){
        if(gamemode === 'classic'){
            return(
                <div></div>
            )
        }
        else if(gamemode === 'war'){
            return(
                <div></div>
            )
        }
        else{
            console.log('ERROR: CANNOT FOUND GAME MODE.')
        }
    }
    else{
        return (
            <div className="homepage flex-start-col">
                <h1 className="header">R & P & S : Last Fight</h1>
                <div className="flex-cen-col select-mode-container">
                    <h2>Welcome Back, Warrior.</h2>
                    <h3>Choose Your Game Mode</h3>

                    <div className="button-container">
                        <button id="classicCustomButton" style={{width:'330px'}} onClick={classicGameStart}>Classic Game</button>
                        <div className="info-bubble"><span style={{color:'red'}}>Your enemy is AI. </span>The classic rock paper scissors game you know.</div>
                    </div>
                    <div className="button-container">
                        <button id="warCustomButton" style={{width:'330px'}} onClick={warGameStart}>War Game</button>
                        <div className="info-bubble"><span style={{color:'red'}}>Your enemy is AI. </span>Pressing the <span style={{color:'deepskyblue'}}>Space</span> key inflicts damage to the enemy. But there is a trick, if you make the right matchup, you will inflict <span style={{color:'red'}}>1.5x damage.</span></div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));