function verificaSeChutePossuiValorValido(chute){
    const numero = +chute
    // o chute falado vem em String,só de somar o javascript ja vai tentar transforma ele em inteiro
    if (chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor Invalido</div>';
        return
        // esse if verifica se o valor falado é um numero ,se falar um nome por exemplo é um valor invalido
        // para exibir o valor invalido manipula pelo innerHTML criando uma div
    }
    // ifs que vao medir se o chute esta perto
    if (numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você Acertou!!!</h2>
        <h3>O numero secreto era ${numeroSecreto}</h3>

        <button id='jogarNovamente' class='btnJogar'>Jogar Novamente</button>
        `
        // quando o chute for certo o dom é manipulado no body da pagina com a mensagem de acerto
        // se o chute for certo adiciona um bottao tambem para jogar novamente
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O numero secreto é menor <i class="fa-solid fa-circle-down"></i></div>
        `
        
    }else{
        elementoChute.innerHTML += `
        <div>O numero secreto é maior <i class="fa-solid fa-circle-up"></i></div>
        `

    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `
        <div>Valor Invalido: Fale um numero entre 
        ${menorValor} e ${maiorValor}</div>
        `;
        return
        // para exibir o valor invalido manipula pelo innerHTML criando uma div com a mensagem

    }
}
// função que verifica se o que foi falado é um numero
function chuteForInvalido(numero){
    return Number.isNaN(numero)
}
// funçao que verifica se o numero falado esta dentro da margem
function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e =>{
    if (e.target.id == 'jogarNovamente'){
        window.location.reload()
    }
    // o parametro do addEventListener foi um click no elemento e
    // o if diz se o alvo e tiver o id jogarNovamente execute o codigo abaixo
    // o window.location.reload() faz o reload da pagina quando o botao é clicado
})