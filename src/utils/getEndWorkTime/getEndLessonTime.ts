export const getEndLessonTime = (timeVariant: string | null, hoursPerDay: number, breakTime: number) => {
    const lessonDuration = timeVariant === 'academical' ? 45 : 60;

    const totalMinutesWithoutBreak = hoursPerDay * lessonDuration;

    const totalMinutesWithBreak = totalMinutesWithoutBreak + (breakTime ? breakTime : 0);
    const currentTime = new Date();

    currentTime.setHours(timeVariant === 'academical' ? 7 : 7);

    currentTime.setMinutes(0);

    currentTime.setMinutes(currentTime.getMinutes() + totalMinutesWithBreak);

    const endHour = String(currentTime.getHours()).padStart(2, '0');

    const endMinute = String(currentTime.getMinutes()).padStart(2, '0');

    return `${endHour}:${endMinute}`;
}