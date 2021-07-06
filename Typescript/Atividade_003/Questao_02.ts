class comissao_funcionario{
    nome: string;
    salario: number;
    comissao: number;

    constructor(nome: string, comissao: number){
        this.nome = nome;
        this.comissao = comissao;
        this.salario = 1100;
    }

    calc_comissao(): void{
        let faixa1;
        let faixa2;
        let faixa3;
        if(this.comissao <= 5000){
            console.log('Não recebeu comissão')
        } else if (this.comissao > 5000 && this.comissao <= 10000){
            faixa1 = (this.comissao - 5000) * 0.05
            console.log(`Vendedor ${this.nome}. Beneficios: 1ª faixa R\$ ${faixa1},00. Valor total da comissão R\$ ${faixa1},00. Salário final: R\$ ${this.salario + faixa1},00.`)
        } else if(this.comissao > 10000 && this.comissao <= 30000){
            faixa1 = 10000 * 0.05;
            faixa2 = (this.comissao - 10000) * 0.10;
            console.log(`Vendedor ${this.nome}. Beneficios: 1ª faixa R\$ ${faixa1},00 e 2ª faixa R\$ ${faixa2}. Valor total da comissão R\$ ${faixa1 + faixa2},00. Salário final: R\$ ${this.salario + faixa1 + faixa2},00.`)
        } else if(this.comissao > 30000){
            faixa3 = this.comissao * 0.20
            console.log(`Vendedor ${this.nome}. Beneficios: super comissão R\$ ${faixa3},00. ${this.salario + faixa3},00.`)
        }
    }


}

const cf = new comissao_funcionario('Emanuel', 7000)

cf.calc_comissao()