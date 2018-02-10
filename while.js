var x = 1;

document.write('Inicio do loop <br>');

while(x <= 10){
        
    if(x == 3){
        //break;
        x++;
        continue;
    }
    
    document.write(x + '<br>');

		x++;
}

document.write('Fim do loop <br>');