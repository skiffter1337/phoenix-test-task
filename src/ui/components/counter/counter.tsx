import React, {FC} from 'react';
import s from './counter.module.scss'
import {Button} from "../button/button";

type CounterPropsType = {
    title: string
    value: number
    minValue?: number
    maxValue?: number
    changeValue: (value: number) => void
}


export const Counter: FC<CounterPropsType> = ({title, value, minValue, maxValue, changeValue}) => {

    const increaseValue = () => changeValue(value + 1)
    const decreaseValue = () => changeValue(value - 1)

    return (
        <div className={s.counter}>
            <Button onClick={decreaseValue} className={`${s.counter_button} ${s.left}`} disabled={value <= minValue!}>
                -
            </Button>
            <div className={s.content}>
                <div className={s.value_display}>
                    {value}
                </div>
                <div className={s.title}>
                    {title}
                </div>
            </div>
            <Button onClick={increaseValue} className={`${s.counter_button} ${s.right}`} disabled={value >= maxValue!}>
                +
            </Button>
        </div>
    );
};

