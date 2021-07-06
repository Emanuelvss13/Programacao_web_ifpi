class calculo_classificacao{
    
    constructor(m_14: number, m_hj: number){
        this.media_14 = m_14;
        this.media_hj = m_hj;
    }

    media_14: number;
    media_hj: number;

    variacao(): number{
        const value = ((this.media_hj - this.media_14) / this.media_14) * 100;
        return value;
    }

    tostring(): string{
        let custom = 'em estabilidade';
        const value = this.variacao();

        if(value < 0){custom = 'em queda'} else if (value >= 15) custom = 'em alta';

        const message = `A variação foi de ${value.toFixed(2)}%. Portanto os casos estão ${custom}`;

        return message;
    }

}

const cc = new calculo_classificacao(5165, 1359);

console.log(cc.tostring())