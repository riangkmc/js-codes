//Pesquise o uso do .keypress() e faça um código que contabilize o número de caracteres digitados.
//Ao posicionar o ponteiro do mouse sobre o input o mesmo deve ficar na cor amarela, ao sair deve voltar para a cor branca.
//keypress ficou obsoleto??usar input com addeventlistner

const meuInput = document.getElementById("input");
const paragrafo = document.getElementById("paragrafo");

meuInput.addEventListener("input", function () {
  const totalCaracteres = meuInput.value.length;
  paragrafo.innerHTML = `Total de caracteres: ${totalCaracteres}`;
});

meuInput.addEventListener("focus",function(){
    meuInput.style.backgroundColor = "yellow"
})
meuInput.addEventListener("blur",function(){
    meuInput.style.backgroundColor = "white"
})