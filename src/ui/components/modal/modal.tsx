import {FC, ReactNode} from 'react'


import * as Dialog from '@radix-ui/react-dialog'


import s from './modal.module.scss'
import {CloseModal} from "../../../images/svg/icons/closeModal/closeModal";

type ModalPropsType = {
    title?: string
    trigger?: ReactNode
    isOpen?: boolean
    onOpenChange?: (isOpen: boolean) => void
    children?: ReactNode
    isSeparator?: boolean
}
const Root: FC<ModalPropsType> = ({
                                                 title,
                                                 trigger,
                                                 children,
                                                 isOpen,
                                                 onOpenChange,
                                                 isSeparator = true,
                                             }) => {

    return (
        <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
            <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className={s.overlay}/>
                <Dialog.Content className={s.content}>
                    {title && <ModalTitle title={title} isSeparator={isSeparator}/>}
                    {children}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

type ModalTitlePropsType = {
    title: string
    isSeparator?: boolean
}


const ModalTitle: FC<ModalTitlePropsType> = ({title, isSeparator}) => {
    return (
        <Dialog.Title className={`${s.title_block} ${isSeparator && s.separator}`}>
            <p className={s.title}>{title}</p>
            <Dialog.Close className={s.close_button}>
                <div className={s.wrapper}>
                    <CloseModal/>
                </div>
            </Dialog.Close>
        </Dialog.Title>
    )
}

type ModalElementsPropsType = {
    className?: string
    children: ReactNode
}
const Body: FC<ModalElementsPropsType> = ({children, className}) => {
    const classNames = `${className} ${s.body}`

    return <div className={classNames}>{children}</div>
}

const Footer: FC<ModalElementsPropsType> = ({children, className}) => {
    const classNames = `${className} ${s.footer} ${s.separator}`

    return <div className={classNames}>{children}</div>
}

export const Modal = {Root, Body, Footer}
