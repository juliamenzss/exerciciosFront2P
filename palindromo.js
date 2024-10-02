function verificaPalindromo(palavra) {

    palavra = palavra.toLowerCase();

    let palavraReversa = '';

    for(let i = palavra.length - 1; i >= 0; i--) {
        palavraReversa += palavra[i];
    }

    return palavra === palavraReversa ? `${palavra} é um palíndromo.` : `${palavra} não é um palíndromo.`;
}

const prompt = require('prompt-sync')();
const palavra = prompt('Olá, seja bem vindo! Digite uma palavra: ');

const resultado = verificaPalindromo(palavra);
console.log(resultado);