import React from "react";

import './Case.css'

export default function Case ({id, fill, handleDamier}) {
    return(
        <div>
            {fill ? <div className="card" >{fill}</div> : <div className="card" onClick={() => handleDamier(id)}>{fill}</div>}
        </div>
    )
}