class Casa {

    //criando atributos na classe
    constructor(corAtributo, quantidadedeQuartosAtributo) {
        this.cor = corAtributo;
        this.quantidadedeQuartos = quantidadedeQuartosAtributo;
    }

    getInformacoes() {
        document.write('cor: ' + this.cor + ' + qtdQuartos: ' + this.quantidadedeQuartos);
    }

    static abrirPortao() {
        document.write('Abrir portão');
    }

}

var casa = new Casa('Vermelha', 5);
//casa.abrirPortao();
casa.getInformacoes();

Casa.abrirPortao();//métodos static não precisam de um obejto