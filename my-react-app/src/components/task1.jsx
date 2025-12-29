import React from "react";
import { useState } from "react";

export default function Task1() {
    const handleAdd = () => {
        SetItem([...items, name])
        setName("")
    }

    const [name, setName]  = useState("") ;
    const[items, SetItem] = useState([])


    return(
        <div>
            <input type = "text" value={name} onChange={ () => {
                setName(event.target.value)  
            }}/>  
            <button onClick={handleAdd} > Add </button>
            <ul>
            {
                items.map(IM => {
                    return (
                        
                        <li> { IM }</li>
                    )
                }) 
            }
            </ul>
    
        </div>
        
    )
}