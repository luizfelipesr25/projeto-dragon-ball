/* 
  O que precisamos fazer? - quando clicar no botão do personagem na lista temos que 
marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele 

    OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 


const botoes = document.querySelectorAll('.botao');//Corre a lista de botões
const personagens = document.querySelectorAll('.personagem');//Corre a lista de personagens
botoes.forEach((botao, indice) =>{
    botao.addEventListener("click", () =>{
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");
        botao.classList.add("selecionado");
        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado");
        personagens[indice].classList.add("selecionado");
        });
});

*/
// Função para remover a classe "selecionado" de todos os botões
function removerSelecaoDosBotoes() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove("selecionado");
    }
}

// Função para adicionar a classe "selecionado" ao botão clicado
function adicionarSelecaoAoBotao(botao) {
    botao.classList.add("selecionado");
}

// Função para remover a classe "selecionado" de todos os personagens
function removerSelecaoDosPersonagens() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    if (personagemSelecionado) {
        personagemSelecionado.classList.remove("selecionado");
    }
}

// Função para adicionar a classe "selecionado" ao personagem correspondente ao índice
function adicionarSelecaoAoPersonagem(indice, personagens) {
    personagens[indice].classList.add("selecionado");
}

// Função que será chamada ao clicar em um botão
function configurarBotao(botao, indice, personagens) {
    botao.addEventListener("click", () => {
        removerSelecaoDosBotoes();
        adicionarSelecaoAoBotao(botao);
        removerSelecaoDosPersonagens();
        adicionarSelecaoAoPersonagem(indice, personagens);
    });
}

// Função principal para inicializar o comportamento
function inicializar() {
    const botoes = document.querySelectorAll('.botao');
    const personagens = document.querySelectorAll('.personagem');
    
    botoes.forEach((botao, indice) => {
        configurarBotao(botao, indice, personagens);
    });
}

// Inicializa a funcionalidade assim que o script for carregado
inicializar();