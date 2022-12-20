const readingTime = (words = 1) => {
  const wpm = 225;
  const minutes = words / wpm;
  var SECOND_MS = 1000;
  var MINUTE_MS = 60 * SECOND_MS;
  var HOUR_MS = 60 * MINUTE_MS;
  var DAY_MS = 24 * HOUR_MS;
  var WEEK_MS = 7 * DAY_MS;
  var MONTH_MS = 30 * DAY_MS;
  let ms = minutes * MINUTE_MS;

  const lookup = ["month", "week", "day", "hour", "minute", "second"];
  const values = [];
  values.push(ms / MONTH_MS);
  ms %= MONTH_MS;
  values.push(ms / WEEK_MS);
  ms %= WEEK_MS;
  values.push(ms / DAY_MS);
  ms %= DAY_MS;
  values.push(ms / HOUR_MS);
  ms %= HOUR_MS;
  values.push(ms / MINUTE_MS);
  ms %= MINUTE_MS;
  values.push(ms / SECOND_MS);
  ms %= SECOND_MS;

  const pretty = [];
  for (let i = 0; i < values.length; i++) {
    const val = Math.round(values[i]);
    if (val <= 0) continue;

    pretty.push(`${val} ${lookup[i]}${val !== 1 ? 's' : ''}`);
    break;
  }
  return pretty.join(', ');
};

module.exports = readingTime;
