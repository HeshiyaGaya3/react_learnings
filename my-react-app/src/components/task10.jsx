import React, { useState } from "react";

export default function Task10()
{
    const [form, setForm] = useState({Name : "",
                                    age : 0,
                                    email : "" })
    
    return(
        <>
        <input type="text" value={form.Name} onChange={ (event) => {setForm(prevSet => { return{...prevSet, Name:event.target.value}})}}/>
        <input type="number" value={form.age} onChange={ (event) => {setForm(prevSet => { return{...prevSet, age:Number(event.target.value)}})}}/>
        <input type="text" value={form.email} onChange={ (event) => {setForm(prevSet => { return{...prevSet, email:(event.target.value)}})}}/>
        {form.Name}
        {form.age}
        {form.email}
        </>
    )
}
