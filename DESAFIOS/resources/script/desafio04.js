let livros = ["Como eu era antes de voce","Para todos os garotos que ja amei","Dom Casmurro","É assim que acaba","Harry potter"]

let posicao = livros.indexOf("Dom Casmurro")
if(posicao === -1) {
    console.log("Livro não encontrado")
}else{
    console.log("Livro encontrado na posição "+ posicao + ".")
}