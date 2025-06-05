# Projeto Dragal Ball

Projeto que foi feito durante a semana do 0 ao programador do **[Dev em Dobro](https://www.youtube.com/@DevemDobro)**.

## O projeto

Os usuários devem ser capazes de:

- Visualizar o layout ideal dependendo do tamanho da tela do seu dispositivo (responsividade).
- Ver os as informações de cada personagem com uma aba lateral interativa.

### Captura de tela

<img src="./projeto-dragal-ball.gif">

### Links

- Github pages: https://luizfelipesr25.github.io/projeto-dragon-ball/

### O que eu aprendi

Os principais aprendizados desse projeto, seria a aplicação do Flex, para centralização dos conteúdos.

```css
.conteudo {
    position: absolute;
    top: 0;
    left: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    max-width: 380px;
    z-index: 1;
}
```

Além disso, aprendi fazer nuance de sombras, utilizando o linear-gradient no background.

```css
main::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 80vw;
    background: linear-gradient(92deg, #000 25%, rgba(0, 0, 0, 0) 75%) no-repeat;
} 
```

Utilização do chatGPT, para refatorar o código JavaScript.

- Antes de refatorar.

```jsx
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
```

- Depois de refatorar.

```jsx
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
```

### Desenvolvimento contínuo
Melhorar os conceitos das funções no JavaScript para codar de uma maneira mais limpa e de fácil entendimento.

### Recursos úteis

- ChatGPT - Para refatorar o meu código JavaScript.

### Autor

- Site - Luiz Felipe da Silva Rocha
- Mentoria Dev em Dobro - **[Dev em Dobro](https://www.youtube.com/@DevemDobro)**

### Agradecimentos

Agradecimento especial para os gêmeos e toda a equipe do **[Dev em Dobro](https://www.youtube.com/@DevemDobro)**, pelos ensinamentos.