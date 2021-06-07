// var MeuNumero = /** @class */ (function () {
//     function MeuNumero(numero) {
//         this.numero = numero;
//     }
//     Object.defineProperty(MeuNumero.prototype, "getInteiro", {
//         get: function () {
//             return Math.floor(this.numero);
//         },
//         enumerable: false,
//         configurable: true
//     });
//     Object.defineProperty(MeuNumero.prototype, "getDecimal", {
//         get: function () {
//             return this.numero - Math.floor(this.numero);
//         },
//         enumerable: false,
//         configurable: true
//     });
//     return MeuNumero;
// }());
// var Num = new MeuNumero(1.25);
// console.log(Num.getDecimal);
// console.log(Num.getInteiro);
