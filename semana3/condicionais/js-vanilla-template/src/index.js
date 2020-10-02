// CONDICIONAIS
// **Exercícios de interpretação de código**
// 1.
// Primeiro ele pergunta ao usuário um número para teste, que é armazenado em respostaDoUsuario;
// O número que o usuário digitou é guardado na constante numero em formato de números, antes era uma String;
// Se o resto da divisao por dois do numero escolhido for igual a zero você passa no Teste.
// Se o resto da divisao for igual a 1 o usuário não passa no teste.

// 2.
// a)
// Para informar ao usuário o preço da fruta escolhida
// b)
// O preço da fruta maça é de R$ 5
// c)
// O código continua rodando sem o break no item pêra e exibe o preço do item default

// 3.
// a)
// Solicita um numero ao usuario que é guardando em um constante chamada numero, com o tipo numero.
// b)
// 10: Esse número passou no teste; 
// -10: erro;
// c)
// Sim, pois o let mensagem  está em um bloco, por isso ele nao pode ser usado fora deste escopo

// **Exercícios de escrita de código**
// 4.
// 4.1) 
// let idade = prompt("Olá, qual sua idade?")
// // 4.2)
// idade = Number(idade)
// // 4.3)
// if(idade>=18) {
//     console.log("Você pode dirigir")
// } else{
//     console.log("Você não pode dirigir")
// }

// 5.
// const turno = prompt("Qual turno você estuda? \n Opções: M para (matutino) , V para (Vespertino) ou N para (Noturno) ").toLowerCase()

// if(turno === "m"){
//     console.log("Bom Dia!")
// } else if(turno === "v"){
//     console.log("Boa Tarde!")
// } else if(turno === "n"){
//     console.log("Boa Noite!")
// } else {
//     console.log("Inválido: Digite M, V ou N")
// }

// 6.
// const turno = prompt("Qual turno você estuda? \n Opções: M para (matutino) , V para (Vespertino) ou N para (Noturno) ").toLowerCase()
// switch(turno) {
//     case "m":
//         console.log("Bom Dia!")
//         break
//     case "v":
//         console.log("Boa Tarde!")
//         break
//     case "n":
//         console.log("Boa Noite!")
//         break
//     default:
//         console.log("Inválido, Digite M, V ou N")
// }

// 7.)
// const fantasia = prompt("Qual gênero de filme você irá assistir?").toLowerCase()
// const preco = Number(prompt("Qual o preço do filme você irá assistir?"))

// if(fantasia === "fantasia" && preco < 15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }

// **DESAFIO**
// 1)
// const fantasia = prompt("Qual gênero de filme você irá assistir?").toLowerCase()
// const preco = Number(prompt("Qual o preço do filme você irá assistir?"))
// const snack = prompt("Qual snack você irá comprar? \nOpções: pipoca ou chocolate")


// if(fantasia === "fantasia" && preco < 15) {
//     console.log("Bom filme!\n... com", snack)
// } else {
//     console.log("Escolha outro filme :(")
// }

// 2)
const nomeCompleto = prompt("Informe seu nome completo").toLocaleLowerCase()
const tipoDoJogo = prompt("Qual o tipo do jogo você irá comprar:\nIN: Internacional\nDO: Doméstico").toLocaleLowerCase()
const etapaDoJogo = prompt("Indique uma etapa:\nSF: Semi-final\nDT: Decisão de terceiro lugar\nFI: Final").toLocaleLowerCase()
const categoria = Number(prompt("Informe a categoria:\nOpções: 1, 2, 3 e 4"))
const quantidadeDeIngressos = Number(prompt("Quantos ingressos você irá adquirir?"))


