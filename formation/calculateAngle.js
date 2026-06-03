// Given a time in the "hh:mm" format (12-hour clock), return the angle (to the closest whole degree) between the hour and the minute hands.
// Return the smaller of the two angles formed by the hands (so the result is always between 0 and 180 degrees, inclusive).
// Note: the hour hand does not "jump" only once per hour; it moves continuously as minutes pass (it advances a small amount every minute). 
// You should account for this in your calculation.
// Follow-up: find all the times (within a 12-hour cycle) when the angle between both hands is 0 (they overlap).
// Example(s)
// calcluateAngle(12:00) returns 0
// calcluateAngle(12:30) returns 165
// calcluateAngle(12:31) returns 171
// calcluateAngle(11:59) returns 6


function calcluateAngle(time) {
    let [hh, mm] = time.split(':');
    hh = Number(hh);
    mm = Number(mm);

    const minuteAngle = 6 * mm;
    const hourAngle = 30 * (hh % 12) + 0.5 * mm;

    const diff = Math.abs(hourAngle - minuteAngle);
    const angle = Math.min(diff, 360 - diff);

    return angle;
}

console.log(calcluateAngle('12:00'))
console.log(calcluateAngle('12:30'))
console.log(calcluateAngle('12:31'))
console.log(calcluateAngle('11:59'))