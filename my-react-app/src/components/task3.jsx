import React, { useState } from "react";

export default function Task3() {
    const [num, setNum] = useState("");
    const [fact, setFact] = useState([]);
    const handlechange = () =>{
        setNum(event.target.value)
    } 

    const fetchAPI = async() => {
        const api = await fetch (`https://meowfacts.herokuapp.com/?count=${num}`)
        const data = api.json();
        setFact(data.data);
    };

    return(
        <div>
            <input type = "Number" value = {num} onChange= { handlechange}/>
            <button onClick={fetchAPI}>OK</button>
            <ul> 
                {fact.map((fact,index) => (
                    <li key = {index}>{fact}</li>
                ))}
            </ul>
        </div>
    )
}