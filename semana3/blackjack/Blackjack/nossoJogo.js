/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

 //SAUDAÇÃO
console.log("Bem vindo ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
   let usuarioCarta1 = comprarCarta()
   let usuarioCarta2 = comprarCarta()
   let pcCarta1 = comprarCarta()
   let pcCarta2 = comprarCarta()

   let pontuacaoUsuario = usuarioCarta1.valor + usuarioCarta2.valor
   let pontuacaoPc = pcCarta1.valor + pcCarta2.valor

   console.log(`Usuário - cartas: ${usuarioCarta1.texto} ${usuarioCarta2.texto} - ${pontuacaoUsuario}`)
   console.log(`Usuário - cartas: ${pcCarta1.texto} ${pcCarta2.texto} - ${pontuacaoPc}`)

   if (pontuacaoUsuario > pontuacaoPc){
      console.log("O usuário ganhou!")
   } else if (pontuacaoUsuario < pontuacaoPc) {
      console.log("O pc ganhou!")
   } else if (pontuacaoUsuario === pontuacaoPc) {
      console.log("Empate")
   }


} else {
   console.log("O jogo acabou")
}