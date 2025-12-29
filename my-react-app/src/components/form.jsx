import React from "react";
import { useState } from "react";

export default function Form() {
    const [nameVar, setName] = useState("isajdiadsj");
    const [pass, setPass] = useState(" ");
    const handlechange = () => {
        console.log(event.srcElement.value);
        setName(event.target.value);
    };

    const handlePassChange = () => {
        setPass(event.target.value);
    };

    return (
        <>
        <input type="text" value={nameVar} onChange={handlechange} />
        <input type="password" value={pass} onChange={handlePassChange}></input>
        <h1>{nameVar}</h1>
        <button
            onClick={() => {
            alert(nameVar);
            }}
        >
            {" "}
            submit{" "}
        </button>
        </>
    );
}
