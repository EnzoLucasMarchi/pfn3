export const Today = ({ setMod, data, ok, err, ops, tcfn, df }) => {
    const icon = data?.weather?.[0]?.icon || '';
    const desc = data?.weather?.[0]?.main || '';
    const temp = data?.main?.temp;
    const date = df(data?.dt * 1000);
    const name = data?.name;

    return (
        <div className="w-full h-full flex flex-col items-center sm:gap-2 px-6 sm:px-2">
            <div className="w-full sm:h-[10%] flex justify-between pt-6 sm:pt-0">
                <button className="bg-bggray w-[20%] sm:w-[50%] sm:h-6 text-xs" 
                onClick={() => setMod(true)}>Search for Places</button>
                <button className="bg-bggray w-6 h-6 rounded-full sm:flex sm:justify-center sm:items-center" 
                onClick={() => navigator.geolocation.watchPosition(ok, err, ops)}>
                <svg className="w-full text-wordwhite" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M480 256c0-16.8-1.8-33.1-5.3-48.8l-47.2-11.8c-4.1-1-8.4 .2-11.3 3.1c-2 2-3.6 4.2-4.9 6.7l-.3 .6c-7.9 15.8-22.1 27.3-38.6 31.9l15.1 15.1c8 8 12.5 18.9 12.5 30.2c0 19.5-13.2 36.5-32 41.4v6.2c0 17.3-5.6 34.2-16 48l-25.6 34.1C317.3 424.9 303.1 432 288 432c-26.5 0-48-21.5-48-48V336H208c-35.3 0-64-28.7-64-64V244c0-17.6 8.3-34.2 22.4-44.8l39.4-29.5c8.4-6.3 18.5-9.7 29-9.7c5.2 0 10.3 .8 15.3 2.5l32 10.7c4.3 1.4 9 1.6 13.4 .5l34.3-8.6c3.7-.9 6.3-4.3 6.3-8.1c0-2.8-1.4-5.4-3.7-6.9L306 132.6c-7.6 7.3-17.7 11.4-28.2 11.4c-6.3 0-12.5-1.5-18.2-4.3l-13.2-6.6c-23.9 36.9-83 14.6-74.9-30.2L175 84.3c.4-2 .2-4.1-.4-6.1l-9-27.1C86.9 85.8 32 164.5 32 256c0 123.7 100.3 224 224 224s224-100.3 224-224zm-16.5-84.6C430.1 89.6 349.8 32 256 32c-20.9 0-41.2 2.9-60.4 8.2l9.3 27.8c2.4 7.1 2.9 14.6 1.6 22l-3.4 18.7c-1.9 10.2 12 15.2 17.1 6.1c7.4-13.4 24.1-18.5 37.8-11.7l16 8c1.2 .6 2.5 .9 3.8 .9c2.3 0 4.5-.9 6.1-2.5l3.5-3.5c8.5-8.5 21.7-9.8 31.7-3.1L350 123.5c11.2 7.5 18 20.1 18 33.5c0 18.5-12.6 34.6-30.5 39.1l-34.3 8.6c-10.3 2.6-21.2 2.2-31.3-1.2l-32-10.7c-1.7-.6-3.4-.8-5.1-.8c-3.5 0-7 1.1-9.8 3.3l-39.4 29.5c-6 4.5-9.6 11.6-9.6 19.2v28c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32v48c0 8.8 7.2 16 16 16c5 0 9.8-2.4 12.8-6.4l25.6-34.1c6.2-8.3 9.6-18.4 9.6-28.8V318.6c0-11.2 7.6-21 18.5-23.7l5.3-1.3c4.8-1.2 8.2-5.5 8.2-10.5c0-2.9-1.1-5.6-3.2-7.6l-40.2-40.2c-4.6-4.6-5.9-11.5-3.5-17.4s8.3-9.9 14.8-9.9h19.7c11.3 0 21.6-6.4 26.7-16.5l.3-.6c2.8-5.6 6.4-10.7 10.9-15.1c10.9-10.9 26.8-15.3 41.7-11.6l28.2 7.1zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
                </button>
            </div>
            <div className=" w-full h-[90%] flex flex-col items-center sm:justify-center sm:py-2 gap-4">
                <figure className="flex flex-col items-center justify-center sm:px-4">
                    <img className="" src={`/imgs/${icon}.png`} alt="icon" />
                </figure>
                <p className="text-6xl sm:w-1/3 flex items-center justify-center">{tcfn(temp)}
                <span className="sm:w-1/3 flex items-center justify-center text-wordgray text-3xl sm:text-xl">°C</span>
                </p>
                <div className="sm:w-full flex flex-col items-center justify-center gap-4">
                <p className="sm:text-lg text-wordgray">{desc}</p>
                <p className="text-wordgray sm:text-xs sm:w-full sm:flex sm:items-center sm:justify-center">Today  -  {date}</p>
                <p className="text-wordgray flex sm:text-xs">
                <svg className="w-3 text-wordwhite" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                     {name}</p>
                </div>
            </div>
        </div>
    )
}