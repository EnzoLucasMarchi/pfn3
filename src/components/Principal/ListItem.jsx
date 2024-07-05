export const ListItem = ({ title, max, min, icon, tcfn}) => {
    return (
        <>
            <li className="w-full h-full flex flex-col items-center justify-between text-sm">
                    <h6>{title}</h6>
                    <figure className="w-[60%] h-auto flex justify-center">
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