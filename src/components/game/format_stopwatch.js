

const fillTextWithFormat = function fillTextWithFormat(hours, minutes, seconds) {
    let finalHours;
    let finalMinutes;
    let finalSeconds;

    if (hours > 9) {
        finalHours = hours;
    } else {
        finalHours = `0${hours}`;
    }
    if (minutes > 9) {
        finalMinutes = minutes;
    } else {
        finalMinutes = `0${minutes}`;
    }
    if (seconds > 9) {
        finalSeconds = seconds;
    } else {
        finalSeconds = `0${seconds}`;
    }
    return `${finalHours}:${finalMinutes}:${finalSeconds}`;
};

export { fillTextWithFormat };