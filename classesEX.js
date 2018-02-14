//EX - 1
class Conta {
    constructor() {
        this.saldo = 0;
    }
    deposito(valorDeposito) {
        this.saldo = this.saldo + valorDeposito;
    }
    saque(valorSaque) {
        this.saldo = this.saldo - valorSaque;
    }
    exibirSaldo() {
        document.write("Saldo atual: " + this.saldo);
    }
}

var conta = new Conta();
conta.deposito(100);
conta.saque(50);
conta.exibirSaldo();

//EX - 2
class Calculadora {
    static somar(numero1, numero2) {
        return numero1 + numero2;
    }
}

var total = Calculadora.somar(10, 8);
document.write(total);

//EX - 3
class funcionario {
    constructor(salarioBase) {
        this.salario = salarioBase;
        this.total = 0;
    }
    calcularSalario() {
        this.total = this.salario + 100;
    }
    exibirSalario() {
        document.write("Salário: " + this.total);
    }
}

class Programador extends funcionario {
    calcularSalario() {
        super.calcularSalario();
        this.total = this.total + 300;
    }
}

var programador = new Programador(500);
programador.calcularSalario();
programador.exibirSalario();