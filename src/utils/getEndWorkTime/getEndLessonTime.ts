export const getEndLessonTime = (timeVariant: string | null, hoursPerDay: number, breakTime: string | null) => {
    const lessonDuration = timeVariant === 'academic' ? 45 : 60;

    const totalMinutesWithoutBreak = hoursPerDay * lessonDuration;

    const totalMinutesWithBreak = totalMinutesWithoutBreak + (breakTime ? parseInt(breakTime) : 0);
    const currentTime = new Date();

    currentTime.setHours(timeVariant === 'academic' ? 7 : 7);

    currentTime.setMinutes(0);

    currentTime.setMinutes(currentTime.getMinutes() + totalMinutesWithBreak);

    const endHour = String(currentTime.getHours()).padStart(2, '0');

    const endMinute = String(currentTime.getMinutes()).padStart(2, '0');

    return `${endHour}:${endMinute}`;
}