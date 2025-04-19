function seleciona_pares(array){
    pares = []
    //for (let item of array)
    for (let i = 0 ; i < array.length; i++){
        if(array[i] % 2 === 0)
            pares.push(array[i])
    }
    return pares;
}
numeros = [3,84,4,5,54,3,13,2,89,90,64]
console.log(seleciona_pares(numeros))