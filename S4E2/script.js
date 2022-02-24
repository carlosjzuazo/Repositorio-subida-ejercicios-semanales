"use strict";
const name = "Carlos";
const age = 31;

if (age < 12) {
  console.log(
    `A ${name} le corresponde el descuento infantil (menores de 12).`
  );
}
if (age < 30) {
  console.log(`A ${name} le corresponde el descuento juvenil (menores de 30).`);
}
if (age > 60) {
  console.log(
    `A ${name} le corresponde el descuento de jubilados (mayores de 60).`
  );
} else {
  console.log(`A ${name} no le corresponde ningún descuento.`);
}
