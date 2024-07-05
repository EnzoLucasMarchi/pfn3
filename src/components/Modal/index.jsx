

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
        <div className="h-full flex flex-col items-center gap-2 px-12">
            <div className="w-full flex justify-end h-12">
                <button className="text-lg" onClick={()=>setMod(false)}>x</button>
            </div>
            <div className="w-full flex gap-6">
                <input  className="bg-transparent border-[1px] p-2 px-4 w-[90%]" placeholder="Search Location" 
                onChange={(e) => setCity(e.target.value)}></input>
                <button className="bg-blu p-2" onClick={handleSubmit}> Search</button>
            </div>
            <ul className="w-full flex flex-col gap-8 mt-8">
                <li className="hover:border-[1px] hover:border-wordgray h-12 w-full flex items-center pl-4" 
                onClick={() => handleMod("Londres")}>Londres</li>
                <li className="hover:border-[1px] hover:border-wordgray h-12 w-full flex items-center pl-4" 
                onClick={() => handleMod("Barcelona")}>Barcelona</li>
            </ul>
        </div>

    )
}