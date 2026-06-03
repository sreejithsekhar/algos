/*
'''
Suggest Meeting Times

You’re writing a helper for scheduling meetings.

Implement a function that finds all possible meeting start times during a workday where everyone is available.

Input:
- schedules: a dictionary/map where each key is a person’s name and the value is a list of busy time intervals.
- Each busy interval is a pair (start, end) of integers representing hours past midnight.
- The workday is fixed: starts at 8 (8am) and ends at 17 (5pm).
- All times are whole hours.

Rules:
- Treat intervals as half-open: [start, end). For example, (9, 11) means busy from 9:00-11:00, so 11:00 is available.
- A meeting of duration D starting at time t occupies [t, t + D).

Output:
- Return a list of all integer start times t such that the meeting fits entirely within the workday and no participant is busy during any part of [t, t + duration).
- If no start times work, return an empty list.

Be sure to consider edge cases like: 
empty schedules, 
overlapping busy intervals, 
meeting durations longer than the workday.
 

EXAMPLE(S)
schedules = {
  'Alice': [(8, 10), (13, 14)],
  'Bob': [(9, 11), (14, 15)],
}

set.add(meeting[0])
if(meeting[1] - meeting[0] > 1)

duration = 2

Output: [11, 15]

Explanation: A 2-hour meeting can start at 11 (11-13) or 15 (15-17) without overlapping any busy interval.
 

FUNCTION SIGNATURE
Python: find_available_slots(schedules: dict, duration: int) -> list[int]
Javascript: findAvailableSlots(schedules: {[name: string]: Array<[number, number]>}, duration: number) => number[]
'''


explore:
empty schedule: []
meeting durations longer than the workday.: 9 >
no constrain on participants
assumption sorted

brainstorm:
v.   v.       v. v
8 9 10 11 12 13 14 15 16 17
  ^.    ^.       ^. ^


Set(8 9 10 11 12 13 14 15 16 17)
Set(8,9,10,13,14)
+ duration - 1

numberline and figure out free hour of a person

plan:

intialize an array of 9 length -- 0

find busy hours and put it to set
  - add hours loop [10, 13]
  for p of people:
    - for(let i = start; i < end ; i++){
        in the array [i - 8] = 1
    }

  time:  O(9*p)

iterate through set and find free hours and check if duration can go in that

  // for (let i = 8; i < 17; i++) {
  //   if (i is not in set) {
  //     proposedStart = i;
  //     pEnd = pStart + duration - 1
  //     if pEnd not in set {
  //       return [pstart,pend]]
  //     }
  //   }
  // }
{
9: 1
10: 1
11:0

}
[16, 17]
[13, 14]
  Set(8,9,10,13,17)
[11,12,] [14,15,16]

if(!set.has(i)){
  
}
  11,   15

   8               16 17   
//[0 1 2 3 4 5 6 7 8 9]
  [1 1 1 0 1 1 1 1 1 0] 1

  2 -> [2,3]
  4 -> [6,9]


  free = 0;
  start = null;
  for (i of workhours) {
    if (i === 0) {
      start = start ?? i; // 3
      free++; // 1
      if (free === duration && i < 10) {
        return [start + 8, i + 8 + 1];
      }
    } else {
      free = 0;
      start = null;
    }
  }

*/




function meetingTimes(schedules, duration) {
  const workHours = new Array(10).fill(0);
  for (const [key, value] of Object.entries(schedules)) {
    console.log({ key, value })
    for (const [start, end] of value) {
      for (let i = start; i < end; i++) {
        workHours[i - 8] = 1;
      }
    }
  }

  console.log(workHours)

  let free = 0;
  let start = null;
  let available = [];
  for (let i = 0; i < workHours.length; i++) {
    if (workHours[i] === 0) {
      start = start ?? i; // 3
      free++; // 1
      // console.log({ start, free })
      if (free === duration && i < 10) {
        available.push(start + 8);
        free = 0;
        start = null;
      }
    } else {
      free = 0;
      start = null;
    }
  }

  return available;
}

console.log(meetingTimes({
  'Alice': [[8, 10], [13, 14]],
  'Bob': [[9, 11], [14, 15]],
}, 2))

//   8  9 10  11 12 13 14 15 16 17
// [ 1, 1, 1, 0, 0, 1,  1, 0, 0, 0 ]