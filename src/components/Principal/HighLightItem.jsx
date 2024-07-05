export const HighlightItem = ({children, title, datavalue, metric}) => {
    return(
        <div className="bg-softbluew-60 h-40 sm:w-full sm:h-28 flex flex-col gap-1 justify-center items-center">
        <p className="text-xs">{title}</p>
        <p className="text-4xl text-bold">{datavalue}<span className="text-xs">{metric}</span></p>
        {children && <div>
            {children}
        </div>}
        </div>
    )
}