document.getElementById("forms").addEventListener("submit", function(e) {
    e.preventDefault(); // 

    let altura = document.getElementById("altura").value;
    altura = parseFloat(altura);

    let peso = document.getElementById("peso").value;
    peso = parseFloat(peso);

    let imc = peso / altura ** 2;
    imc = imc.toFixed(2);


    if (imc >= 39.9) {
        alert(`Seu IMC é de ${imc} e você está com obesidade mórbida.`)
    } else if (imc >= 34.9) {
        alert(`Seu IMC é de ${imc} e você está com obesidade grau 2.`);
    } else if (imc >= 30) {
        alert(`Seu IMC é de ${imc} e você está com obesidade grau 1.`);
    } else if (imc >= 25) {
        alert(`Seu IMC é de ${imc} e você está com sobrepeso.`);
    } else if (imc > 18.5) {
        alert(`Seu IMC é de ${imc} e você está com o peso ideal.`);
    } 
    else{
        alert(`Seu IMC é de ${imc} e você está abaixo do peso.`);
    }
    

    document.getElementById("imc").innerHTML = `Seu IMC é de ${imc}`;
});