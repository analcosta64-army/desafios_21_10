let jogos = [
"Minecraft",
"The Sims",
"Roblox",
"Terraria",
"Stardew Valley"
];
let jogosPesquisa = prompt("Digite o jogo que deseja procurar: ");

 if (jogos.includes(jogosPesquisa)) {
    alert("Produto procurado " + jogosPesquisa + "O jogo está na lista!");
} else {
    alert("Produto procurado " + jogosPesquisa + " Jogo não encontrado!");
}
