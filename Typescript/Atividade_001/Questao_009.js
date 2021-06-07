// var Transacao = /** @class */ (function () {
//     function Transacao(valor, desconto) {
//         this.valor = valor;
//         this.desconto = desconto;
//     }
//     Transacao.prototype.valorDesconto = function () {
//         return this.valor * (1 - this.desconto / 100);
//     };
//     Object.defineProperty(Transacao.prototype, "getValor", {
//         get: function () {
//             return this.valor;
//         },
//         enumerable: false,
//         configurable: true
//     });
//     Object.defineProperty(Transacao.prototype, "getDesconto", {
//         get: function () {
//             return this.desconto;
//         },
//         enumerable: false,
//         configurable: true
//     });
//     return Transacao;
// }());
// var T1 = new Transacao(100, 10);
// console.log(T1.getValor);
// console.log(T1.getDesconto);
// console.log(T1.valorDesconto());
