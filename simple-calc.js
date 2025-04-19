function calculadora(a,b,op) {
    let resultado;
    if(op === "+"){
        resultado = a + b;
    } else if(op === "-"){
        resultado = a - b;
    } else if(op === "/"){
        resultado = a / b;
    } else if(op === "*"){
        resultado = a * b;
    };

    return resultado;

    

}


a = 3
b = 3
op = "/"
console.log(calculadora(a,b,op))

