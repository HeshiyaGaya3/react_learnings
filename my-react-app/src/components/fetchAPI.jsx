import React, { useState } from "react";
import { useEffect } from "react";

export default function FetchAPI({limit}) {
  const [data, setData] = useState(null);
  const [urldata,setUrldata] = useState({
    "name":"randy",
    "age":24,
    "country":"india"
  })
  const newdata = {...urldata,"pin":52,"name":"pandy"}
  console.log(newdata,urldata)
  useEffect(() => {
    // Code to run after render (the effect)
    const api = async () => {
      const url = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=${limit}`
      );
      const data = await url.json();
      console.log(data);
      const filteredData = data.filter(item => {
        return (
          item.width <= 500
        )
      } 
      )
    console.log(filteredData, data)
      setData(filteredData)
    };
    api();

  }, []); 

  return (
    <div>
        {data && data.map(
            item => {
                return <img src = {item.url} key={item.id} width={item.width} height={item.height}/>
            }

        ) }
    </div>
  )
}
