const findMeetingTime = (people, length) => {
  let allowedTimeSlots = []
  let firstDateRange = null;
  people.forEach(person=> {
    allowedTimeSlots.push(person.timeSlots.filter((timeslot) => Math.abs(timeslot.start - timeslot.end) <= length));
  });
  for(let timeSlot of  allowedTimeSlots.flat()) {
    let tempDateRange = {};
    if(!firstDateRange) {
      firstDateRange = timeSlot;
      continue;
    }
    if(firstDateRange.start < timeSlot.start) {
      tempDateRange.start = firstDateRange.start;
    } else {
      tempDateRange.start = timeSlot.start;
    }
    if(firstDateRange.end < timeSlot.end) {
      tempDateRange.end = firstDateRange.end;
    } else {
      tempDateRange.end = timeSlot.end;
    }
    if (Math.abs(tempDateRange.start - tempDateRange.end) <= length) {
      firstDateRange = tempDateRange;
    } else {
      return null
    }
  };
  return firstDateRange;
}


const participants = [
  {name: "steven", timeSlots: [{start: new Date('December 17, 1995 01:00:00'), end: new Date('December 17, 1995 03:00:00')}]},
  {name: "bob", timeSlots: [{start: new Date('December 17, 1995 01:00:00'), end: new Date('December 17, 1995 02:00:00')}]},
  {name: "jill", timeSlots: [{start: new Date('December 17, 1995 01:00:00'), end: new Date('December 17, 1995 06:00:00')}]},
]

console.log(findMeetingTime(participants, 3600000));
