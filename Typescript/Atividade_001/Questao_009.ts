class Transacao{
    constructor(readonly valor: number,
        readonly desconto: number){}
    

    valorDesconto(): number{
        return this.valor * (1-this.desconto/100);
    }

    get getValor(): number{
        return this.valor
    }

    get getDesconto(): number{
        return this.desconto
    }
}

const T1 = new Transacao(100, 10);

console.log(T1.getValor)
console.log(T1.getDesconto)
console.log(T1.valorDesconto())