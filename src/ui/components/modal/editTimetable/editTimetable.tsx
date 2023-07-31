import React, {FC, ReactNode, useState} from 'react';
import {Modal} from "../modal";
import {Button} from "../../button/button";
import {Content} from "../content";
import s from './editTimetable.module.scss'
import {timeVariantOptions} from "../../../../common/constans/timeVariantOptions";
import {getCurrentDate} from "../../../../utils/getCurrentDate";
import {MON_WED_FRI, weekdaysOrder} from "../../../../common/constans/daysOfWeek";
import {teacherOptions} from "../../../../common/constans/teacherOptions";
import {breakTimeOptions} from "../../../../common/constans/breakTimeOptions";
import {classRoomsOptions} from "../../../../common/constans/classRooms";

type EditTimetableType = {
    trigger: ReactNode
}
export const EditTimetable: FC<EditTimetableType> = ({trigger}) => {

    const defaultGroupColor = '#eeeeee'
    const defaultWorkHoursPerDay = 1
    const defaultHoursInCourse = 3

    const [isOpen, setIsOpen] = useState(false)
    const [groupColor, setGroupColor] = useState<string>(defaultGroupColor)
    const [workHoursPerDay, setWorkHoursPerDay] = useState<number>(defaultWorkHoursPerDay)

    const [hoursInCourse, setHoursInCourse] = useState<number>(defaultHoursInCourse)


    const [timeVariant, setTimeVariant] = useState<string | null>(timeVariantOptions[0].value)
    const [startCourseDate, setStartCourseDate] = useState(getCurrentDate())
    const [endCourseDate, setEndCourseDate] = useState<string>('')
    const [workDays, setWorkDays] = useState<string[]>(MON_WED_FRI);

    const [startLessonTime, setStartLessonTime] = useState<string>('07:00');
    const [endLessonTime, setEndWorkTime] = useState<string>('');

    const [teacher, setTeacher] = useState<string | null>(teacherOptions[0].value)
    const [breakTimeMinutes, setBreakTimeMinutes] = useState<number>(breakTimeOptions[0].value)
    const [classRoom, setClassRoom] = useState<string | null>(classRoomsOptions[0].value)
    const onCloseChange = () => setIsOpen(false)

    const sendRequest = () => {
        const sortedWorkDays = workDays.sort((a, b) => weekdaysOrder[a] - weekdaysOrder[b])
        const data = {
            groupColor,
            timeVariant,
            hoursInCourse,
            startCourseDate,
            endCourseDate,
            startLessonTime,
            endLessonTime,
            sortedWorkDays,
            breakTimeMinutes,
            workHoursPerDay,
            teacher,
            classRoom
        }
        console.log(data)
        onCloseChange()
    }

    return (
        <Modal.Root
            title={'Редактирование расписания'}
            isSeparator={true}
            isOpen={isOpen}
            onOpenChange={setIsOpen}
            trigger={trigger}>
            <Modal.Body>
                <Content
                    setGroupColor={setGroupColor}
                    setTimeVariant={setTimeVariant}
                    timeVariant={timeVariant}
                    hoursPerDay={workHoursPerDay}
                    setHoursPerDay={setWorkHoursPerDay}
                    setHoursInCourse={setHoursInCourse}
                    hoursInCourse={hoursInCourse}
                    setStartCourseDate={setStartCourseDate}
                    setEndCourseDate={setEndCourseDate}
                    startCourseDate={startCourseDate}
                    endCourseDate={endCourseDate}
                    setWorkDays={setWorkDays}
                    setEndWorkTime={setEndWorkTime}
                    workDays={workDays}
                    setBreakTime={setBreakTimeMinutes}
                    breakTime={breakTimeMinutes}
                    startLessonTime={startLessonTime}
                    endLessonTime={endLessonTime}
                    setTeacher={setTeacher}
                    teacher={teacher}
                    setClassRoom={setClassRoom}
                    classRoom={classRoom}/>
            </Modal.Body>
            <Modal.Footer>
                <Button className={s.close_button} onClick={onCloseChange}>
                    Отмена
                </Button>
                <Button className={s.add_timetable_button} onClick={sendRequest}>
                    Добавить расписание
                </Button>
            </Modal.Footer>
        </Modal.Root>
    );
};

