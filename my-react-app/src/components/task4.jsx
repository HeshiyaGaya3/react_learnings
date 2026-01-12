import React, { useState } from "react";

export default function Task4() {
  const [ api, setAPI ] = useState("");
  const [ fetchdata, Setfetchdata] = useState([])
  const apidata = async () => {
    console.log(api)
    const data = await fetch(api);
    const res = data;
    console.log("feddw",res)
    Setfetchdata(res)
  };

  return ( 
    <>
    {fetchdata && fetchdata.toString()}
      <input
        type="text"
        value={api}
        onChange={() => {
          setAPI(event.target.value);
        }}
      />
      <button onClick={apidata}>OK</button>
    </>
  );
}
