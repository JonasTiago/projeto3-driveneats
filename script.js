
let escolhidos = 0;

function itemSelecionado(escolha, secao){
  
  
  let selecionados = document.querySelector(secao + '> .selecionado')
  //console.log(document.querySelector(secao + '> .selecionado h3'))
  
  if(selecionados != null){
    selecionados.classList.remove("selecionado") 
  }else {
    escolhidos++;
  }

  let selecionado = document.querySelector(escolha)
  selecionado.classList.add('selecionado')

  if(escolhidos > 2){
    let botaoPedido = document.querySelector('button')
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


let mensagemAuto

function finalizarPedido(){
  let precoFinal = parseFloat(pratoEscolhido[1]) + parseFloat(bebidasEscolhido[1]) + parseFloat(sobremesaEscolhido[1])
  let mensagem = `Olá, gostaria de fazer o pedido:
  - Prato: ${pratoEscolhido[0]}
  - Bebida: ${bebidasEscolhido[0]}
  - Sobremesa: ${sobremesaEscolhido[0]}
  Total: R$ ${precoFinal.toFixed(2)}`
  mensagemAuto = encodeURIComponent(mensagem);
  
  window.open(`https://wa.me/5585998000067?text=${mensagemAuto}`)
}


