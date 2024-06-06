

export const Modal = ({setMod}) => {
    return (
        <div className="modal">
            <div className="modal-header">
                <input placeholder="Search Location"></input>
                <button className="btn-location"> Search</button>
                <button className="btn-close" onClick={()=>setMod(false)}>X</button>
            </div>
            <ul className="modal-body">
                <li>
                    Londres
                </li>
                <li>
                    Barcelona
                </li>
            </ul>
        </div>

    )
}