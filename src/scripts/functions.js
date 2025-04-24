// JSDoc para a função parOuImpar
/** 
 * Verifica se um número é par ou ímpar.
 * @param {number} numero - O número a ser verificado.
 * @returns {string} Retorna "par" se o número for par, "impar" se for ímpar, ou uma mensagem de erro se o número for menor que 0.
 */


function parOuImpar(numero) {
    if (numero < 0) {
        return "Erro: número deve ser maior ou igual a 0";
    }
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

module.exports = { parOuImpar };
