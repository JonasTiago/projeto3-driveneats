let pratos = document.querySelector(".pratos");
let bebidas = document.querySelector(".bebidas");
let sobremesa = document.querySelector(".sobremesa");
console.log(pratos.parentElement.classList)


pratos.addEventListener('click', (event) => {
    itemSelecionado(event)
})

bebidas.addEventListener('click', (event) => {
  itemSelecionado(event)
})

sobremesa.addEventListener('click', (event) => {
  itemSelecionado(event)
})

function itemSelecionado(event) {
  let alvo = event.target
  const classes = alvo.classList

  if(classes === "option"){
    alvo.classList.add("selecionado");
  } else{
    let pai = alvo.parentNode
    pai.classList.add("selecionado")
  }
}