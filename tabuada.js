function tabuada(num){
    let cont = 1
    while(cont <= 10){
        let resultado = `${num} * ${cont} = ${num * cont}`
        cont ++
        console.log(resultado)
    }
}

tabuada(5)
