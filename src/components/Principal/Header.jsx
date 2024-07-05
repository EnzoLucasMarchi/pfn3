export const Header = ({ measure, setMeasure }) => {
    return (
        <>
            <div className="w-full flex gap-4 justify-end px-40">
                <button className={`w-8 h-8 rounded-full ${measure ? 'bg-wordwhite text-black' : 'bg-bggrades'}`} onClick={() => setMeasure(true)}>°C</button>
                <button className={`w-8 h-8 rounded-full ${!measure ? 'bg-wordwhite text-black' : 'bg-bggrades'} `} onClick={() => setMeasure(false)}>°F</button>
            </div>
        </>
    )
}