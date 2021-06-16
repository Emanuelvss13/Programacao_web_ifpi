export class Personagem{
    id: number
    
    nome: string
    
    energia: number
    
    estaVivo(): boolean{
        if(this.energia === 0){
            return false
        } else {
            return true
        }
    }

    defenderAtaque(valor: number):void{
        if(valor > this.energia){
            this.energia = 0
        } else {
            this.energia -= valor          
        }
    }

    constructor(id: number, nome: string, energia: number ){
        this.id = id
        this.nome = nome
        if(energia > 10000){
            this.energia = 10000
        } else {
            this.energia = energia
        }
    }
}

export class Soldado extends Personagem{
    forcaDeAtaque: number

    atacar(p: Personagem): void{
        p.defenderAtaque(this.forcaDeAtaque)
    }

    defenderAtaque(valor: number): void{
        if((valor / 2) > this.energia){
            this.energia = 0;
        } else {
            this.energia -= (valor / 2)
        }
    }

    constructor(id: number, nome: string, energia: number, forcaDeAtaque: number){
        super(id, nome, energia)
        this.forcaDeAtaque = forcaDeAtaque
    }
}

export class Cavaleiro extends Soldado{
    
    atacar(p: Personagem): void{
        p.defenderAtaque(this.forcaDeAtaque * 2)
    }

    defenderAtaque(valor: number): void{
        if((valor / 3) > this.energia){
            this.energia = 0;
        } else {
            this.energia -= (valor / 3)
        }
    }
    
    constructor(id: number, nome: string, energia: number, forcaDeAtaque: number){
        super(id, nome, energia, forcaDeAtaque)
    }
}