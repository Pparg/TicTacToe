import React from "react";
import { useState } from "react";

import './GameMaster.css'
import Case from './Case'
import Score from './Score'

export default function GameMaster ({ ...game_config }) {
    let [game_board, setBoard] = useState(game_config.damier)
    let [current_player , setCurrentPlayer] = useState({
        name: "p1",
        symbol: "X"
    })
    let case_winner = [
        ["X","X", "X"],
        ["O", "O", "O"]
    ]
    let switcher = (item) => {
        switch (item) {
            case "p1":
                setCurrentPlayer({
                    name: "p2",
                    symbol: "O"
                })
                break;
            case "p2": 
                setCurrentPlayer({
                    name: "p1",
                    symbol: 'X'
                })
        }
    }
    let handleDamier = (id) =>{
        let newArray = [...game_board.flat()]
        newArray[id] = current_player.symbol
        setBoard(newArray)
        switcher(current_player.name)
        // Logique fin de jeu
        let rows = game_board.flat()
    }
    let newGame =  () => {
        setBoard(Array(9).fill(null))
    }
    return(
        <div className="board_container">
            <h3>Welcome {game_config.user_info.p1.name} & {game_config.user_info.p2.name} </h3>
            <p>C'est le tour de TODO</p>
            <div className="board">
                { game_board.flat().map((item, index) => <Case id={index} fill={item} handleDamier={handleDamier}/>) }
            </div>
            <button onClick={newGame}>New Game</button>
        </div>
    )
}