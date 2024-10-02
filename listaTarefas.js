const prompt = require('prompt-sync')();

const tarefas = [];

for (let i = 0; i < 2; i++) {
    let tarefa = '';  
    
    while (tarefa === '' || tarefa === null) {
        tarefa = prompt(`Digite a tarefa ${i + 1}: `);
        if (tarefa === '' || tarefa === null) {
            console.log("Tarefa não pode ser vazia. Por favor, insira uma tarefa válida.");
        }
    }
    
    tarefas.push(tarefa);
}

console.log("\nTarefas inseridas com sucesso")
tarefas.forEach((tarefa, i) => {
    console.log(`${i + 1} - ${tarefa}`)
})

const tarefaConcluida = prompt("Qual você deseja marcar como concluída?\n")
const index = parseInt(tarefaConcluida) -1;

if (index >= 0 && index < tarefas.length){
    const tarefaRemovida = tarefas.splice(index, 1)
    console.log(`Tarefa ${tarefaRemovida} foi concluída`);
} else{
    console.log("Tarefa não encontrada. Por favor, tente novamente.")
}

console.log("Lista de tarefas foi atualizada:")
tarefas.forEach((tarefa, i) => {
    console.log(`${i + 1} - ${tarefa}`)
})