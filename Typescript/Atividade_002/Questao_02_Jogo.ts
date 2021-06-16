import {Personagem, Soldado, Cavaleiro} from './Questao_02_Personagens'

class Jogo{
    data: Personagem[] = []

    incluir(p: Personagem): void{
        let j = 0;
        let test: boolean[] = []
        this.data.map(item => item.id === p.id ? test.push(true) : test.push(false))
        
        for(var i = 0; i < test.length; i++){
            if(test[i] === true){
                j++
            }
        }

        if(j === 0){
            this.data.push(p)
        } else {
            console.log(`${p.nome} um personagem com esse id ja existe! troque-o`)
        }
    }


    pesquisar(id:number): Personagem{

        let perso: Personagem[] = []

        this.data.map((item) => item.id === id && perso.push(item))

        return perso[0]
    }


    atacar(id1: number, id2: number){
        
        let play = Soldado || Cavaleiro

        let atk = this.pesquisar(id1)
        let def = this.pesquisar(id2)

        if(id1 === id2){
            console.log(`O personagem ${atk.nome} ta maluco!?`)
        }     
        else if(atk instanceof play){
            atk.atacar(def)
            console.log(`${atk.nome} atacou ${def.nome}!`)
        } else {
            console.log(`O personagem ${atk.nome} é apenas um personagem!`)
        }
    }

    avaliarBatalha(){
        this.data.map(item => console.log(`O personagem ${item.id} com nome ${item.nome} tem ${item.energia} de energia, ele esta vivo?: ${item.estaVivo()}`))
    }

}

let p1 = new Personagem(1, "João", 10)

let s1 = new Soldado(2, "Ely", 1000, 50)

let s2 = new Soldado(3, "Rogério", 1000, 50)

let c1 = new Cavaleiro(4, "Emanuel", 100000, 500)

let Game = new Jogo()

Game.incluir(p1)
Game.incluir(s1)
Game.incluir(s2)
Game.incluir(c1)

Game.avaliarBatalha()

Game.atacar(2, 1)
Game.atacar(4, 3)

Game.avaliarBatalha()

Game.atacar(2, 3);

Game.atacar(4, 2)

Game.avaliarBatalha()

Game.atacar(3, 4)
Game.atacar(2, 4)
Game.atacar(4, 3)
Game.atacar(4, 2)

Game.avaliarBatalha()