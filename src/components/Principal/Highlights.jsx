import { HighlightItem } from "./HighLightItem";

export const Highlights = ({ dataC, wdfn }) => {
    const speed = dataC?.wind?.speed || '';
    const deg = dataC?.wind?.deg || '';
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
                            <div className="flex gap-2">
                                <figure className="h-4 w-4">
                                    <svg className="w-full h-full text-wordwhite" style={{ transform: `rotate(${deg}deg)` }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM135.1 217.4l107.1-99.9c3.8-3.5 8.7-5.5 13.8-5.5s10.1 2 13.8 5.5l107.1 99.9c4.5 4.2 7.1 10.1 7.1 16.3c0 12.3-10 22.3-22.3 22.3H304v96c0 17.7-14.3 32-32 32H240c-17.7 0-32-14.3-32-32V256H150.3C138 256 128 246 128 233.7c0-6.2 2.6-12.1 7.1-16.3z" /></svg>
                                </figure>
                                <p className="text-xs">{wdfn(deg)}</p>
                            </div>
                        }
                    />
                    <HighlightItem
                        title="Humidity"
                        datavalue={hum}
                        metric="%"
                        children={
                            <div className="w-full flex items-center gap-1">
                                <p className="text-xs">0</p>
                                <div className="relative bg-wordwhite w-full h-1 flex items-center rounded-lg">
                                    <input
                                        className="appearance-none w-full h-1 bg-transparent"
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={hum}
                                    />
                                    <div className="absolute h-1 bg-yellow-400 rounded"
                                        style={{ width: `${hum}%` }}>

                                    </div>
                                </div>
                                <p className="text-xs">100</p>
                            </div>

                        }
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