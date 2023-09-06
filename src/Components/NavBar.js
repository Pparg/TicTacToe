import React from "react";
import { useState } from "react";



export default function NavBar ( { handleKeyDown}) {
    let [ name , setName ] = useState("PP")
    let handleChange = (e) => {
        setName(e.target.value)
    }
    return (
        <>
            <div>
                <label>Choose your number : </label>
                <input value={name} onChange={ handleChange } onKeyDown={(e) => handleKeyDown(e,name)}></input>
                <button onKeyDown={ handleKeyDown } >Submit</button>
            </div>
        </>
    )
}