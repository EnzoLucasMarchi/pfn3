import { DayList } from "./DayList"
import { Header } from "./Header"
import { Highlights } from "./Highlights"



export const Principal = ({ dataC, dataF, setMeasure, tcfn}) => {

  return (
    <section className="page-container">

      <Header setMeasure={setMeasure} />
      <DayList dataF={dataF} tcfn={tcfn}/>
      <Highlights dataC={dataC}/>

      <div className="page-footer">
        <p>Esto lo hizo Enzo xd</p>
      </div>
    </section>
  )
}