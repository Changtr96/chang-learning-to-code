const timestampNow = Date.now();
console.log(timestampNow);
const next60DateTimestamp = timestampNow + 60 * 24 * 60 * 60 * 1000;
const next60Date = new Date(next60DateTimestamp);
const today = new Date();
console.log(next60Date);
console.log(today.toString());

function calculateNextDate(date) {
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const y = date.getFullYear();
  const h = date.getHours();
  const min = date.getMinutes();
  return `${d}-${m}-${y} ${h}:${min}`;
}

console.log(calculateNextDate(next60Date));

// const mylodash = require("lodash");

// const arr = [1, 5, 6, 7];

// let sum = mylodash.add(9, 999);
// console.log(sum);
// const copyArr = mylodash.clone(arr);
// console.log(copyArr);
// const crf = mylodash.create({ a: haha, b: hehee });
// console.log(crf);
