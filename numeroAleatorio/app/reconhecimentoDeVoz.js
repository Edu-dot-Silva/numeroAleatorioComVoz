const elementoChute = document.getElementById('chute')
// codigo de api extraido da internet,api web speech
window.SpeechRecognition = window.webkitSpeechRecognition || webkitSpeechRecognition;
// foi criada uma constante de reconhecimento que foi atribuido um reconhecimento de voz da api
const recognition = new SpeechRecognition();
// para definir a linguagem do reconhecimento
recognition.lang = 'pt-br'
// para começar o reconhecimento
recognition.start()
// um microfone deve poscar na aba se nao piscar clicar para permitir o reconhecimento no navegador[]

recognition.addEventListener('result',onSpeak)
// a constante recebeu um addEventListener que recebe o resultado na fala
function onSpeak(e){
    // a função onSpeak recebe um parametro e
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeChutePossuiValorValido(chute)

    // quando a fala é recebida no console fica muitos dados,para reduzir os dados e extrair só oq foi falando da essa filtrada com array e busca só a transcrição
}

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class='box'>${chute}</span>
    `
    // pelo innerHTML da pra criar div e no caso foi criado uma div parecida com  que ja existe no html que traz o resultado que foi falando
}

recognition.addEventListener('end',() => recognition.start())
// adicionando um addEventListener para quando o reconhecimento de voz parar,começar denovo para que o jogo nao pare no primeiro chute