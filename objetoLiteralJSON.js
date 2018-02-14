class Animal {
    constructor(cor, peso) {
        this.cor = cor;
        this.peso = peso;
    }

    dormir() {
        document.write('+Dormir')
    }
}

class Cao extends Animal {

    constructor(cor, peso, raca) {
        super(cor, peso); //chama o constructor da classe principal
        this.raca = raca
    }

    getInformacoes() {
        document.write('-cor: ' + this.cor + ' -peso: ' + this.peso + ' -raca: ' + this.raca)
    }

    latir() {
        document.write('+Latir')
    }

    dormir() {
        super.dormir();//chama o método da classe principal sem sobrescrever
        document.write(' como cão')
    }
}

var cao = new Cao("Marrom", 30, "Labrador");

var objetoLiteral = {
    cor: "Marrom",
    peso: 30,
    raca: "Labrador",
    filhotes: { filhote1: "Rex", filhote2: "Doug" }
};

//document.write(objetoLiteral.filhotes.filhote1);

var objetoJson = '{	"cor": "Marrom", "peso": 30, "raca": "Labrador"}';

var objeto = JSON.parse(objetoJson);

document.write(objeto.cor);


