

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
        <div className="w-full h-[100vh] sm:h-full flex flex-col items-center gap-2">
            <div className="w-full flex justify-end h-auto px-8 sm.px-0">
                <button className="text-base" onClick={()=>setMod(false)}>x</button>
            </div>
            <div className="w-full flex gap-2 text-xs px-8 sm:px-0">
                <input  className="bg-transparent border-[1px] w-[75%] p-1" placeholder="Search Location" 
                onChange={(e) => setCity(e.target.value)}></input>
                <button className="bg-blu sp-1 w-[25%]" onClick={handleSubmit}> Search</button>
            </div>
            <ul className="w-full flex flex-col gap-6 text-xs pt-4 px-8 sm:px-0">
                <li className="hover:border-[1px] hover:border-wordgray w-full h-8 flex items-center pl-1" 
                onClick={() => handleMod("Londres")}>Londres</li>
                <li className="hover:border-[1px] hover:border-wordgray w-full h-8 flex items-center pl-1" 
                onClick={() => handleMod("Barcelona")}>Barcelona</li>
            </ul>
        </div>

    )
}