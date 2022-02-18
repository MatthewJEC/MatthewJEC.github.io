let placeholder = document.getElementById("placeholder")
const today = new Date()

const currentHour = today.getHours()
const currentMinute = today.getMinutes()
const currentSecond = today.getSeconds()
const currentDay = today.getDay()

const dayAsText = day => {
    let dayText = ''
    switch(day) {
        case 1:
            dayText = 'Monday'
            break;
        case 2:
            dayText = 'Tuesday'
            break;
        case 3:
            dayText = 'Wednesday'
            break;
        case 4:
            dayText = 'Thursday'
            break;
        case 5:
            dayText = 'Friday'
            break;
        case 6:
            dayText = 'Saturday'
            break;
        case 7:
            dayText = 'Sunday'
            break;
    }
    return dayText
}

// if (currentHour > 16) {
//     document.write('Good Evening! The time is currently ' + currentHour + ':' + currentMinute + '. Today is ' + dayAsText(currentDay) + '.')    
// } else if (currentHour > 11) {
//     document.write('Good Afternoon! The time is currently ' + currentHour + ':' + currentMinute + '. Today is ' + dayAsText(currentDay) + '.')
// } else if (currentHour >= 0) {
//     document.write('Good Morning! The time is currently ' + currentHour + ':' + currentMinute + '. Today is ' + dayAsText(currentDay) + '.')
// }


if (currentHour > 16) {
    placeholder.innerHTML = "Good Evening! The time is currently " + currentHour + ":" + currentMinute+ ". Today is " + dayAsText(currentDay) + "."
} else if (currentHour > 11) {
    placeholder.innerHTML = "Good Afternoon! The time is currently " + currentHour + ":" + currentMinute + ". Today is " + dayAsText(currentDay) + "."
} else if (currentHour >= 0) {
    placeholder.innerHTML = "Good Morning! The time is currently " + currentHour + ":" + currentMinute + ". Today is " + dayAsText(currentDay) + "."
}