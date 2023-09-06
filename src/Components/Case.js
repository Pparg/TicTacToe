import React from "react";
import { useState } from "react";

import './Case.css'

export default function Case ({id, fill, handleDamier}) {
    return(
        <div className="card" onClick={() => handleDamier(id)}>
            {fill}
        </div>
    )
}