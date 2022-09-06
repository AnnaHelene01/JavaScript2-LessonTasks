//JavaScript 2 - Lesson Task 1.2
// Convert the object to JSON and parse it back again
console.log("JavaScript 2 - Lesson Task 1.2");

const myCountry = {
    country: 'Norway',
    city: 'Oslo',
    currency: 'Krone',
  };

console.log(myCountry);

//Her converter jeg objectet til JSON:
const stringifyed = JSON.stringify(myCountry);
console.log(stringifyed);

//Her parser jeg JSON teksten tilbake igjen til js object:
const parsed = JSON.parse(stringifyed);
console.log(parsed);