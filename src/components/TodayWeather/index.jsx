import { Modal } from "../Modal";
import { Today } from "./Today";
export const TodayWeather = ({ data, mod, setMod, cityFilter, ok, err, ops, tcfn, setCity, city, df }) => {
    return (
        <>
            <aside className="w-full h-full">
                {mod === true ? (
                    <Modal
                        setMod={setMod}
                        cityFilter={cityFilter}
                        setCity={setCity}
                        city={city}
                    />
                ) : (
                    <Today
                        setMod={setMod}
                        data={data}
                        ok={ok}
                        err={err}
                        ops={ops}
                        tcfn={tcfn}
                        df={df}
                    />
                )}
            </aside>
        </>
    )
}