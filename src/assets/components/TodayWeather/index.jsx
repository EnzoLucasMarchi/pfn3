import { Modal } from "../Modal";

export const TodayWeather = ({data, mod, setMod}) => {
  return (
    <>
      {mod === true &&
        <Modal setMod={setMod}/>
      }
      <aside className="today-weather">
        <div className="today-container">

          <div className="aside-header">
            <button className="btn-places" onClick={() => setMod(true)}>Search for Places</button>
            <button className="btn-location"> Location</button>
          </div>

          <figure className="today-icon-container">
            <img src="" alt="icon" />
          </figure>
          <p>0°C</p>
          <p>Weather</p>
          <p>date</p>
          <p>city</p>
        </div>
      </aside>

    </>
  )
}