import React, { useEffect } from "react";
import { useState } from "react";

import './app.css'
import Login from "./Components/Login";
import GameMaster from "./Components/GameMaster";

export default function App () {
  let [ game_config, setGameConfig ] = useState({
      damier : Array(9).fill(null),
      user_info: null
  })
  let [display , setDisplay] = useState(false)
	useEffect(() => {
		const storedUserInfo = localStorage.getItem("user_info")
		if (storedUserInfo){
			let user_info = JSON.parse(storedUserInfo)
			setGameConfig({
				...game_config,
				user_info: user_info
			})
			setDisplay(true)
		}
	}, [])
  let handleSubmit = (players_info) => {
      if(players_info.p1.name.length>0 && players_info.p2.name.length>0 ){
          setGameConfig({
              ...game_config,
              user_info:  players_info
          })
          // LOCAL STORAGE 
          localStorage.setItem("user_info", JSON.stringify(players_info))
          setDisplay(true)
      }
  }
  return (
      <div className="app">
          <p>{display? "true": 'false'} here</p>
          { display ?
          <GameMaster {...game_config}></GameMaster>
            :
          <Login handleSubmit={handleSubmit}></Login>
          }
      </div>
  )
}