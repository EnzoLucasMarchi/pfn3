import { Modal } from "../Modal";

export const TodayWeather = ({data, mod, setMod, cityFilter, ok, err, ops, tcfn, setCity, city}) => {

  const icon = data?.weather?.[0]?.icon || '';
  const desc = data?.weather?.[0]?.main || '';
  const temp = data?.main?.temp;
  const date = data?.dt ? new Date(data.dt * 1000).toLocaleDateString() : '';
  const name = data?.name;

  return (
    <>
      {mod === true &&
        <Modal setMod={setMod} cityFilter={cityFilter} setCity={setCity} city={city}/>
      }
      <aside className="w-full h-full mt-2">
        <div className="flex flex-col items-center gap-2">

          <div className="flex gap-48">
            <button className="bg-gray-600 w-40 rounded-lg" onClick={() => setMod(true)}>Search for Places</button>
            <button className="bg-gray-600 w-6 h-6 rounded-lg" onClick={() => navigator.geolocation.watchPosition(ok, err, ops)}>*</button>
          </div>

          <figure className="today-icon-container">
            <img src={`/${icon}.png`} alt="icon" />
          </figure>
          <p>{tcfn(temp)}°C</p>
          <p>{desc}</p>
          <p>{date}</p>
          <p>{name}</p>
        </div>
      </aside>

    </>
  )
}