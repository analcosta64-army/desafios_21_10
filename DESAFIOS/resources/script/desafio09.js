let notas = [8, 7, 9, 4, 6, 10];

notas.some(function(nota){
    return nota < 5;
})

if(notas.some(function(nota){return nota < 5 })){
    console.log("Existe pelo menos um aluno que precisa de recuperação.")
}else{
    console.log("Não existe  alunos que precisa de recuperação.")
}