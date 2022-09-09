console.log("Lesson task 1.4 - Map:");
const users = new Map();

users.set('12', { firstName: "Ola", lastName: "Nordmann" });

console.log(users.size); //Størrelse på map er nå 1

users.set('50', { firstName: "Kari", lastName: "Nordmann" });

console.log(users.size); //Størrelse på map er nå 2

//Slette key 12:

users.delete('12');

console.log(users.size); //Størrelse på map er nå 1 igjen siden vi slettet key 12



console.log("Lesson task 1.4 - Set:");
const values = new Set();
//Legge til value 1 , 2 , 2 , 2 , 3 , 4
values.add('1');
values.add('2');
values.add('2');
values.add('2');
values.add('3');
values.add('4');
console.log(values);
//sjekke lengden av set:
console.log(values.length);

//Sjekke om set har veriden 1 og a:
values.has('1');
console.log(values.has('1')); //true
values.has('a');
console.log(values.has('a')); //false



console.log("Lesson task 1.4 - Classes:");