const agentes = document.querySelectorAll(".agente");

agentes.forEach((agente) => {
  agente.addEventListener("mouseenter", () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
    removerSelecaoDoAgente();

    agente.classList.add("selecionado");

    // OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande

    //passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
    alterarImagemAgenteSelecionado(agente);

    // passo 3 - alterar o nome do personagem grande
    alterarNomeAgenteSelecionado(agente);

    // passo 4 - alterar a descrição do personagem grande
    alterarDescricaoAgente(agente);
  });
});

function alterarDescricaoAgente(agente) {
  const descricaoAgente = document.getElementById("descricao-agente");
  descricaoAgente.innerText = agente.getAttribute("data-description");
}

function alterarNomeAgenteSelecionado(agente) {
  const nomeAgente = document.getElementById("nome-agente");
  nomeAgente.innerText = agente.getAttribute("data-name");
}

function alterarImagemAgenteSelecionado(agente) {
  const imagemAgenteGrande = document.querySelector(".agente-grande");
  // passo 2 - alterar a imagem do personagem grande
  const idAgente = agente.attributes.id.value;
  imagemAgenteGrande.src = `./src/img/card-${idAgente}.png`;
}

function removerSelecaoDoAgente() {
  const AgenteSelecionado = document.querySelector(".selecionado");
  AgenteSelecionado.classList.remove("selecionado");
}
