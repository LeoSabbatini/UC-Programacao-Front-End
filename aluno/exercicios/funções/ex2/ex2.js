const concatenar3 = function(p1, p2, p3, separador = " | ") {
  return String(p1) + separador + String(p2) + separador + String(p3);
};
console.log(concatenar3("HTML", "CSS", "JS"));
console.log(concatenar3("Maçã", "Banana", "Uva", " - "));