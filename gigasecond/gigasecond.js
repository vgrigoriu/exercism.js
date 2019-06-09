// 10^9 seconds in milliseconds
const gigasecondDuration = Math.pow(10, 9) * 1000;
export const gigasecond = moment =>
  new Date(moment.getTime() + gigasecondDuration);
