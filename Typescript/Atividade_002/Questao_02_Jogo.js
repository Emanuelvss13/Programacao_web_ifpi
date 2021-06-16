"use strict";
exports.__esModule = true;
var Questao_02_Personagens_1 = require("./Questao_02_Personagens");
var Jogo = /** @class */ (function () {
    function Jogo() {
        this.data = [];
    }
    Jogo.prototype.incluir = function (p) {
        var j = 0;
        var test = [];
        this.data.map(function (item) { return item.id === p.id ? test.push(true) : test.push(false); });
        for (var i = 0; i < test.length; i++) {
            if (test[i] === true) {
                j++;
            }
        }
        if (j === 0) {
            this.data.push(p);
        }
        else {
            console.log(p.nome + " um personagem com esse id ja existe! troque-o");
        }
    };
    Jogo.prototype.pesquisar = function (id) {
        var perso = [];
        this.data.map(function (item) { return item.id === id && perso.push(item); });
        return perso[0];
    };
    Jogo.prototype.atacar = function (id1, id2) {
        var play = Questao_02_Personagens_1.Soldado || Questao_02_Personagens_1.Cavaleiro;
        var atk = this.pesquisar(id1);
        var def = this.pesquisar(id2);
        if (id1 === id2) {
            console.log("O personagem " + atk.nome + " ta maluco!?");
        }
        else if (atk instanceof play) {
            atk.atacar(def);
            console.log(atk.nome + " atacou " + def.nome + "!");
        }
        else {
            console.log("O personagem " + atk.nome + " \u00E9 apenas um personagem!");
        }
    };
    Jogo.prototype.avaliarBatalha = function () {
        this.data.map(function (item) { return console.log("O personagem " + item.id + " com nome " + item.nome + " tem " + item.energia + " de energia, ele esta vivo?: " + item.estaVivo()); });
    };
    return Jogo;
}());
var p1 = new Questao_02_Personagens_1.Personagem(1, "João", 10);
var s1 = new Questao_02_Personagens_1.Soldado(2, "Ely", 1000, 50);
var s2 = new Questao_02_Personagens_1.Soldado(3, "Rogério", 1000, 50);
var c1 = new Questao_02_Personagens_1.Cavaleiro(4, "Emanuel", 100000, 500);
var Game = new Jogo();
Game.incluir(p1);
Game.incluir(s1);
Game.incluir(s2);
Game.incluir(c1);
Game.avaliarBatalha();
Game.atacar(2, 1);
Game.atacar(4, 3);
Game.avaliarBatalha();
Game.atacar(2, 3);
Game.atacar(4, 2);
Game.avaliarBatalha();
Game.atacar(3, 4);
Game.atacar(2, 4);
Game.atacar(4, 3);
Game.atacar(4, 2);
Game.avaliarBatalha();
