function calcularIMC() {
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const resultado = document.getElementById("resultado");

    const imc = peso / (altura * altura);
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}.`;

    if (imc < 18.5) {
        resultado.innerHTML += "<br>Você está abaixo do peso.";
      } else if (imc < 25) {
        resultado.innerHTML += "<br>Seu peso está normal.";
      } else if (imc < 30) {
        resultado.innerHTML += "<br>Você está com sobrepeso.";
      } else if (imc < 35) {
        resultado.innerHTML += "<br>Você está com obesidade grau 1.";
      } else if (imc < 40) {
        resultado.innerHTML += "<br>Você está com obesidade grau 2.";
      } else {
        resultado.innerHTML += "<br>Você está com obesidade grau 3.";
    }
}