export const ListItem = ({ title, max, min, icon, tcfn}) => {
    return (
        <>
            <li className="w-48 h-60 flex flex-col items-center justify-between">
                    <h6>{title}</h6>
                    <figure className="day-icon-container w-[60%] h-auto flex justify-center">
                        <img className="w-auto h-auto" src={`/imgs/${icon}.png`} alt="icon" />
                    </figure>
                    <div className="w-full flex justify-between px-8">
                        <p>{tcfn(max)}°C</p>
                        <p className="text-wordgray">{tcfn(min)}°C</p>
                    </div>
            </li>
        </>
    )
}