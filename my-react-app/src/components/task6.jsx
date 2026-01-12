import React, {useState} from "react";

export default function Task6 ()
{
    const [ flag, setFlag] = useState(false);

    return(
        <>
            { flag && <>hellos</>}

            <button onClick= { () => {
                flag ? setFlag(false) : setFlag(true)
            }}> { flag ? "Hide" : "Show"}</button>

        </>
        
    )

}

