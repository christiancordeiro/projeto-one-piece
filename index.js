//   O que precisamos fazer? - quando clicar no botão do personagem na lista temos que
// marcar o botão como selecionado e mostrar o personagem correspondente
const botoes = document.querySelectorAll(".botoes .botao")
console.log(botoes)

botoes.forEach((item, indice) => {
  item.addEventListener("click", () => {
    desselecionarBotao()
    desselecionarPersonagem()

    item.classList.add("selecionado")
    personagens[indice].classList.add("selecionado")
  })
})

const personagens = document.querySelectorAll(".personagem")
function desselecionarPersonagem() {
  const personagemSelecionado = document.querySelector(
    ".personagem.selecionado"
  )
  personagemSelecionado.classList.remove("selecionado")
}

function desselecionarBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado")
  botaoSelecionado.classList.remove("selecionado")
}
