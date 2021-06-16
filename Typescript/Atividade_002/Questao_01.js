// ;
// var ColecaoArray = /** @class */ (function () {
//     function ColecaoArray() {
//         this.i = 0;
//         this.data = [];
//     }
//     ColecaoArray.prototype.proximo = function () {
//         return this.data[this.i + 1];
//     };
//     ;
//     ColecaoArray.prototype.atual = function () {
//         return this.data[this.i];
//     };
//     ;
//     ColecaoArray.prototype.isPrimeiro = function () {
//         if (this.i === 0) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     };
//     ;
//     ColecaoArray.prototype.isUltimo = function () {
//         if (this.i !== this.data.length - 1) {
//             return false;
//         }
//         else {
//             return true;
//         }
//     };
//     ;
//     ColecaoArray.prototype.irParaPrimeiro = function () {
//         this.i = 0;
//     };
//     ;
//     ColecaoArray.prototype.adiciona = function (item) {
//         this.data.push(item);
//     };
//     ;
//     return ColecaoArray;
// }());
// ;
// var ca = new ColecaoArray();
// ca.adiciona(1);
// ca.adiciona(2);
// ca.adiciona(3);
// console.log(ca.proximo());
// console.log(ca.atual());
// console.log(ca.isPrimeiro());
// console.log(ca.isUltimo());
// console.log(ca.irParaPrimeiro());
