const calcular = document.getElementById('botao')

function imc() {
    const nome = document.getElementById('i-nome').value
    const altura = document.getElementById('i-altura').value
    const peso = document.getElementById('i-peso').value
    const res = document.querySelector('div.resposta')

    const alturaNum = Number(altura)
    const pesoNum = Number(peso)

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (pesoNum / (alturaNum * alturaNum)).toFixed(2)

        if (valorIMC < 18.5) {
            res.innerHTML = `<p> ${nome}, seu IMC é ${valorIMC} e você está abaixo do peso normal</p>`
        } else if (valorIMC >= 18.5 && valorIMC <= 24.9) {
            res.innerHTML = `<p> ${nome}, seu IMC é ${valorIMC} e você está com peso normal</p>`
        } else if (valorIMC >= 25 && valorIMC <= 29.9) {
            res.innerHTML = `<p> ${nome}, seu IMC é ${valorIMC} e você está com excesso de peso</p>`
        } else if (valorIMC >= 30 && valorIMC <= 34.9) {
            res.innerHTML = `<p> ${nome}, seu IMC é ${valorIMC} e você está com Obesidade I</p>`
        } else if (valorIMC >= 35 && valorIMC <= 39.9) {
            res.innerHTML = `<p> ${nome}, seu IMC é ${valorIMC} e você está com Obesidade II</p>`
        } else {
            res.innerHTML = `<p> ${nome}, seu IMC é ${valorIMC} e você está com Obesidade III</p>`
        }
    } else {
        alert('[ERROR] INSIRA TODOS OS VALORES')
    }
}

calcular.addEventListener('click', imc)
