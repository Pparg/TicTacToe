import React, { useContext ,useEffect , useState} from "react";

import { Context } from "../Context/context";
import './GameMaster.css'
import Case from './Case'
import Score from './Score'

export default function GameMaster () {
    let {data, setData} = useContext(Context)
    let [game_board, setBoard] = useState(data.damier)
    let [ winner, setWinner ] = useState("") 
    let [score, setScore] = useState({
        p1 : 0,
        p2 : 0
    })
    let [current_player , setCurrentPlayer] = useState({
        name: "p1",
        symbol: "X",
        display : data.user_info.p1.name
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
        console.log(item, 'switcher')
        switch (item) {
            case "p1":
                console.log("in 1")
                setCurrentPlayer({
                    name: "p2",
                    symbol: "O",
                    display: data.user_info.p1.name
                })
                break;
            case "p2": 
                console.log("in 2")
                setCurrentPlayer({
                    name: "p1",
                    symbol: 'X',
                    display: data.user_info.p2.name
                })
                break
        }
    }
    let handleDamier = (id) =>{
        let newArray = [...game_board]
        newArray[id] = current_player.symbol
        setBoard(newArray)
        switcher(current_player.name)
        localStorage.setItem("board", game_board)
    }
    let newGame =  () => {
        setBoard(Array(9).fill(null))
        setWinner("")
    }
    let resetGame = () => {
        localStorage.removeItem("user_info")
        window.location.reload()
    }
    useEffect(() => {
        winner_moves.map((item) => {
            let [ a,b,c ] = item
            if(game_board[a] && game_board[a] === game_board[b] && game_board[a] === game_board[c] ){
                setWinner(current_player.name)
                if(current_player.name === 'p1'){
                    setScore({
                        ...score,
                        p1 : score.p1 + 1
                    })
                }else{
                    setScore({
                        ...score,
                        p2: score.p2 + 2
                    })
                }
            }
        })
        if(game_board.includes(null)){
            
        }
    }, [game_board])             
    return(
    
        <div className="board_container">
            <h3>Welcome {data.user_info.p1.name} & {data.user_info.p2.name} </h3>
            {winner === "" ? <p> C'est le tour de {current_player.display}</p> : winner.length<1 ? <p>Tie</p> : <p> {current_player.display} is the winner</p>}
            <div className="board">
                { game_board.map((item, index) => <Case key={index} id={index} fill={item} winner={winner} handleDamier={handleDamier}/>) }
            </div>
            <Score score={score} users={data.user_info}></Score>
            <button onClick={newGame}>New Game</button>
            <button onClick={resetGame}>Reset Game</button>
        </div>
    )
}