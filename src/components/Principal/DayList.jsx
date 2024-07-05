import { ListItem } from "./ListItem";

export const DayList = ({ dataF, tcfn, df}) => {
    const list = [0, 8, 16, 24, 32];

    return (
        <>
                <ul className="bg-softblue w-full flex justify-center gap-10 px-40">
                    {
                        dataF?.list && list.map(item => (
                            dataF.list[item] && (
                                <ListItem
                                    id={dataF.list[item]?.dt_txt || item}
                                    title={df(dataF.list[item]?.dt * 1000)}
                                    max={dataF.list[item]?.main?.temp_max}
                                    min={dataF.list[item]?.main?.temp_min}
                                    icon={dataF.list[item]?.weather[0]?.icon}
                                    tcfn={tcfn}
                                />
                            )
                        ))
                    }
                </ul>
        </>
    );
};