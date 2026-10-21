let tarefas = [
"Estudar HTML",
"Estudar CSS",
"Praticar JavaScript",
"Estudar Laravel",
"Revisar conteúdo"
];
console.log("lista de tarefas antes das alterações: ")
console.log(tarefas)
tarefas.splice(3,1)

tarefas.splice(3, 1, "Revisar sobre Laravel")

console.log("Lista apos um item ser removido e outro ser substituido")
console.log(tarefas)