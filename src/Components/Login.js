import React from "react";
import { useState } from "react";


export default function Login ( {handleSubmit} ) {
    let [player, setPlayers] = useState({
        p1: {
            name: "",
            color: "red"
        },
        p2: {
            name: "",
            color: "green"
        }
    })
    let handleChange = (e) => {
        if(e.target.id === "p1"){
            setPlayers({
                ...player,
                p1: {
                    ...player.p1,
                    name: e.target.value,
                }
            })
        }else{
            setPlayers({
                ...player,
                p2:{
                    ...player.p2,
                    name: e.target.value
                }
            })
        }
    } 
    return(
        <>
            <div>
                <h1>Set players information</h1>
                <label>Player 1</label>
                <input type="text" id="p1" value={player.p1.name} onChange={ handleChange } ></input>
                <label>Player 2</label>
                <input type='text' id="p2" value={player.p2.name} onChange={ handleChange }></input>
                <button onClick={() => handleSubmit(player)}>Submit</button>
            </div>
        </>
    )
}