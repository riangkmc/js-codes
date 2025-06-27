const relogio = document.getElementById("mostrarHora")
const iniciar = document.getElementById("iniciar")
const pausar = document.getElementById("pausar")
const zerar = document.getElementById("zerar")

function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12:false,
        timeZone:"GMT"
    })
}

let segundos = 0
let timer = null


function iniciarRelogio(){
    timer = setInterval(function(){
        segundos++
        relogio.innerHTML = criaHoraDosSegundos(segundos)
    },1000)
}

function pararRelogio(){
    setTimeout(function(){
        clearInterval(timer)
    },3000)
}

iniciar.addEventListener("click",function(){
    relogio.style.color = "white"
    clearInterval(timer)
    iniciarRelogio()
})


pausar.addEventListener("click",function(){
    pararRelogio()
    relogio.style.color = "red"
})

zerar.addEventListener("click",function(){
    relogio.style.color = "white"
    clearInterval(timer)
    relogio.innerHTML = "00:00:00"
    segundos = 0
})