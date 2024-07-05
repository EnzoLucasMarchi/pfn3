export const HighlightItem = ({children, title, datavalue, metric}) => {
    return(
        <div className="bg-softblue w-120 h-60 flex flex-col gap-10 items-center py-8">
        <p className="text-sm">{title}</p>
        <p className="text-6xl text-bold">{datavalue}<span className="text-2xl text-normal">{metric}</span></p>
        {children && <div>
            {children}
        </div>}
        </div>
    )
}