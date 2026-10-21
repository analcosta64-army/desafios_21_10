let notas = [8, 7, 9, 4, 6, 10];

let validas = notas.every(function(nota){
    return nota => 0 && nota <= 10;
})
if(Validas){
    console.log("Todas as notas são validas")
}else{
    console.log("Existem notas fora do intervalo permitido")
}