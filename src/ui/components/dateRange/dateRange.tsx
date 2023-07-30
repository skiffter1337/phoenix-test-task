import React, {ChangeEvent, FC, useEffect} from 'react';

import s from './dateRange.module.scss'
import {Input} from "../input";
import {getEndCourseDate} from "../../../utils/getEndCourseDate";

type DateRangePropsType = {
    setStartCourseDate: (newStartDate: string) => void
    setEndCourseDate: (newEndCourseDate: string) => void
    startCourseDate: string
    endCourseDate: string
    hoursInCourse: number
    workDays: string[]
    hoursPerDay: number
}
export const DateRange: FC<DateRangePropsType> = ({
                                                      setStartCourseDate,
                                                      setEndCourseDate,
                                                      startCourseDate,
                                                      endCourseDate,
                                                      workDays,
                                                      hoursInCourse,
                                                      hoursPerDay,
                                                  }) => {

    const changeStartCourseDate = (event: ChangeEvent<HTMLInputElement>) => setStartCourseDate(event.currentTarget.value)

    useEffect(() => {
        setEndCourseDate(getEndCourseDate(startCourseDate, hoursInCourse, hoursPerDay, workDays))
    }, [startCourseDate, hoursInCourse, hoursPerDay, workDays])


    return (
        <div className={s.date_range}>
            <div>
                <Input type={'date'} value={startCourseDate} onChange={changeStartCourseDate} className={s.start_date}/>
            </div>
            <span className={s.until}>
                до
            </span>
            <div>
                <Input type={'date'} value={endCourseDate} className={s.end_date} readOnly/>
            </div>
        </div>
    );
}


