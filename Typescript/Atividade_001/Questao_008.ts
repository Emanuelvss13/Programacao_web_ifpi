class MeuNumero{
    constructor (readonly numero: number){}

    get getInteiro(): number{
        return Math.floor(this.numero);
    }

    get getDecimal(): number{
        return this.numero - Math.floor(this.numero);
    }
}

let Num = new MeuNumero(1.25)

console.log(Num.getDecimal)
console.log(Num.getInteiro)