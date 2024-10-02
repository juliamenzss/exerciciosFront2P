function tabelaMulti(n1){
    if(n1 > 0){
       let i = 1;
       while(i <= 10){
        result = n1 * i;
        console.log(`${n1} * ${i} = ${result}`)
        i++;
       } 
    } else{
        console.log("Digite um numero positivo")
    }
}
tabelaMulti(5);