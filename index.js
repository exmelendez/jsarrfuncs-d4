import inventors from './constants/inventors.js';
import people from './constants/people.js';
import vehicles from './constants/vehicles.js';

// console.log('original inventors:',typeof inventors, inventors);

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
// console.table(fifteen); //different type of console log, displays data as table

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullNames = inventors.map(inventor => inventor.first + " " + inventor.last);
// console.log('mod array with first & last names:', fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
// console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYears = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
// console.log('totalYears',totalYears);

// 5. Sort the inventors by years lived
const oldest = inventors.sort((a, b) => {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return lastGuy > nextGuy ? -1 : 1;
});
// console.log('oldest', oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


// 7. sort Exercise - Sort the people alphabetically by last name
const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});

// 8. Reduce Exercise - Sum up the instances of each of these
const transportation = vehicles.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.log(transportation);