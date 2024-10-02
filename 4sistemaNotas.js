const aluno = {
    nome: 'Júlia',
    notas: [10, 10, 7],
    media: function(){
        let soma = 0;
        for (let i = 0; i <this.notas.length; i++){
            soma += this.notas[i]
        }
        return soma / this.notas.length
    }
};

console.log(`Aluno ${aluno.nome} tem média de notas de ${aluno.media().toFixed(2)}`);