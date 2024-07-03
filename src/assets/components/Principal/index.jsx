import { DayList } from "./DayList"
import { Header } from "./Header"
import { Highlights } from "./Highlights"



export const Principal = ({ dataC, dataF, setMeasure, tcfn }) => {

  return (
    <>
        <Header setMeasure={setMeasure} />
        <DayList dataF={dataF} tcfn={tcfn} />
        <Highlights dataC={dataC} />
    </>
  )
}