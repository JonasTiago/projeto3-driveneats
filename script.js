
let escolhidos = 0;

function itemSelecionado(escolha, secao){

  let selecionados = document.querySelector(secao + '> .selecionado')
  
  if(selecionados != null){
    selecionados.classList.remove("selecionado") 
  }else {
    escolhidos++;
  }

  let selecionado = document.querySelector(escolha)
  selecionado.classList.add('selecionado')

  if(escolhidos > 2){
    let botaoPedido = document.querySelector('footer > button')
      botaoPedido.innerHTML = 'Fechar Pedido'
      botaoPedido.removeAttribute('disabled')
      botaoPedido.classList.add('liberado')   
  }

  pedidosEscolhidos(secao)

}


let pratoEscolhido = [1, 2];
let bebidasEscolhido = [1, 2];
let sobremesaEscolhido = [1, 2];

function pedidosEscolhidos(pedidoEscolhido){

  if(pedidoEscolhido == '#pratos') {
    pratoEscolhido[0] = document.querySelector(pedidoEscolhido +"> .selecionado > :nth-child(2)").innerHTML
    pratoEscolhido[1] = document.querySelector(pedidoEscolhido +"> .selecionado  span").innerHTML
  }
  if(pedidoEscolhido == '#bebidas') {
    bebidasEscolhido[0] = document.querySelector(pedidoEscolhido +"> .selecionado > :nth-child(2)").innerHTML
    bebidasEscolhido[1] = document.querySelector(pedidoEscolhido +"> .selecionado span").innerHTML
  }
  if(pedidoEscolhido == '#sobremesa') {
    sobremesaEscolhido[0] = document.querySelector(pedidoEscolhido +"> .selecionado > :nth-child(2)").innerHTML
    sobremesaEscolhido[1] = document.querySelector(pedidoEscolhido +"> .selecionado span").innerHTML
  }
}

let precoFinal;
let nome;
let endereço;
function confirmarPedido(){
  nome = prompt("Seu nome:")
  endereço = prompt("Seu endereço:")
  let confimar = document.querySelector('.confimacao')
  confimar.classList.toggle('invisivel')
  let pratoFinal = document.querySelector('.confimacao > div > div p:nth-child(1)')
  let bebidaFinal = document.querySelector('.confimacao > div > div p:nth-child(2)')
  let sobremesaFinal = document.querySelector('.confimacao > div > div p:nth-child(3)')
  let total = document.querySelector('.confimacao > div > div p:nth-child(4)')

  precoFinal = parseFloat(pratoEscolhido[1]) + parseFloat(bebidasEscolhido[1]) + parseFloat(sobremesaEscolhido[1])
  pratoFinal.innerHTML = `<span>${pratoEscolhido[0]}</span><span>${pratoEscolhido[1]}</span>`
  bebidaFinal.innerHTML = `<span>${bebidasEscolhido[0]}</span><span>${bebidasEscolhido[1]}</span>`
  sobremesaFinal.innerHTML = `<span>${sobremesaEscolhido[0]}</span><span>${sobremesaEscolhido[1]}</span>`
  total.innerHTML = `<span>Total</span><span>${precoFinal.toFixed(2)}</span>`

}

let mensagemAuto;
function enviarPedido() {
  //precoFinal = parseFloat(pratoEscolhido[1]) + parseFloat(bebidasEscolhido[1]) + parseFloat(sobremesaEscolhido[1])
  let mensagem = `Olá, gostaria de fazer o pedido:
  - Prato: ${pratoEscolhido[0]}
  - Bebida: ${bebidasEscolhido[0]}
  - Sobremesa: ${sobremesaEscolhido[0]}
  Total: R$ ${precoFinal.toFixed(2)}

  Nome: ${nome}
  Endereço: ${endereço}`
  mensagemAuto = encodeURIComponent(mensagem);
  window.open(`https://wa.me/5585998000067?text=${mensagemAuto}`)
  location.reload()
  
}



