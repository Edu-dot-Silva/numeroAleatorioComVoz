const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}
console.log(numeroSecreto);

const elementoMenorValor = document.getElementById('menorValor')
elementoMenorValor.innerHTML = menorValor
// o innerHTML esta mudando o valor no html,deixando o menor valor ser 1
// o innerText tambem muda texto do html

const elementoMaiorValor = document.getElementById('maiorValor')
elementoMaiorValor.innerHTML = maiorValor