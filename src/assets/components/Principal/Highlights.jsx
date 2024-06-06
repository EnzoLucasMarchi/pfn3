export const Highlights = ({ dataC}) => {
    const speed = dataC?.wind?.speed || '';
    const hum = dataC?.main?.humidity || '';
    const vis = dataC?.visibility || '';
    const ap = dataC?.main?.pressure || '';
    return (
        <>
            <div className="today-info-container">
                <div className="today-header">
                    <h5>Today's Highlights</h5>
                </div>
                <div className="today-info">
                    <div>
                        <p>Wind Status</p>
                        <p>{speed}mph</p>
                        <figure>
                            <img src="" alt="wind-direction" />
                            Wind
                        </figure>
                    </div>

                    <div>
                        <p>Humidity</p>
                        <p>%{hum}</p>
                        <p>Range</p>
                    </div>

                    <div>
                        <p>Visibility</p>
                        <p>{parseFloat(vis / 100).toFixed(1)} milles</p>
                    </div>

                    <div>
                        <p>Air pressure</p>
                        <p>{ap} mb</p>
                    </div>
                </div>
            </div>
        </>
    )
}