import React, {ComponentPropsWithoutRef, FC, ReactNode} from 'react';
import s from './button.module.scss'

type ButtonPropsType = {
    className?: string
    children: ReactNode
    onClick?: () => void
    disabled?: boolean
} & ComponentPropsWithoutRef<'button'>

export const Button: FC<ButtonPropsType> = ({children, className, onClick, disabled}) => {
    return (
        <button className={`${s.button} ${className}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};
