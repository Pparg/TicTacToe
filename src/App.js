import React from "react";
import { useState } from "react";

import './app.css'
import Login from "./Components/Login";
import GameMaster from "./Components/GameMaster";

export default function App () {
    let [ game_config, setGameConfig ] = useState({
        damier : [[null,null,null ], [ null, null , null ], [ null, null , null ]]
    })
    let [display , setDisplay] = useState(false)
    let handleSubmit = (players_info) => {
        if(players_info.p1.name.length>0 && players_info.p2.name.length>0 ){
            setGameConfig({
                ...game_config,
                user_info:  players_info
            })
            setDisplay(true)
        }
    }
    return (
        <div className="app">
            { display ?
            <div>
                <GameMaster {...game_config}></GameMaster>
                
            </div> 
             : 
            <Login handleSubmit={handleSubmit}></Login>}
        </div>
    )
}