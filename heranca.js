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
    latir() {
        document.write('+Latir')
    }
}

class Passaro extends Animal {
    voar() {
        document.write('+voar')
    }
}

class Papagaio extends Passaro {
    repetir() {
        document.write('+repetir')
    }
}

var cao = new Cao();
cao.dormir();
cao.latir();

var passaro = new Passaro();
passaro.dormir();
passaro.voar();

var papagaio = new Papagaio();
papagaio.dormir();
papagaio.voar();
papagaio.repetir()