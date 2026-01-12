import React, {useState} from "react";

export default function Task5() {
    const [name, setName] = useState("")

    const handleKeyDown = () => {
        console.log("key", event.key)
        if(event.key == "Enter")
        {
                alert("pressed wrong thing")
    }
}
    return (
        <input type = "text" value = {name} Onchange = { () => {setName}} onKeyDown={handleKeyDown} onFocus={()=>{alert("abcde")}} />
    )
}