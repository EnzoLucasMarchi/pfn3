import React from "react"
import { useEffect } from "react"
import { useState } from "react"



// const apiKey = ''
// const urlCurrentDay = https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//const urlWeek = api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

function App() {
  const [data, setData] = useState({})
  const [filter, setFilter] = useState({})

  const getData = async () => {
    const rs = await ((await fetch('/apic.json')).json())
    console.log(rs)
    console.log(rs.main.temp)
    setData(rs)
    setFilter(rs)
  }

  useEffect(()=>{
    
    getData()
  }, []);

  return (
    <>
        <p>{data.main.temp}</p>
    </>
  )
}

export default App
