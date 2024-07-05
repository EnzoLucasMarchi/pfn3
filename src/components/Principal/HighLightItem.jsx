export const HighlightItem = ({children, title, datavalue, metric}) => {
    return(
        <div className="bg-softblue w-full h-28 flex flex-col gap-2 items-center py-2">
        <p className="text-xs">{title}</p>
        <p className="text-4xl text-bold">{datavalue}<span className="text-xs">{metric}</span></p>
        {children && <div>
            {children}
        </div>}
        </div>
    )
}