let notas = [7, 8, 9, 6, 10];
let indice = 0;
while (indice < notas.length) {
    if (notas[indice] < 0 || notas[indice] > 10) {
        console.log("Nota inválida encontrada: " + notas[indice]);
    }
    indice++;
}
console.log("A lista contém a nota 10? " + notas.includes(10));
let posicaoNota = notas.indexOf(8);
console.log("Posição da nota 8: " + posicaoNota);
let posicaoNotaIncorreta = notas.indexOf(6);
if (posicaoNotaIncorreta !== -1) {
    notas.splice(posicaoNotaIncorreta, 1);
}
console.log("Notas após remover a nota incorreta:");
notas.forEach(function(nota) {
    console.log(nota);
});
notas.sort(function(a, b) {
    return a - b;
});
console.log("Notas em ordem crescente:");
console.log(notas);