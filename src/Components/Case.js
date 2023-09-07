import React from "react";

import './Case.css'

export default function Case ({id, fill, handleDamier, winner}) {
    return(
        <div>
            {fill || winner ? <div className="card" >{fill}</div> : <div className="card" onClick={() => handleDamier(id)}>{fill}</div>}
        </div>
    )
}