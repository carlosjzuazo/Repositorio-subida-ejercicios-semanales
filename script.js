"use strict";

const people = {
  Maria: 20,
  Ana: 14,
  Luis: 16,
  Pepe: 35,
  Manuel: 50,
  Teresa: 12,
  Daniel: 27,
  Irene: 23,
  Alex: 10,
};

const age = 18;

function adult(people) {
  for (let person in people) {
    if (people[person] >= age) {
      console.log(`${person} es mayor de edad.`);
    } else console.log(`${person} es menor de edad.`);
  }
}
adult(people);
