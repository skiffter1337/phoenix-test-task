import React, {useState} from 'react';
import {Modal} from "../modal";
import {Button} from "../../button/button";
import {Content} from "../content";
import s from './editTimetable.module.scss'

export const EditTimetable = () => {

    const [isOpen, setIsOpen] = useState(false)
    const onOpenChange = () => setIsOpen(true)
    const onCloseChange = () => setIsOpen(false)


    return (
        <Modal.Root title={'Редактирование расписания'} isSeparator={true} isOpen={isOpen} onOpenChange={onOpenChange}
                    trigger={<Button>Open modal</Button>}>
            <Modal.Body>
                    <Content/>
            </Modal.Body>
            <Modal.Footer>
                <Button className={s.close_button} onClick={onCloseChange}>
                    Отмена
                </Button>
                <Button className={s.add_timetable_button}>
                    Добавить расписание
                </Button>
            </Modal.Footer>
        </Modal.Root>
    );
};

