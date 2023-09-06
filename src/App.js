import React from "react";
import { useState } from "react";

import './app.css'
import Login from "./Components/Login";
import GameMaster from "./Components/GameMaster";

export default function App () {
    let [ game_config, setGameConfig ] = useState({
        damier : [[1,2,3], [4,5,6], [7,8,9]]
    })

    let handleSubmit = (players_info, e="" ) => {
        if(players_info.p1.name.length>0 && players_info.p2.name.length>0 ){
            setGameConfig({
                ...game_config,
                user_info:  players_info
            })
            console.log(game_config)
        }
    }
    let newGame =  () => {
        setGameConfig({
            ...game_config,
            damier : "nouvel array",
        })
    }

    return (
        <>
            {JSON.stringify(game_config)}
            <Login handleSubmit={handleSubmit} ></Login>
            <GameMaster ></GameMaster>
        </>
    )
}