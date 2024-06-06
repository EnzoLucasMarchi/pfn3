

export const Modal = ({setMod, cityFilter, setCity, city}) => {

    const handleSubmit = () => {
        cityFilter(city);
        setMod(false);
      };

    const handleMod = (city)=>{
        setMod(false)
        cityFilter(city)
      }
    return (
        <div className="modal">
            <div className="modal-header">
                <input placeholder="Search Location" onChange={(e) => setCity(e.target.value)}></input>
                <button className="btn-search" onClick={handleSubmit}> Search</button>
                <button className="btn-close" onClick={()=>setMod(false)}>X</button>
            </div>
            <ul className="modal-body">
                <li onClick={() => handleMod("Londres")}>Londres</li>
                <li onClick={() => handleMod("Barcelona")}>Barcelona</li>
            </ul>
        </div>

    )
}