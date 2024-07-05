import { DayList } from "./DayList"
import { Header } from "./Header"
import { Highlights } from "./Highlights"



export const Principal = ({ dataC, dataF, measure, setMeasure, tcfn, df}) => {

  return (
    <>
        <Header setMeasure={setMeasure} measure={measure} />
        <DayList dataF={dataF} tcfn={tcfn} df={df}/>
        <Highlights dataC={dataC} />
    </>
  )
}