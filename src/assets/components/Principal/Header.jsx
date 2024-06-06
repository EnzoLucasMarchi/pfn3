export const Header = ({ setMeasure }) => {
    return (
        <>
            <div className="header">
                <button onClick={() => setMeasure(true)}>C</button>
                <button onClick={() => setMeasure(false)}>F</button>
            </div>
        </>
    )
}