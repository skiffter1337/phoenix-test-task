import React, {ChangeEvent, FC, useEffect, useState} from 'react';

import s from './dateRange.module.scss'
import {Input} from "../components/input";
import {getCurrentDate} from "../../utils/getCurrentDate";


export const DateRange = () => {

    const [startDate, setStartDate] = useState(getCurrentDate())

    const changeStartDate = (event: ChangeEvent<HTMLInputElement>) => setStartDate(event.currentTarget.value)


    return (
        <div className={s.date_range}>
            <div>
                <Input type={'date'} value={startDate} onChange={changeStartDate} className={s.start_date}/>
            </div>
            <span className={s.until}>
                до
            </span>
            <div>
                <Input type={'date'} value={startDate} onChange={changeStartDate} className={s.end_date}/>
            </div>
        </div>
    );
}


