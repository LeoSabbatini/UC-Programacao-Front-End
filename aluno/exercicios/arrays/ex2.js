function filtrarNumeros(num) {
  let numeros = [];
 
  for (let i = 0; i < num.length; i++) {
    if (typeof num[i] === "number") {
      numeros.push(num[i]);
    }
  }
 
  return numeros;
}
 
console.log(filtrarNumeros(["leo", 67, undefined, true, 42, null]));
 