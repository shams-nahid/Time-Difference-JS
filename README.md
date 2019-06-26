# Time Difference JS

> Get the time differences in second, minute, hour, day, week, month and years

> Put two dates and get the differences

## Objective

For two difference time, it will generate outputs like

- 1 second
- 10 seconds
- 1 minute
- 15 minutes
- 3 Hours
- 5 Days
- 1 weeks
- 2 months
- 1 year
- 5 years

`getTimeDiff` method require two params

> @firstDate // A date, for null value, it take current date and time

> @secondDate // A date, for null value, it take current date and time

`Output`

> value // This is the numerical difference between unit

> suffix // This is the suffix, like second, month, year etc.

## Install

```bash
npm i time-difference-js
```

## Node.js Usage

```js
const { getTimeDiff } = require("time-difference-js");

const startDate = new Date("6/4/2016");
const endDate = new Date("6/3/2018");

const result = getTimeDiff(startDate, endDate);
```

## Browser Usage

```js
import * as timeDifference from "time-difference-js";
const { getTimeDiff } = timeDifference;
const startDate = new Date("6/4/2016");
const endDate = new Date("6/3/2018");

const result = getTimeDiff(startDate, endDate);
```

| Supported Date Format        |           Example            |
| ---------------------------- | :--------------------------: |
| MM/DD/YYYY                   |           6/4/2016           |
| EEE MMM dd HH:mm:ss          |     Mon May 12 16:30:00      |
| EEE MMM dd yyyy HH:mm:ss.SSS | Mon May 12 2014 23:30:00.789 |
| MMM dd, yyyy hh:mm:ss a z    | May 13, 2014 11:30:00 PM PST |
| yyyy/MM/dd HH:mm:ss.SSS      |   2014/05/13 16:30:59.786    |

## License

MIT
