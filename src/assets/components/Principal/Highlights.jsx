export const Highlights = ({ dataC}) => {
    const speed = dataC?.wind?.speed || '';
    const hum = dataC?.main?.humidity || '';
    const vis = dataC?.visibility || '';
    const ap = dataC?.main?.pressure || '';
    return (
        <>
            <div className="border-8 border-green-500">
                <div className="today-header border-2 border-white ">
                    <h5>Today's Highlights</h5>
                </div>
                <div className="border-2 border-white grid grid-cols-2 gap-4">
                    <div>
                        <p>Wind Status</p>
                        <p>{speed}mph</p>
                        <figure>
                            <img src="" alt="wind-direction" />
                            Wind
                        </figure>
                    </div>

                    <div className="border-2 border-white ">
                        <p>Humidity</p>
                        <p>%{hum}</p>
                        <p>Range</p>
                    </div>

                    <div className="border-2 border-white ">
                        <p>Visibility</p>
                        <p>{parseFloat(vis / 100).toFixed(1)} milles</p>
                    </div>

                    <div className="border-2 border-white ">
                        <p>Air pressure</p>
                        <p>{ap} mb</p>
                    </div>
                </div>
            </div>
        </>
    )
}