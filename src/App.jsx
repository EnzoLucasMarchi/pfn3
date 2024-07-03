import React, { useState, useEffect } from "react";
import { TodayWeather } from "./assets/components/TodayWeather";
import { Principal } from "./assets/components/Principal";

// current = https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// cityC = https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// locationC = 
// forecast = https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// cityF = https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
// locationF = 
const key = '3d04268c3e1b494021dcfd045c458f0a'

const url1 = '/apic.json';
const url2 = '/apid.json';

function App() {
  //----------------------------------------------------------------------------------useStates de la app
  const [dataC, setDataC] = useState({});
  const [dataF, setDataF] = useState({});

  const [location, setLocation] = useState({});
  const [city, setCity] = useState('');

  const [measure, setMeasure] = useState(true);
  const [mod, setMod] = useState(false);

  //--------------------------------------------------------------------------------------------Funciones
  const cityFilter = (city) => {
    getData(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`, setDataC)
    getData(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`, setDataF)
  }

  const getData = async (url, fn) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Errorardo: ${res.statusText}`);
      }
      const rs = await res.json();
      fn(rs);
    } catch (err) {
      console.error('Errorovich:', err);
    }
  };

  const tempConvert = (t) => {
    if (measure) {
      t = parseFloat(t - 273.15).toFixed(0)
    } else {
      t = parseFloat(((t - 273.15) * (9 / 5) + 32)).toFixed(2)
    }

    return t;
  }

  //--------------------------------------------------------------------------funcion de GeoLocalizacion
  function ok(position) {
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
  }

  function err() {
    alert("Ups")
  }

  const ops = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000
  }

  //const watchID = navigator.geolocation.watchPosition(ok, err, ops);

  //-------------------------------------------------------------------------------------------useEffects

  useEffect(() => {
    cityFilter('Helsinki')
  }, []);


  //------------------------------------------------------------------------------------------------

  return (


      <div className="border-8 border-green-500 flex text-white font-raleway h-screen">

          <div  className="border-8 border-blue-500 w-[30vw] max-w-sm bg-blue-950">
            {dataC && (<TodayWeather data={dataC} mod={mod} setMod={setMod} cityFilter={cityFilter} ok={ok} err={err} ops={ops} tcfn={tempConvert} setCity={setCity} city={city} />)}
          </div>
          <div  className="border-8 border-red-500 w-[70vw] h-full bg-blue-950 
          flex flex-col items-center gap-4">
              {dataC && dataF && (<Principal dataC={dataC} dataF={dataF} setMeasure={setMeasure} tcfn={tempConvert} />)}
              <div className="absolute text-xs mt-[90vh]">
        <p>Esto lo hizo Enzo xd</p>
      </div>
          </div>  
      </div>

  );
}

export default App;