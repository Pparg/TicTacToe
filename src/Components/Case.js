import React from "react";
import { useState } from "react";

import './Case.css'

export default function Case ({id}) {
    return(
        <div className="card">
            {id}
        </div>
    )
}