const prompt = require('prompt-sync')();

const pessoas = [];

for (let i = 0; i < 5; i++) {
    const nome = prompt(`Olá! Digite o nome da pessoa ${i + 1}: `);
    const idade = parseInt(prompt(`Digite a idade de ${nome}: `));
    
    pessoas.push({ nome, idade });
}

function exibirMaioresDe18(pessoas) {
    console.log("\nPessoas com mais de 18 anos:");
    
    for (let pessoa of pessoas) {
        if (pessoa.idade > 18) {
            console.log(pessoa.nome);
        }
    }
}

exibirMaioresDe18(pessoas);
