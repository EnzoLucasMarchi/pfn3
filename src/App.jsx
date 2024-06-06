import React, { useState, useEffect } from "react";
import { TodayWeather } from "./assets/components/TodayWeather";
import { Principal } from "./assets/components/Principal";

const url1 = '/apic.json';
const url2 = '/apid.json';

function App() {
  const [dataC, setDataC] = useState({});
  const [dataF, setDataF] = useState({});

  const [location, setLocation] = useState({});
  const [city, setCity] = useState('');

  const [measure, setMeasure] = useState(true);
  const [mod, setMod] = useState(false);

  const getData = async (url, fn) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Errorardo: ${response.statusText}`);
      }
      const rs = await res.json();
      fn(rs);
    } catch (err) {
      console.error('Errorardito:', err);
    }
  };

  useEffect(() => {
    getData(url1, setDataC);
    getData(url2, setDataF);
  }, []);

  useEffect(() => {
    console.log('current');
    console.log(dataC);
    console.log('forecast');
    console.log(dataF);
  }, [dataC, dataF]);

  return (
    <>
      <TodayWeather data={dataC} mod={mod} setMod={setMod}/>
      <Principal />
    </>
  );
}

export default App;