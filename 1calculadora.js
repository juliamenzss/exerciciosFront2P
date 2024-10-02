function calculadora(n1, n2, operacao){
    if(operacao === "-"){
        return n1 - n2;
    }else if(operacao === "+"){
        return n1 + n2;
    }else if(operacao === "*"){
        return n1 * n2;
    } else{
        return n1 / n2;
    }
}

console.log(calculadora(5,82, "+"));
console.log(calculadora(300,25, "-"));
console.log(calculadora(8,4, "*"));
console.log(calculadora(905,5, "/"));
console.log(calculadora(65,12, "+"));
console.log(calculadora(20,5, "-"));