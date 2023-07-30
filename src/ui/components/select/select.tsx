import React, {ChangeEvent, FC} from 'react';
import s from './select.module.scss';

export type OptionsType = {
    id: string
    value: string | null
    title: string
    disabled: boolean
};

type SelectPropsType = {
    placeholder?: string
    options: OptionsType[]
    className?: string
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void
    defaultValue?: string | null
};

export const Select: FC<SelectPropsType> = ({
                                                placeholder,
                                                options,
                                                className,
                                                onChange,
                                                defaultValue,
                                            }) => {

    return (
        <div className={s.container}>
            <select
                className={`${s.select} ${className}`}
                placeholder={placeholder}
                onChange={onChange}
                defaultValue={defaultValue!}
            >
                {options.map((option, index) => (
                    <option value={option.value!} key={index} disabled={option.disabled} className={s.option}>
                        {option.title}
                    </option>
                ))}
            </select>
            <span className={s.line}></span>
        </div>
    );
};
