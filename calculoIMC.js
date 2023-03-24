function calcularIMC() {
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const resultado = document.getElementById("resultado");
    
    const imc = peso / (altura * altura);
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}.`;
}