import React, { useEffect } from "react";
import './Score.css'

export default function Score ({score, users}) {
    return(
        <div className="score_container">
            <p>{users.p1.name} VS {users.p2.name}</p>
            <p>{score.p1} - {score.p2}</p>
        </div>
    )
}