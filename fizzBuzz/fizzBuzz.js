let meuParagrafo = document.getElementById("paragrafo")
let meuInput = document.getElementById("input")
let buttonSubmit = document.getElementById("button")
let buttonResetar = document.getElementById("resetar")

function fizzBuzz(numero){
    const divisivel3 = (numero % 3) === 0
    const divisivel5 = (numero % 5) === 0
    if (!isNaN(numero) && numero >=1 && numero<=100){
        if (divisivel3 && divisivel5){
            return 'Fizzbuzz'
        }else if(divisivel3){
            return 'Fizz'
        }else if (divisivel5){
            return 'Buzz'
        }
        return numero
    }
    else{
        return "valores aceitos: apenas NUMEROS de 1 a 100!!!"
    }
}

buttonSubmit.addEventListener("click", function(){
    meuParagrafo.innerHTML = fizzBuzz(parseInt(meuInput.value))
})
buttonResetar.addEventListener("click",function(){
    meuParagrafo.innerHTML = ""
    meuInput.value = ""
})


for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i))
}