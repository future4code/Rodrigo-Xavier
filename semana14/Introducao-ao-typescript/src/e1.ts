//Exercicio 1
//a)
// const minhaString: string = 1
// Apresenta um erro pois o número não é uma string

//b)
// const meuNumero: number | string = 1
// Podemos fazer ela também aceitar strings usando o union type, inserindo uma | entre os tipos

//c)
// type pessoa = {nome: string, idade: number, corFavorita: string}
// const astrodev: pessoa = {
//     nome: "astrodev",
//     idade: 30,
//     corFavorita: "azul"
// }

//d)
// type pessoa = {nome: string, idade: number, corFavorita: string}
// const pessoa1: pessoa = {
//     nome: "Joao",
//     idade: 30,
//     corFavorita: "azul"
// }
// const pessoa2: pessoa = {
//     nome: "Maria",
//     idade: 20,
//     corFavorita: "rosa"
// }
// const pessoa3: pessoa = {
//     nome: "Marina",
//     idade: 15,
//     corFavorita: "amarelo"
// }

//e) 
enum cores {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

type pessoa = {
    nome: string,
    corFavorita: cores
}

const rodrigo : pessoa = {
    nome: "Rodrigo",
    corFavorita: cores.AZUL
}
