export const ListItem = ({ title, max, min, icon, tcfn}) => {
    return (
        <>
            <li className="border-8 border-green-500 flex flex-col items-center">
                    <h6>{title}</h6>
                    <figure className="day-icon-container">
                        <img src={`/assets/imgs/${icon}`} alt="icon" />
                    </figure>
                    <div className="border-8 border-red-500 w-full flex justify-between px-4">
                        <p>{tcfn(max)}°C</p>
                        <p>{tcfn(min)}°C</p>
                    </div>
            </li>
        </>
    )
}