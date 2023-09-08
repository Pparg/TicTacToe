import { createContext, useState } from "react";

export const Context = createContext()

export function ContextProvider ({children}) {
    const [data , setData] = useState({
        damier : Array(9).fill(null)
    })
    return(
        <Context.Provider value={{data, setData}}>
            {children}
        </Context.Provider>
    )
}