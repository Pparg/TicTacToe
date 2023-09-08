import React, { useEffect, useContext } from "react";
import { useState } from "react";
import './app.css'
import Login from "./Components/Login";
import GameMaster from "./Components/GameMaster";
import { Context } from "./Context/context";

export default function App () {
  let { data, setData } = useContext(Context)
  let [display , setDisplay] = useState(false)
  
	useEffect(() => {
		const storedUserInfo = localStorage.getItem("user_info")
		if (storedUserInfo){
			let user_info = JSON.parse(storedUserInfo)
      setData({
        ...data,
        user_info: user_info
      })
			setDisplay(true)
		}
	}, [])
  let handleSubmit = (players_info) => {
      // Check données correct
      if(players_info.p1.name.length>0 && players_info.p2.name.length>0 ){
          setData({
            ...data,
            user_info: players_info
          })
          // LOCAL STORAGE 
          localStorage.setItem("user_info", JSON.stringify(players_info))
          setDisplay(true)
      }
  }
  return (
    
      <div className="app">
          { display ?
          <GameMaster></GameMaster>
            :
          <Login handleSubmit={handleSubmit}></Login>
          }
      </div>


  )
}