//Utilizando o while:
var tabuada = prompt('Informe a tabuada que deseja consultar');

var num = 1;
while(num <= 10){
 document.write(tabuada + ' x ' + num + ' = ' + (tabuada * num) + '<br>');
 num++;
}


//Utilizando o for:
var tabuada = prompt('Informe a tabuada que deseja consultar');

for(var num = 1; num <= 10; num++){
 document.write(tabuada + ' x ' + num + ' = ' + (tabuada * num) + '<br>');
}