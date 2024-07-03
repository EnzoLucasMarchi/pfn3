export const Today = ({ setMod, data, ok, err, ops, tcfn, }) => {


    const icon = data?.weather?.[0]?.icon || '';
    const desc = data?.weather?.[0]?.main || '';
    const temp = data?.main?.temp;
    const date = data?.dt ? new Date(data.dt * 1000).toLocaleDateString() : '';
    const name = data?.name;

    return (
        <div className="h-full flex flex-col items-center gap-2 px-3">

            <div className="w-full flex justify-between">
                <button className=" bg-gray-600 w-40 rounded-lg" onClick={() => setMod(true)}>Search for Places</button>
                <button className=" bg-gray-600 w-6 h-6 rounded-lg" onClick={() => navigator.geolocation.watchPosition(ok, err, ops)}>*</button>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-between py-4">
                <figure className="">
                    <img className="" src={`/${icon}.png`} alt="icon" />
                </figure>
                <p className="text-6xl">{tcfn(temp)}°C</p>
                <p className="text-2xl">{desc}</p>
                <p className="">{date}</p>
                <p className="">{name}</p>
            </div>
        </div>

    )
}