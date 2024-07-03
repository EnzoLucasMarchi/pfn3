

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
        <div className="h-full flex flex-col items-center gap-2 px-3">
            <div className="w-full flex justify-end">
                <button className="text-xs" onClick={()=>setMod(false)}>x</button>
            </div>
            <div className="w-full flex justify-between">
                <input  className="bg-transparent border-[1px] border-white p-2" placeholder="Search Location" onChange={(e) => setCity(e.target.value)}></input>
                <button className="bg-blue-500 p-2" onClick={handleSubmit}> Search</button>
            </div>
            <ul className="w-full flex flex-col gap-3">
                <li className="" onClick={() => handleMod("Londres")}>Londres</li>
                <li className="" onClick={() => handleMod("Barcelona")}>Barcelona</li>
            </ul>
        </div>

    )
}