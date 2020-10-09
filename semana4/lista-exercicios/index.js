// EXERCICIO DE INTERPRETACAO DE CODIGO// 1. Temos uma função com um parametro valorEmDolar, a constante cotacao pede ao usuario a cotacao do dia, e o return multiplica o parametro da funcao com a cotacao que o usuario informou, depois a constante guarda a informaçao do meuDinheiro e invoca a funçao conversorDeMoeda, o console.log() imprimi no console.

//2. A função tem dois parametros, tipo de investimento e valor, ela verifica qual investimento a pessoa quer fazer e multiplica pelo valor do tipo de investimento, a constante novoMontante irá imprimir o valor de 150 * 1.1, já o segundoMontante irá apresentar o alerta de tipo de investimento informado incorreto.

//3. Temos um array numeros que vários números pares e ímpares, rodamos um for para varrer este array, se o numero for par ele será colocado dentro da variavel array1, se for impar ele será colocado dentro do array2.
//O primeiro console.log irá apresentar a mensagem Quantidade total de numeros e a quantidade de numeros, o console.log 2 ira apresentar a quantidade de numeros pares do array1, e o console.log 3 irá apresentar os numeros impares do array2.

//4. Temos uma constante com um array nomeado de numeros, duas variaveis com numero 1 e numero 2, no laço todos os numeros sao testados, o numero 1 é infinito sempre será maior que qualquer número, no if é testado se o numero é maior que o infinito, sempre será menor entao o numero 1, sera o numero, na segunda verificação pegamos o numermo e verificamos se ele é maior que 0 ele nao irá pegar o numero -10.

//EXERCICIOS DE LOGICA DE PROGRAMACAO
//1. for / for of / while
// const numeros =[1, 2, 3, 4]
// 2	
// 3	    for(let i=0 ; i < numeros.length; i++){
// 4	        const numero = numeros[i]
// 5	        console.log(numero)

//2.
//a. False
//b. False
//c. True
//d. True
//e. true

// 3.
// Não, faltava o = o [] e o valor na const quantidadeDeNumeros, na condiçao de continuaçao estava com um = que nao deveria e faltava o incremento responsável para quebrar o loop.
// const quantidadeDeNumerosPares=[5]
// let i = 0 //começo
// while(i < quantidadeDeNumerosPares) { // condiçao de continuaçao
//   console.log(i*2) // açao a ser repetida
//   i++ // incremento
// }

//4. 
// function trignometria (a, b, c){
//     if (a === b && b === c){
//         console.log("Equilátero")
//     } else if (a!==b && b!==c && c!==a) {
//         console.log("Escaleno")
//     } else {
//         console.log("Isósceles")
//     }
// }

// trignometria(1, 2, 2)

//5.
// const a=Number(prompt('Digite uma valor'))
// const b=Number(prompt('Digite o segundo valor' ))

// let arrayNumero = [a,b]
// let valorMaior = 0
// let valorMenor = Infinity

// for(let i=0 ;i < arrayNumero.length; i++){
//     if (arrayNumero[i] > valorMaior ){
//     valorMaior=arrayNumero[i]
//     }
//     if (arrayNumero[i] < valorMenor ) {
//     valorMenor=arrayNumero[i]
//     }
// }

// console.log ('ENTRADA:')
// console.log(`os valores digitados são :${a} e ${b}`)
// console.log ('SAIDA:')
// console.log(`O valor maior é : ${valorMaior}`)
// console.log(`O valor menor é : ${valorMenor}`)

// if (valorMaior % valorMenor === 0)
// {
//   console.log(`o numero ${valorMaior} é divisivel por ${valorMenor}`) 
// }

// if (valorMenor % valorMaior !== 0 ){
//     console.log(`o numero ${valorMenor} não é divisivel por ${valorMaior}`) 
// }

// Exercícios de Funções
// 1.
let arrayDeNumeros = [199,5, 10, 55, 1, 200,2, 77, 65, 300 ]
let primeiroValorMaior = 0
let segundoValorMaior = 0
let primeiroValorMenor = Infinity
let segundoValorMenor = Infinity

function valores(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > primeiroValorMaior) {
            primeiroValorMaior = array[i]
        }
        if (array[i] < primeiroValorMenor) {
            primeiroValorMenor = array[i]
        }
    for (let i = 0; i < array.length; i++)  {   
        if (array[i] > segundoValorMaior && array[i] < primeiroValorMaior) {
            segundoValorMaior = array[i]
        }
      
        if (array[i] < segundoValorMenor && array[i] > primeiroValorMenor) {
            
           segundoValorMenor = array[i]
         }
    }
    }
console.log(segundoValorMaior)
console.log(segundoValorMenor)
}
valores(arrayDeNumeros)