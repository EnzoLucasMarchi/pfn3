import { ListItem } from "./ListItem";

export const DayList = ({ dataF, tcfn}) => {
    const list = [0, 8, 16, 24, 32];

    return (
        <>
            <div className="page-body">
                <ul className="days-list">
                    {
                        dataF?.list && list.map(item => (
                            dataF.list[item] && (
                                <ListItem
                                    key={item}
                                    title={dataF.list[item]?.dt_txt}
                                    max={dataF.list[item]?.main?.temp_max}
                                    min={dataF.list[item]?.main?.temp_min}
                                    icon={dataF.list[item]?.weather[0]?.icon}
                                    tcfn={tcfn}
                                />
                            )
                        ))
                    }
                </ul>
            </div>
        </>
    );
};