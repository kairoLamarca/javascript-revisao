
if(2 == 4){
	document.write('verdadeiro');
} else {
	document.write('falso');
}

document.write('<br>');

if(2 === '2'){
	document.write('verdadeiro');
} else {
	document.write('falso');
}

document.write('<br>');

if(2 !== '2'){
	document.write('verdadeiro');
} else {
	document.write('falso');
}

document.write('<br>');

if(2 > 4){
	document.write('verdadeiro');
} else {
	document.write('falso');
}

document.write('<br>');

if(2 < 4){
	document.write('verdadeiro');
} else {
	document.write('falso');
}

document.write('<br>');

var nota = prompt('Digite a nota do aluno');
var faltas = prompt('Digite a quantidade de faltas');

var media = 7;
var faltas_maximas = 15;

if(nota >= media && faltas <= faltas_maximas){
	document.write('Aprovado');
} else {
	document.write('Reprovado');
}

document.write('<br>');

//--------------------------------------------------------
//Operadores lógicos
if(2 == 2 && 3 > 2 && 'a' == 'b'){
	document.write('verdadeiro');
} else {
	document.write('falso');
}

document.write('<br>');

if(2 == 2 || 3 > 2 || 'a' == 'b'){
	document.write('verdadeiro');
} else {
	document.write('falso');
}

document.write('<br>');

//if(2 != 3){
if(!(2 == 3)){
	document.write('verdadeiro');
} else {
	document.write('falso');
}

var idade = prompt('Digite a idade');

if(idade >= 0 && idade < 15){
 alert('Criança');

} else if(idade >= 15 && idade < 30){
 alert('Jovem');

} else if(idade >= 30 && idade < 60){
 alert('Adulto');

} else {
 alert('Idoso');
}