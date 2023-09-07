import React, { useEffect , useState} from "react";

import './GameMaster.css'
import Case from './Case'
import Score from './Score'

export default function GameMaster ({ ...game_config }) {
    let [game_board, setBoard] = useState(game_config.damier)
    let [ winner, setWinner ] = useState("") 
    let [score, setScore] = useState({
        p1 : 0,
        p2 : 0
    })
    let [current_player , setCurrentPlayer] = useState({
        name: "p1",
        symbol: "X",
        display : game_config.user_info.p1.name
    })
    let winner_moves = [
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
                    display: game_config.user_info.p1.name
                })
                break;
            case "p2": 
                setCurrentPlayer({
                    name: "p1",
                    symbol: 'X',
                    display: game_config.user_info.p2.name
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
        setWinner("")
    }
    useEffect(() => {
        winner_moves.map((item) => {
            let [ a,b,c ] = item
            if(game_board[a] && game_board[a] === game_board[b] && game_board[a] === game_board[c] ){
                setWinner(current_player.name)
            }
        })
        if(game_board.filter((item)=> item === null).length <1){
            setWinner([])
        }
    }, [game_board])
    console.log(winner)
    return(
    
        <div className="board_container">
            <h3>Welcome {game_config.user_info.p1.name} & {game_config.user_info.p2.name} </h3>
            {winner === "" ? <p> C'est le tour de {current_player.display}</p> : winner.length<1 ? <p>Tie</p> : <p> {current_player.display} is the winner</p>}
            <div className="board">
                { game_board.map((item, index) => <Case key={index} id={index} fill={item} winner={winner} handleDamier={handleDamier}/>) }
            </div>
            <button onClick={newGame}>New Game</button>
        </div>
    )
}