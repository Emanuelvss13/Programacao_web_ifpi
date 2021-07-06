// var calculo_classificacao = /** @class */ (function () {
//     function calculo_classificacao(m_14, m_hj) {
//         this.media_14 = m_14;
//         this.media_hj = m_hj;
//     }
//     calculo_classificacao.prototype.variacao = function () {
//         var value = ((this.media_hj - this.media_14) / this.media_14) * 100;
//         return value;
//     };
//     calculo_classificacao.prototype.tostring = function () {
//         var custom = 'em estabilidade';
//         var value = this.variacao();
//         if (value < 0) {
//             custom = 'em queda';
//         }
//         else if (value >= 15)
//             custom = 'em alta';
//         var message = "A varia\u00E7\u00E3o foi de " + value.toFixed(2) + "%. Portanto os casos est\u00E3o " + custom;
//         return message;
//     };
//     return calculo_classificacao;
// }());
// var cc = new calculo_classificacao(5165, 1359);
// console.log(cc.tostring());
