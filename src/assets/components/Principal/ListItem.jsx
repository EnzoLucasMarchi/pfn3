export const ListItem = ({key, title, max, min, icon, tcfn}) => {
    return (
        <>
            <li key={key} className="days-item">
                <div className="day-card">
                    <h6>{title}</h6>
                    <figure className="day-icon-container">
                        <img src={`/${icon}`} alt="icon" />
                        {console.log(icon)}
                    </figure>
                    <div className="day-tems">
                        <p>{tcfn(max)}</p>
                        <p>{tcfn(min)}</p>
                    </div>
                </div>
            </li>
        </>
    )
}