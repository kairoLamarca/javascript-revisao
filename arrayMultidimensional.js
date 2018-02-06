var automoveis = Array();

automoveis['carros'] = Array('Fiat Palio', 'Fiat Punto', 'Honda Civic', 'Honda Fit');

automoveis['motos'] = Array();
automoveis['motos']['Yamaha'] = Array();
automoveis['motos']['Suzuki'] = Array();

automoveis['motos']['Yamaha'][1] = 'Yamaha Fazer Ys 250';
automoveis['motos']['Yamaha'][2] = 'Yamaha Factor 150 E';
automoveis['motos']['Suzuki'][1] = 'Suzuki Burgman 125';
automoveis['motos']['Suzuki'][2] = 'Suzuki RG 600 R';

document.write(automoveis['motos']['Suzuki'][2]);
document.write(automoveis['carros'][2]);

//------------------------------------------------
//EX - 1
var alfabeto = Array();

alfabeto[1] = 'A';
alfabeto[2] = 'B';
alfabeto[3] = 'C';
alfabeto[4] = 'D';
alfabeto[5] = 'E';
alfabeto[6] = 'F';
alfabeto[7] = 'G';
alfabeto[8] = 'H';
alfabeto[9] = 'I';
alfabeto[10] = 'J';
alfabeto[11] = 'K';
alfabeto[12] = 'L';
alfabeto[13] = 'M';
alfabeto[14] = 'N';
alfabeto[15] = 'O';
alfabeto[16] = 'P';
alfabeto[17] = 'Q';
alfabeto[18] = 'R';
alfabeto[19] = 'S';
alfabeto[20] = 'T';
alfabeto[21] = 'U';
alfabeto[22] = 'V';
alfabeto[23] = 'W';
alfabeto[24] = 'X';
alfabeto[25] = 'Y';
alfabeto[26] = 'Z';

document.write(alfabeto[10] + alfabeto[1] + alfabeto[22] + alfabeto[1] + alfabeto[19] +
alfabeto[3] + alfabeto[18] + alfabeto[9] + alfabeto[16] + alfabeto[20]);

//-----------------------------------
//EX - 2

var listas = Array();

listas['series'] = Array();
listas['filmes'] = Array();

listas['series'][1] = 'Game of Thrones';
listas['series'][2] = 'The Big Bang Theory';
listas['series'][3] = 'Friends';

listas['filmes'][1] = 'Star Wars';
listas['filmes'][2] = 'The Fast and the Furious';
listas['filmes'][3] = 'The Lord of the Rings';

document.write(listas['series'][2]);
document.write(listas['filmes'][3]); 