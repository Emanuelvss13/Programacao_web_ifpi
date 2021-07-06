// var comissao_funcionario = /** @class */ (function () {
//     function comissao_funcionario(nome, comissao) {
//         this.nome = nome;
//         this.comissao = comissao;
//         this.salario = 1100;
//     }
//     comissao_funcionario.prototype.calc_comissao = function () {
//         var faixa1;
//         var faixa2;
//         var faixa3;
//         if (this.comissao <= 5000) {
//             console.log('Não recebeu comissão');
//         }
//         else if (this.comissao > 5000 && this.comissao <= 10000) {
//             faixa1 = (this.comissao - 5000) * 0.05;
//             console.log("Vendedor " + this.nome + ". Beneficios: 1\u00AA faixa R$ " + faixa1 + ",00. Valor total da comiss\u00E3o R$ " + faixa1 + ",00. Sal\u00E1rio final: R$ " + (this.salario + faixa1) + ",00.");
//         }
//         else if (this.comissao > 10000 && this.comissao <= 30000) {
//             faixa1 = 10000 * 0.05;
//             faixa2 = (this.comissao - 10000) * 0.10;
//             console.log("Vendedor " + this.nome + ". Beneficios: 1\u00AA faixa R$ " + faixa1 + ",00 e 2\u00AA faixa R$ " + faixa2 + ". Valor total da comiss\u00E3o R$ " + (faixa1 + faixa2) + ",00. Sal\u00E1rio final: R$ " + (this.salario + faixa1 + faixa2) + ",00.");
//         }
//         else if (this.comissao > 30000) {
//             faixa3 = this.comissao * 0.20;
//             console.log("Vendedor " + this.nome + ". Beneficios: super comiss\u00E3o R$ " + faixa3 + ",00. " + (this.salario + faixa3) + ",00.");
//         }
//     };
//     return comissao_funcionario;
// }());
// var cf = new comissao_funcionario('Emanuel', 7000);
// cf.calc_comissao();
