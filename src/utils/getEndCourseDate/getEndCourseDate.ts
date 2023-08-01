export const getEndCourseDate = (startCourseDate: string, hoursInCourse: number, hoursPerDay: number, workDays: string[]) => {
    const startDate = new Date(startCourseDate)
    const endDate = new Date(startDate)
    const daysOfWeek = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"]
    const totalDays = Math.ceil(hoursInCourse / hoursPerDay)

    let workDaysCount = 0

    while (workDaysCount < totalDays) {

        if(workDays.length === 0) return 0

        const currentDay = daysOfWeek[endDate.getDay()]
        if (workDays.includes(String(currentDay))) workDaysCount++
        endDate.setDate(endDate.getDate() + 1)
    }

        endDate.setDate(endDate.getDate() - 1)
    return endDate.toLocaleDateString('en-ca')
};