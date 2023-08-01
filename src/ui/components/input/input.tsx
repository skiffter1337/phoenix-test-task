import React, {ChangeEvent, ComponentPropsWithoutRef, FC} from 'react';
import  s from './input.module.scss'

export type InputPropsType = {
    id?: string
    type?: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    value?: string | 0
    defaultValue?: string
    placeholder?: string
    disabled?: boolean
    className?: string
} & ComponentPropsWithoutRef<'input'>
export const Input: FC<InputPropsType> = ({type = 'text', onClick, onChange, value, defaultValue,placeholder, className, disabled, id, ...rest }) => {
    return  <input
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        className={`${s.input} ${className} ${type === 'text' ? s.text : ''}`}
        placeholder={placeholder}
        disabled={disabled}
       defaultValue={defaultValue}
        {...rest}
    />
};

