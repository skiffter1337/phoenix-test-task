import React, {FC} from 'react';
import s from './workTime.module.scss'
import {Input} from "../input";

type WorkTimePropsType = {
    start: string
    end: string
}
export const WorkTime: FC<WorkTimePropsType> = ({start, end}) => {
    return (
        <div className={s.work_time}>
                <Input type={'time'} value={start} className={s.start_time} disabled={true}/>
            <span className={s.until}>
                до
            </span>
                <Input type={'time'} value={end}  className={s.end_time} disabled={true}/>
        </div>
    );
};

