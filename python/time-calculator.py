weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

def weekDay(dayIndex, countDays):
    day = dayIndex + countDays
    day %= 7
    return weekDays[day]
    
def add_time(startTime, durationTime, dayWeek = ''):
    countDays = 0
    if (startTime[1] == ':'):
        initHour = int(startTime[0])
        initMinute = int(startTime[2] + startTime[3])
        timePeriod = str(startTime[5] + startTime[6])
    else:
        initHour = int(startTime[0] + startTime[1])
        initMinute = int(startTime[3] + startTime[4])
        timePeriod = str(startTime[6] + startTime[7])

    if (durationTime[1] == ':'):
        addHour = int(durationTime[0])
        addMinute = int(durationTime[2] + durationTime[3])
    elif (durationTime[3] == ':'):
        addHour = int(durationTime[0] + durationTime[1] + durationTime[2])
        addMinute = int(durationTime[4] + durationTime[5])
    else:
        addHour = int(durationTime[0] + durationTime[1])
        addMinute = int(durationTime[3] + durationTime[4])

    finalMinute = initMinute + addMinute
    finalHour = initHour  + addHour

    if (finalMinute >= 60):
        finalHour += int(finalMinute / 60)
        finalMinute %= 60
    if (finalHour >= 12):
        while (finalHour > 12):
            finalHour -= 12
            if (timePeriod == 'PM'):
                countDays += 1
                timePeriod = 'AM'
            elif (timePeriod == 'AM'):
                timePeriod = 'PM'

    if (dayWeek != ''):
        actualDay = weekDay(weekDays.index(dayWeek), countDays)
        if (countDays > 0):
            return str(finalHour) + ':' + str("%02d" % (finalMinute)) + ' ' + timePeriod + ', ' + actualDay + ' (' + str(countDays) + ' days later)'
        else:
            return str(finalHour) + ':' + str("%02d" % (finalMinute)) + ' ' + timePeriod + ', ' + actualDay
    else:
        if (countDays == 0):
            return str(finalHour) + ':' + str("%02d" % (finalMinute)) + ' ' + timePeriod
        elif (countDays == 1):
            return str(finalHour) + ':' + str("%02d" % (finalMinute)) + ' ' + timePeriod + ' (next day)'
        else:
            return str(finalHour) + ':' + str("%02d" % (finalMinute)) + ' ' + timePeriod + ' (' + str(countDays) + ' days later)'