import React, { useEffect , useState} from "react";

import './GameMaster.css'
import Case from './Case'
import Score from './Score'

export default function GameMaster ({ ...game_config }) {
    let [game_board, setBoard] = useState(game_config.damier)
    let [current_player , setCurrentPlayer] = useState({
        name: "p1",
        symbol: "X"
    })
    let winner = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    let switcher = (item) => {
        switch (item) {
            case "p1":
                setCurrentPlayer({
                    name: "p2",
                    symbol: "O",
                    display: ""
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
        let newArray = [...game_board]
        newArray[id] = current_player.symbol
        setBoard(newArray)
        switcher(current_player.name)
    }
    let newGame =  () => {
        setBoard(Array(9).fill(null))
    }
    useEffect(() => {
        winner.map((item) => {
            let [ a,b,c ] = item
            if(game_board[a] && game_board[a] === game_board[b] && game_board[a] === game_board[c] ){
                console.log("glace")
            }
        })
    }, [game_board])
    return(
        <div className="board_container">
            <h3>Welcome {game_config.user_info.p1.name} & {game_config.user_info.p2.name} </h3>
            <p>C'est le tour de {current_player.name}</p>
            <div className="board">
                { game_board.map((item, index) => <Case id={index} fill={item} handleDamier={handleDamier}/>) }
            </div>
            <button onClick={newGame}>New Game</button>
        </div>
    )
}