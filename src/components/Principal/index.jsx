import { DayList } from "./DayList"
import { Header } from "./Header"
import { Highlights } from "./Highlights"



export const Principal = ({ dataC, dataF, measure, setMeasure, tcfn, df, wdfn}) => {

  return (
    <>
      <div className="w-full h-full flex flex-col justify-between items-center px-20 py-6">
      <Header setMeasure={setMeasure} measure={measure} />
        <DayList dataF={dataF} tcfn={tcfn} df={df}/>
        <Highlights dataC={dataC} wdfn={wdfn}/>
      </div>
    </>
  )
}