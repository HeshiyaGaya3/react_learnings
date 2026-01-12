import React, { useState } from "react";

export default function Task9 () {
    const [count, setCount] = useState();
    const [step, setStep] = useState();

    const increment = ()=>{
        setCount(count + step)
    }

    const decrement = ()=> {
        setCount(Math.max(0, count-step))
    }

    const reset = ()=> {
        setCount(0)
        setStep(0)
    }

    return(
        <>
        <input type="number" value={count} placeholder="count" onChange={ (event) => { setCount(Number(event.target.value))}} />

        <input type="number" value={step} placeholder="step" onChange={ (event) => {setStep(Number(event.target.value))}} />
        <button onClick={increment}> increment </button>
        <button onClick={decrement}> decrement</button>
        <button onClick={reset}> reset</button>
        </>
    )
    
}


