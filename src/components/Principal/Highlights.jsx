import { HighlightItem } from "./HighLightItem";

export const Highlights = ({ dataC }) => {
    const speed = dataC?.wind?.speed || '';
    const hum = dataC?.main?.humidity || '';
    const vis = dataC?.visibility || '';
    const ap = dataC?.main?.pressure || '';
    return (
        <>
            <div className="w-full h-80 flex flex-col gap-1">
                <div className="">
                    <h5 className="text-lg font-bold">Today's Highlights</h5>
                </div>
                <div className="grid grid-cols-2 gap-4 ">
                    <HighlightItem
                        title="Wind Status"
                        datavalue={speed}
                        metric="mph"
                        children={
                        <figure>
                            <img src="" alt="wind-direction" />
                            Wind
                        </figure>}
                    />
                   <HighlightItem
                        title="Humidity"
                        datavalue={hum}
                        metric="%"
                        children={'range'}
                    />
                    <HighlightItem
                        title="Visibility"
                        datavalue={parseFloat(vis / 100).toFixed(1)}
                        metric="%"
                        children=''
                    />
                      <HighlightItem
                        title="Air Pressure"
                        datavalue={ap}
                        metric="mp"
                        children=''
                    />
                </div>
            </div>
        </>
    )
}