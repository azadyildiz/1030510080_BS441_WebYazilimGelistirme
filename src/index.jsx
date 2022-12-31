import React, {useState,useEffect} from "react";
import ReactDOM from "react-dom";

import Homepage from "./pages/Homepage.jsx";
import Gamepage from "./pages/Gamepage";

const App = () => {
    const [gamemode,setGamemode] = useState(null);

    // For fade effect
    useEffect(() => {
        document.querySelector('#root').style.opacity = 1;
    })

    // This func restarts app
    function restartApp(){
        document.querySelector('#root').style.opacity = 0;
        setTimeout(() => {
            setGamemode(null);
        }, 600);
    }

    // Game Starter function. When player choose a gamemode, this func. will work.
    function handleGameStart(gamemode){
        document.querySelector('#root').style.opacity = 0;
        setTimeout(() => {
            setGamemode(gamemode);
        }, 600);
    }
    
    // If player didnt choose a gamemode, Gamemode selector page will render.
    if(gamemode !== null){
        // Gamepage
        return(
            <Gamepage gamemode={gamemode} restartAppFunc={restartApp}/>
        )
    }
    else{
        // Homepage
        return (
            <Homepage handleGameStart={handleGameStart}/>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));