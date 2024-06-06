

export const Modal = ({setMod, cityFilter}) => {
    const close = (city)=>{
        setMod(false)
        cityFilter(city)
      }
    return (
        <div className="modal">
            <div className="modal-header">
                <input placeholder="Search Location"></input>
                <button className="btn-search"> Search</button>
                <button className="btn-close" onClick={()=>setMod(false)}>X</button>
            </div>
            <ul className="modal-body">
                <li onClick={() => close("Londres")}>Londres</li>
                <li onClick={() => close("Barcelona")}>Barcelona</li>
            </ul>
        </div>

    )
}