import React, {FC} from 'react';
import s from './tabs.module.scss';
import { Button } from '../button/button';
import {MON_WED_FRI, TUE_THU} from '../../../common/constans/daysOfWeek';
import {workDaysTabs} from "../../../common/constans/workDaysTabs";

export type Tab = {
    label: string;
    value: string;
}

type TabsPropsType = {
    setWorkDays: (days: string[]) => void
    workDays: string[]
}

export const Tabs: FC<TabsPropsType> = ({setWorkDays, workDays}) => {

    const handleTabClick = (day: Tab) => {
        if (workDays.includes(day.value)) {
            setWorkDays(workDays.filter((d) => d !== day.value));
        } else {
            setWorkDays([...workDays, day.value]);
        }
    };

    const setMonWedFri = () => setWorkDays(MON_WED_FRI);
    const setTueThu = () => setWorkDays(TUE_THU);

    return (
        <div className={s.tabs}>
            <div className={s.buttons}>
                <Button className={s.tab} onClick={setMonWedFri}>{'ПН/СР/ПТ'}</Button>
                <Button className={s.tab} onClick={setTueThu}>{'ВТ/ЧТ'}</Button>
                {workDaysTabs.map((tab) => (
                    <Button
                        key={tab.label}
                        className={`${s.tab} ${workDays.includes(tab.value) ? s.active : ''}`}
                        onClick={() => handleTabClick(tab)}
                    >
                        {tab.label}
                    </Button>
                ))}
            </div>
        </div>
    );
};
