export function parseCampaignTime(time) {
  var hours = time.substring(0, 2);
  const meridian = parseInt(hours) > 12 ? "PM" : "AM";
  hours = parseInt(hours) > 12 ? parseInt(hours) - 12 : hours;
  var mins = time.substring(2, 4);
  mins = parseInt(mins) === 0 ? mins + "0" : mins;

  //   console.log(hours + ":" + mins + " " + meridian);
  return hours + time.substring(2, 5) + " " + meridian;
}
export function parseChatTime(timestamp) {
  var [date, time] = timestamp.split("T");
  var hours = time.substring(0, 2);
  const meridian = parseInt(hours) > 12 ? "PM" : "AM";
  hours = parseInt(hours) > 12 ? parseInt(hours) - 12 : hours;
  var mins = time.substring(3, 5);
  mins = parseInt(mins) === 0 ? mins + "0" : mins;
  var parsedTime = hours + ":" + mins + " " + meridian;
  //   console.log(hours + ":" + mins + " " + meridian);
  return { date, parsedTime };
}
export const convertToISO8601 = (timeString) => {
  const [time, period] = timeString.split(" ");
  const [hours, minutes] = time.split(":");
  const isPM = period?.toLowerCase() === "pm";
  const hours24 = (parseInt(hours, 10) + (isPM && hours !== "12" ? 12 : 0))
    .toString()
    .padStart(2, "0");
  return `${hours24}:${minutes}:00.000Z`;
};
