import React, {ChangeEvent, FC} from 'react';
import {Input} from "../input";
import s from './colorPicker.module.scss'

type ColorPickerPropsType = {
    changeColor: (event: ChangeEvent<HTMLInputElement>) => void
    isLabel: boolean
    label: string
}
export const ColorPicker: FC<ColorPickerPropsType> = ({changeColor, isLabel, label}) => {
    return (
        <div className={s.color_picker_block}>
            {isLabel &&
                <label htmlFor={'color_picker'} className={s.color_picker_label}>
                    <span>{label}</span>
                </label>
            }
            <Input id='color_picker' type={'color'} onChange={changeColor} className={s.color_picker} defaultValue={'#eeeeee'}/>
        </div>
    );
};

