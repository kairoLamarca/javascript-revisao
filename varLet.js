//Escopo de função "var"
//escopo de bloco "let"
//var nome = 'Kairo'; //a variavel fica no escopo global

function exibirNome() {
    //var nome = 'Kairo'; //a variavel fica no escopo da função

    if (true) {
        let nome2 = "Pedro";//a variavel fica somente no escopo do bloco, não podendo ser usado fora
        document.write(nome2);
    }

    //document.write(nome2);
    //document.write(nome);
}

exibirNome();
//document.write(nome);

document.write('<br/>');
//--------------------------------------------
for (let i = 0; i < 3; i++) {
    document.write(i);
}
//document.write(i);//não encontra o let i, se fosse var, encontrava
