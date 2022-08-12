

function itemSelecionado(escolha, sec){

  let naoSelecionado = document.querySelector(sec + '> .selecionado')
  if(naoSelecionado != null){
      naoSelecionado.classList.remove("selecionado")
  } 

  let selecionado = document.querySelector(escolha)
  selecionado.classList.toggle('selecionado')

  let preco = document.querySelector(sec +"> .selecionado > :nth-child(4)")
  console.log(preco)
}
