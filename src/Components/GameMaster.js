import React from "react";
import { useState } from "react";

import './GameMaster.css'
import Case from './Case'
import Score from './Score'

export default function GameMaster ({ ...game_config }) {
    console.log(game_config)
    let [game_board, setBoard] = useState(game_config.damier)
    let [current_player , setCurrentPlayer] = useState("X")
    let handleDamier = (id) =>{

    }
    let test = [1,2,3]
    /*
    Array(9).map((index) => {
        <Case key={index}></Case>
    } )
    */
    return(
        <div className="board_container">
            <h3>Welcome {game_config.user_info.p1.name} & {game_config.user_info.p2.name} </h3>
            <div className="board">
                { Array(9).fill(null).map((item, index) => <Case id={index}/>) }
            </div>
            
        </div>
        
    )
}