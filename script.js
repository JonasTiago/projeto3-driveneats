let pratos = document.getElementById("pratos") 
let bebidas = document.getElementById("bebidas");
let sobremesa = document.getElementById("sobremesa");


pratos.addEventListener('click', (event) => {
  naoSelecionado(pratos)
  itemSelecionado(event)
    
})

bebidas.addEventListener('click', (event) => {
  naoSelecionado(bebidas)
  itemSelecionado(event)
  
})

sobremesa.addEventListener('click', (event) => {
  naoSelecionado(sobremesa)
  itemSelecionado(event)
  
})


const itemSelecionado = (event) => {
  const alvo = event.target
  const classes = alvo.classList

  if(classes === "option"){
    alvo.classList.add("selecionado");
  } else{
    let pai = alvo.parentNode
    pai.classList.add("selecionado")
  }
}


const naoSelecionado = (item) => {
  let pratos = item.getElementsByClassName('option')

  for(let i = 0; i < pratos.length; i++){
    let test = pratos[i].classList
    test.forEach((item) => {
      if(item == "selecionado"){
        pratos[i].classList.remove("selecionado")
      } 
    })
  }

}


