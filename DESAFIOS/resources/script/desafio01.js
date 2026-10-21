let senha = "20130613"
let senhaDigitada = prompt("Digite a sua senha: ");
let limiteDeTenativas = 3;

while(limiteDeTenativas >0){
    limiteDeTenativas = limiteDeTenativas -1;
    if(senhaDigitada.toLowerCase().trim() === senha.toLowerCase().trim()){
        alert("Acesso permitido");
        break;
    }
    else{
        if (limiteDeTenativas === 0) {
            alert("Numero de tentativas esgotado, acesso negado");
            break;
        }
        alert("Senha incorreta, tentativas restantes: ".concat(limiteDeTenativas));
        senhaDigitada = prompt(" Digite novamente: ")
        
    }
}