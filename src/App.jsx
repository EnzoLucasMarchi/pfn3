import React, { useState, useEffect } from "react";
import { TodayWeather } from "./components/TodayWeather";
import { Principal } from "./components/Principal";

const key = '3d04268c3e1b494021dcfd045c458f0a'

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
      t = parseFloat(((t - 273.15) * (9 / 5) + 32)).toFixed(0)
    }

    return t;
  }

  const dateFormat = (date) => {
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    const day = new Date(date);
    return day.toLocaleDateString("en-gb", options);
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
    <div className="flex font-raleway h-screen text-wordwhite">
      <div className="w-[40vw] bg-softblue pb-10 pt-6 pl-3 pr-3">
        {dataC && (<TodayWeather
          data={dataC}
          mod={mod}
          setMod={setMod}
          cityFilter={cityFilter}
          ok={ok}
          err={err}
          ops={ops}
          tcfn={tempConvert}
          setCity={setCity}
          city={city}
          df={dateFormat} />)}
      </div>
      <div className="w-full h-full bg-darkestblue flex justify-between items-center flex-col gap-4 py-8">
        {dataC && dataF && (<Principal
          dataC={dataC}
          dataF={dataF}
          measure={measure}
          setMeasure={setMeasure}
          tcfn={tempConvert}
          df={dateFormat}
        />)}
        <div className="absolute text-xs mt-[90vh]">
          <p>Esto lo hizo Enzo xd</p>
        </div>
      </div>
    </div>
  );
}

export default App;