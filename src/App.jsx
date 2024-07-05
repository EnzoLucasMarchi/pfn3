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

  const windDirection = (degrees) => {
    if (degrees === 0 || degrees === 360) return 'N';
    if (degrees > 0 && degrees < 22.5) return 'N';
    if (degrees === 22.5 || (degrees > 22.5 && degrees < 45)) return 'NNE';
    if (degrees === 45 || (degrees > 45 && degrees < 67.5)) return 'NE';
    if (degrees === 67.5 || (degrees > 67.5 && degrees < 90)) return 'ENE';
    if (degrees === 90 || (degrees > 90 && degrees < 112.5)) return 'E';
    if (degrees === 112.5 || (degrees > 112.5 && degrees < 135)) return 'ESE';
    if (degrees === 135 || (degrees > 135 && degrees < 157.5)) return 'SE';
    if (degrees === 157.5 || (degrees > 157.5 && degrees < 180)) return 'SSE';
    if (degrees === 180 || (degrees > 180 && degrees < 202.5)) return 'S';
    if (degrees === 202.5 || (degrees > 202.5 && degrees < 225)) return 'SSW';
    if (degrees === 225 || (degrees > 225 && degrees < 247.5)) return 'SW';
    if (degrees === 247.5 || (degrees > 247.5 && degrees < 270)) return 'WSW';
    if (degrees === 270 || (degrees > 270 && degrees < 292.5)) return 'W';
    if (degrees === 292.5 || (degrees > 292.5 && degrees < 315)) return 'WNW';
    if (degrees === 315 || (degrees > 315 && degrees < 337.5)) return 'NW';
    if (degrees === 337.5 || (degrees > 337.5 && degrees < 360)) return 'NNW';
    return 'Invalid degrees';
  };

  //--------------------------------------------------------------------------funcion de GeoLocalizacion
  function ok(position) {
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
    const lat = parseFloat(position.coords.latitude).toFixed(2)
    const lon = parseFloat(position.coords.longitude).toFixed(2)
    getData(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`, setDataC)
    getData(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`, setDataF)
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
  // ---------- pb-10 pt-6 pl-3 pr-3 del contaienr del today
  return (
    <div className="w-[100vw] h-[100vh] sm:flex block font-raleway text-wordwhite">
      <div className=" w-full sm:w-[25%] bg-softblue sm:py-8 sm:px-4">
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
      <div className="sm:w-[75%] sm:h-full bg-darkestblue sm:flex sm:justify-between sm:items-center sm:flex-col sm:gap-4 sm:px-4">
        {dataC && dataF && (<Principal
          dataC={dataC}
          dataF={dataF}
          measure={measure}
          setMeasure={setMeasure}
          tcfn={tempConvert}
          df={dateFormat}
          wdfn={windDirection}
        />)}
        <div className="absolute text-xs mt-[98vh]">
          <p>Esto lo hizo Enzo xd</p>
        </div>
      </div>
    </div>
  );
}

export default App;