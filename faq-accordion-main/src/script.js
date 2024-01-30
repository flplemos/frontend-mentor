// Seleciona todos os elementos com a classe 'questions'
const botoes = document.querySelectorAll('.questions');

// Itera sobre cada botão
botoes.forEach(botao => {
    // Adiciona um ouvinte de evento para cada botão
    botao.addEventListener("click", () => {
        // Seleciona o elemento resposta correspondente ao botão clicado
        const resposta = botao.nextElementSibling;

        // Adiciona ou remove a classe 'ativo' no elemento resposta
        resposta.classList.toggle("ativo");

        // Seleciona o elemento img dentro do botão
        const img = botao.querySelector('img');

        // Alterna a fonte da imagem entre ícone de adição e ícone de subtração
        img.src = resposta.classList.contains('ativo') ? 'assets/images/icon-minus.svg' : 'assets/images/icon-plus.svg';
    });
});