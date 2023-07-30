import React, {ChangeEvent, FC, useEffect} from 'react';
import {Input} from "../../input";
import s from './content.module.scss'
import {ColorPicker} from "../../colorPicker";
import {Select} from "../../select/select";
import {timeVariantOptions} from "../../../../common/constans/timeVariantOptions";
import {Counter} from "../../counter";
import {DateRange} from "../../dateRange";
import {Tabs} from "../../tabs";
import {teacherOptions} from "../../../../common/constans/teacherOptions";
import {classRoomsOptions} from "../../../../common/constans/classRooms";
import {breakTimeOptions} from "../../../../common/constans/breakTimeOptions";
import {WorkTime} from "../../workTime";
import {getEndLessonTime} from "../../../../utils/getEndWorkTime";

type ContentPropsType = {
    setGroupColor: (color: string) => void
    setTimeVariant: (timeVariant: string) => void
    timeVariant: string | null
    hoursPerDay: number
    setHoursPerDay: (hours: number) => void
    setHoursInCourse: (hours: number) => void
    hoursInCourse: number
    setStartCourseDate: (newStartDate: string) => void
    setEndCourseDate: (newEndCourseDate: string) => void
    startCourseDate: string
    endCourseDate: string
    setWorkDays: (days: string[]) => void
    workDays: string[]
    setEndWorkTime: (time: string) => void
    setBreakTime: (breakTime: number) => void
    breakTime: number
    startLessonTime: string
    endLessonTime: string
    setTeacher: (teacher: string) => void
    teacher: string | null
    setClassRoom: (classRoom: string) => void
    classRoom: string | null
}
export const Content: FC<ContentPropsType> = ({
                                                  setGroupColor,
                                                  setTimeVariant,
                                                  timeVariant,
                                                  hoursPerDay,
                                                  setHoursPerDay,
                                                  setHoursInCourse,
                                                  hoursInCourse,
                                                  setStartCourseDate,
                                                  setEndCourseDate,
                                                  startCourseDate,
                                                  endCourseDate,
                                                  setEndWorkTime,
                                                  setWorkDays,
                                                  workDays,
                                                  setBreakTime,
                                                  breakTime,
                                                  startLessonTime,
                                                  endLessonTime,
                                                  setTeacher,
                                                  teacher,
                                                  setClassRoom,
                                                  classRoom
                                              }) => {


    const minHoursInCourse = 1
    const minHoursPerDay = 1
    const maxHoursPerDay = Math.min(8, hoursInCourse);

    useEffect(() => {
        const endTime = getEndLessonTime(timeVariant, hoursPerDay, breakTime)
        setEndWorkTime(endTime);
    }, [breakTime, timeVariant, hoursPerDay]);

    const changeColor = (event: ChangeEvent<HTMLInputElement>) => setGroupColor(event.currentTarget.value)
    const changeHoursInCourse = (newValue: number) => setHoursInCourse(newValue);
    const changeHoursPerDay = (newValue: number) => setHoursPerDay(newValue)
    const selectTimeVariant = (event: ChangeEvent<HTMLSelectElement>) => setTimeVariant(event.currentTarget.value)
    const selectTeacher = (event: ChangeEvent<HTMLSelectElement>) => setTeacher(event.currentTarget.value)
    const selectClassRoom = (event: ChangeEvent<HTMLSelectElement>) => setClassRoom(event.currentTarget.value)
    const selectBreakTime = (event: ChangeEvent<HTMLSelectElement>) => setBreakTime(JSON.parse(event.currentTarget.value))


    return (
        <div className={s.container}>
            <div className={s.school_name_and_color_picker_row}>
                <Input placeholder={'Онлайн школа'} className={s.school_name_input}/>
                <ColorPicker isLabel={true} label={'Цвет группы:'} changeColor={changeColor}/>
            </div>
            <div className={s.row}>
                <Select options={timeVariantOptions} onChange={selectTimeVariant} defaultValue={timeVariant}/>
                <Counter
                    title={'Всего часов'}
                    changeValue={changeHoursInCourse}
                    value={hoursInCourse}
                    minValue={minHoursInCourse}/>
                <DateRange
                    setStartCourseDate={setStartCourseDate}
                    setEndCourseDate={setEndCourseDate}
                    startCourseDate={startCourseDate}
                    endCourseDate={endCourseDate}
                    workDays={workDays}
                    hoursInCourse={hoursInCourse}
                    hoursPerDay={hoursPerDay}/>
            </div>
            <div className={s.tabs_row}>
                <Tabs setWorkDays={setWorkDays} workDays={workDays}/>
            </div>
            <div className={s.row}>
                    <Select options={breakTimeOptions} onChange={selectBreakTime} defaultValue={breakTime}/>
                <Counter
                    title={'Часов в день'}
                    changeValue={changeHoursPerDay}
                    value={hoursPerDay}
                    minValue={minHoursPerDay}
                    maxValue={maxHoursPerDay}/>
                <WorkTime start={startLessonTime} end={endLessonTime}/>
            </div>
            <div className={s.teacher_and_audience_row}>
                <div className={s.teachers_selector}>
                    <Select options={teacherOptions} onChange={selectTeacher} defaultValue={teacher}/>
                </div>
                <div className={s.audience_selector}>
                    <Select options={classRoomsOptions} onChange={selectClassRoom} defaultValue={classRoom}/>
                </div>
            </div>
            <span className={s.hint}>
               Выбор <b>преподавателя</b> и <b>аудитории</b> не обязателен.
           </span>
        </div>
    );
};
