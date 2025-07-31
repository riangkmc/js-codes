const inputAdicionar = document.querySelector('.input-adicionar')
const btnAdicionar = document.querySelector('.btn-add-tarefa')
const listaTarefas = document.querySelector(".tarefas")



function criarTarefa(inputTexto){
    const li = document.createElement('li')
    li.innerHTML = inputTexto
    listaTarefas.appendChild(li)
    inputAdicionar.value = ""
    inputAdicionar.focus()
    criaBotaoApagar(li)
    return li
}

function criaBotaoApagar(li){
    li.innerHTML += " "
    const botaoApagar = document.createElement('button')
    botaoApagar.innerHTML = 'apagar'
    li.appendChild(botaoApagar)
    
    botaoApagar.addEventListener('click',()=>{
        li.remove()
    })
}


inputAdicionar.addEventListener('keypress',(e)=>{
    if(e.keyCode === 13){
        if(!inputAdicionar.value){
           return
        }
        criarTarefa(inputAdicionar.value)
    }
})

btnAdicionar.addEventListener("click",()=> {
    if(!inputAdicionar.value){
        return
    }
    criarTarefa(inputAdicionar.value)
})


