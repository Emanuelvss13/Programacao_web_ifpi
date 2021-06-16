"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Cavaleiro = exports.Soldado = exports.Personagem = void 0;
var Personagem = /** @class */ (function () {
    function Personagem(id, nome, energia) {
        this.id = id;
        this.nome = nome;
        if (energia > 10000) {
            this.energia = 10000;
        }
        else {
            this.energia = energia;
        }
    }
    Personagem.prototype.estaVivo = function () {
        if (this.energia === 0) {
            return false;
        }
        else {
            return true;
        }
    };
    Personagem.prototype.defenderAtaque = function (valor) {
        if (valor > this.energia) {
            this.energia = 0;
        }
        else {
            this.energia -= valor;
        }
    };
    return Personagem;
}());
exports.Personagem = Personagem;
var Soldado = /** @class */ (function (_super) {
    __extends(Soldado, _super);
    function Soldado(id, nome, energia, forcaDeAtaque) {
        var _this = _super.call(this, id, nome, energia) || this;
        _this.forcaDeAtaque = forcaDeAtaque;
        return _this;
    }
    Soldado.prototype.atacar = function (p) {
        p.defenderAtaque(this.forcaDeAtaque);
    };
    Soldado.prototype.defenderAtaque = function (valor) {
        if ((valor / 2) > this.energia) {
            this.energia = 0;
        }
        else {
            this.energia -= (valor / 2);
        }
    };
    return Soldado;
}(Personagem));
exports.Soldado = Soldado;
var Cavaleiro = /** @class */ (function (_super) {
    __extends(Cavaleiro, _super);
    function Cavaleiro(id, nome, energia, forcaDeAtaque) {
        return _super.call(this, id, nome, energia, forcaDeAtaque) || this;
    }
    Cavaleiro.prototype.atacar = function (p) {
        p.defenderAtaque(this.forcaDeAtaque * 2);
    };
    Cavaleiro.prototype.defenderAtaque = function (valor) {
        if ((valor / 3) > this.energia) {
            this.energia = 0;
        }
        else {
            this.energia -= (valor / 3);
        }
    };
    return Cavaleiro;
}(Soldado));
exports.Cavaleiro = Cavaleiro;
