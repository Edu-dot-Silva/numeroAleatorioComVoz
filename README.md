# numeroAleatorioComVoz

Este é um projeto de um jogo em que o jogador precisa adivinhar um número secreto dentro de um intervalo definido. O jogador faz isso usando reconhecimento de voz para dar o seu palpite.

Pré-requisitos:
Antes de começar a usar o jogo, certifique-se de que você tenha um navegador web compatível com a API de Reconhecimento de Voz, como o Google Chrome.

Como Jogar:
Abra o arquivo index.html em seu navegador para iniciar o jogo.
Você verá uma tela com um título "Acerte o número secreto" e uma faixa de valores entre 0 e 100. O número secreto está dentro deste intervalo.

Você pode fazer o palpite usando reconhecimento de voz: Clique no ícone do microfone e fale o seu palpite em voz alta.

O jogo irá fornecer feedback sobre o seu palpite, informando se o número secreto é maior ou menor que o seu palpite.

Continue a adivinhar até encontrar o número secreto.

Quando você acertar o número secreto, o jogo exibirá uma mensagem de parabéns e oferecerá a opção de jogar novamente.

Arquivos do Projeto:
index.html: O arquivo HTML principal que contém a estrutura da página do jogo.
style.css: O arquivo CSS que define o estilo visual do jogo.
app/sortearNumero.js: Um arquivo JavaScript que gera um número aleatório para ser o número secreto.
app/reconhecimentoDeVoz.js: Um arquivo JavaScript que lida com o reconhecimento de voz para os palpites.
app/validacao.js: Um arquivo JavaScript que valida os palpites do jogador e fornece feedback.

Eduardo Silva
