export const Header = ({ setMeasure }) => {
    return (
        <>
            <div className="border-8 border-green-500 w-full flex gap-4 justify-end">
                <button className="border-2 border-white bg-gray-600 w-8 h-8 rounded-full" onClick={() => setMeasure(true)}>°C</button>
                <button className="border-2 border-white bg-gray-600 w-8 h-8 rounded-full" onClick={() => setMeasure(false)}>°F</button>
            </div>
        </>
    )
}