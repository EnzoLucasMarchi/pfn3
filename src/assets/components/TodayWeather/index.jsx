import { Modal } from "../Modal";

export const TodayWeather = ({data, mod, setMod, cityFilter, ok, err, ops, tcfn}) => {

  const icon = data?.weather?.[0]?.icon || '';
  const desc = data?.weather?.[0]?.main || '';
  const temp = data?.main?.temp;
  const date = data?.dt ? new Date(data.dt * 1000).toLocaleDateString() : '';
  const name = data?.name;

  return (
    <>
      {mod === true &&
        <Modal setMod={setMod} cityFilter={cityFilter}/>
      }
      <aside className="today-weather">
        <div className="today-container">

          <div className="aside-header">
            <button className="btn-places" onClick={() => setMod(true)}>Search for Places</button>
            <button className="btn-location" onClick={() => navigator.geolocation.watchPosition(ok, err, ops)}> Location</button>
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