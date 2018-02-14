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

class Passaro extends Animal {
    voar() {
        document.write('+voar')
    }
}

var cao = new Cao("Marrom", 30, "Labrador");
cao.dormir();
cao.getInformacoes();