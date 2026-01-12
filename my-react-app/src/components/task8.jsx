import React, {useState} from "react";

export default function Task8 () {

    const[ char, setChar] = useState("");
    const limit = char.length > 5;

     return(
        <>
        { limit && alert("limit exceed") }
        <input type = "text" value={char} onChange = { (event) => {setChar(event.target.value)}} />  
        </>
        
     )

}       
