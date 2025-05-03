/* 
1 = Crie um botão que:Conta quantas vezes ele foi clicado.
2 = Mostra esse número em um parágrafo abaixo.
Quando atingir 10 cliques, muda o texto para:"Limite atingido!" em vermelho.E o botão é desativado.
3 = Adicione um botão “Resetar” que Zera o contador,Reativa o botão,Limpa a mensagem.
*/

const buttonAumentar = document.getElementById("aumentar");
const meuParagrafo = document.getElementById("paragrafo")
const buttonResetar = document.getElementById("resetar");

let valorContador = 0

buttonAumentar.addEventListener("click",function(){
    valorContador +=1
    meuParagrafo.innerHTML = `Contador:${valorContador}`
    if (valorContador >= 10){
        meuParagrafo.style.color = "red"
        meuParagrafo.innerHTML ="limite atingido!"
        buttonAumentar.disabled = true
    }
})

buttonResetar.addEventListener("click",function(){
    valorContador = 0
    meuParagrafo.style.color = "black"
    meuParagrafo.innerHTML = `Contador:${valorContador}`
    buttonAumentar.disabled = false;
})